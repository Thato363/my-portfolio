import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Thato Thobane",
  description: "Contact Thato Thobane about frontend and full-stack development opportunities.",
};

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-[74rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <header className="mb-6 pt-2 lg:mb-8">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#1b766e]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#46a895]" />
          Let&apos;s start a conversation
        </p>
        <h1 className="mt-4 text-[clamp(2.3rem,9vw,3.8rem)] font-bold leading-tight tracking-[-0.065em] text-[#182b2b]">
          Get in touch
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#6d7c7a]">
          Available for freelance work and full-time frontend / full-stack roles.
          I&apos;d love to hear what you&apos;re working on.
        </p>
      </header>

      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-5">
        <ContactForm />

        <div className="grid gap-4">
          <section className="rounded-2xl border border-[#e1e8e5] bg-white p-5 sm:p-6">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-[#182b2b]">
              Let&apos;s connect
            </h2>
            <p className="mb-5 text-sm leading-6 text-[#6d7c7a]">
              Feel free to reach out by email or find me on LinkedIn and GitHub.
            </p>
            <div className="grid gap-4">
              {[
                { label: "Email", value: "thato@example.com", hint: "Send me an email", href: "mailto:thato@example.com" },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/thatothobane",
                  hint: "@thatothobane",
                  href: "https://www.linkedin.com/in/thatothobane",
                },
                {
                  label: "GitHub",
                  value: "github.com/Thato363",
                  hint: "@Thato363",
                  href: "https://github.com/Thato363",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 items-center gap-3"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e5f2ef] text-sm font-bold text-[#1b766e]"
                    aria-hidden="true"
                  >
                    {item.label[0]}
                  </div>
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="min-w-0 hover:underline">
                    <strong className="block [overflow-wrap:anywhere] text-xs font-semibold text-[#182b2b]">
                      {item.value}
                    </strong>
                    <span className="mt-1 block text-xs text-[#6d7c7a]">
                      {item.hint}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </section>
          <div className="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-[#c9d8d3] bg-[radial-gradient(ellipse_at_50%_30%,rgba(141,201,186,0.23),transparent_55%),#edf3f0] text-sm text-[#78908a]">
            Johannesburg, South Africa
          </div>
        </div>
      </div>
    </div>
  );
}
