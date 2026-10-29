"use client";

import { useState } from "react";
import { supabase, supabaseConfigError } from "@/lib/supabase";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(formData: FormData) {
    setStatus("sending");
    setMessage("");

    if (supabaseConfigError) {
      setStatus("error");
      setMessage(supabaseConfigError);
      return;
    }

    if (formData.get("website")) {
      setStatus("success");
      setMessage("Thanks for reaching out.");
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const body = String(formData.get("message") ?? "").trim();

    if (name.length < 2 || body.length < 10 || !email.includes("@")) {
      setStatus("error");
      setMessage("Please provide a valid name, email address, and message.");
      return;
    }

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message: body,
    });

    if (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
      setMessage("I could not send your message. Please email me directly instead.");
      return;
    }

    setStatus("success");
    setMessage("Thanks for reaching out. I will get back to you soon.");
  }

  return (
    <form action={submit} className="rounded-2xl border border-[#e1e8e5] bg-white p-5 sm:p-6">
      <h2 className="mb-5 text-xl font-bold tracking-tight text-[#182b2b]">Send a message</h2>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="name" className="text-xs font-semibold text-[#405653]">Name</label>
          <input id="name" name="name" type="text" required minLength={2} placeholder="Your name" className="min-h-11 w-full rounded-lg border border-[#dce5e1] bg-[#fcfdfc] px-3 py-2 text-sm text-[#182b2b] outline-none placeholder:text-[#8a9995] focus:border-[#65a99b] focus:ring-4 focus:ring-[#439785]/15" />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold text-[#405653]">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className="min-h-11 w-full rounded-lg border border-[#dce5e1] bg-[#fcfdfc] px-3 py-2 text-sm text-[#182b2b] outline-none placeholder:text-[#8a9995] focus:border-[#65a99b] focus:ring-4 focus:ring-[#439785]/15" />
        </div>
        <div className="flex min-w-0 flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-semibold text-[#405653]">Message</label>
          <textarea id="message" name="message" rows={5} required minLength={10} placeholder="What would you like to talk about?" className="min-h-32 w-full resize-y rounded-lg border border-[#dce5e1] bg-[#fcfdfc] px-3 py-2 text-sm text-[#182b2b] outline-none placeholder:text-[#8a9995] focus:border-[#65a99b] focus:ring-4 focus:ring-[#439785]/15" />
        </div>
      </div>
      <button type="submit" disabled={status === "sending"} className="mt-4 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#173b39] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#245a54] disabled:cursor-wait disabled:opacity-70">
        {status === "sending" ? "Sending..." : "Send message"} <span aria-hidden="true">↗</span>
      </button>
      {message && (
        <p role="status" className={`mt-3 text-sm ${status === "error" ? "text-red-700" : "text-[#1b766e]"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
