import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Thato Thobane",
  description: "Download the CV of Thato Thobane, a Johannesburg-based full-stack developer.",
};

export default function CV() {
  return (
    <div className="mx-auto w-full max-w-[74rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <header className="mb-8 pt-2 lg:mb-10">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#1b766e]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#46a895]" />
          Experience &amp; background
        </p>
        <h1 className="mt-4 text-[clamp(2.3rem,9vw,3.8rem)] font-bold leading-tight tracking-[-0.065em] text-[#182b2b]">
          My CV
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#6d7c7a]">
          Learn more about my experience, technical strengths, and the kind of
          work I am excited to take on next.
        </p>
      </header>

      <section className="grid items-center gap-6 rounded-2xl border border-[#e1e8e5] bg-white p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold text-[#1b766e]">Thato Thobane</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#182b2b]">
            Full-stack developer
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6d7c7a]">
            Based in Johannesburg, South Africa. I build accessible web
            experiences with React, Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
        <a
          href="/thato-thobane-cv.txt"
          download
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#173b39] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#245a54]"
        >
          Download CV <span aria-hidden="true">↓</span>
        </a>
      </section>

      <p className="mt-6 text-sm text-[#6d7c7a]">
        Looking for a role or collaboration?{" "}
        <Link href="/contact" className="font-semibold text-[#1b766e] hover:underline">
          Let&apos;s talk
        </Link>
        .
      </p>
    </div>
  );
}
