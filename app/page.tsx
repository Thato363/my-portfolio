import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  const hasPortrait = existsSync(
    join(process.cwd(), "public", "portrait.jpg"),
  );

  return (
    <div className="mx-auto w-full max-w-[78rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <section className="relative isolate grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#151a31] p-6 text-white shadow-[0_28px_80px_rgba(30,26,63,0.2)] sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:p-14">
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#a879ff]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-1/4 -z-10 h-80 w-80 rounded-full bg-[#ff795f]/20 blur-3xl" />

        <div className="hero-reveal relative z-10">
          <p className="m-0 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#c8d1ff]">
            <span className="h-2 w-2 rounded-full bg-[#c4f36a] shadow-[0_0_14px_rgba(196,243,106,0.9)]" />
            Full-stack developer · Johannesburg
          </p>
          <h1 className="mt-6 text-[clamp(2.8rem,8vw,5.6rem)] font-bold leading-[0.98] tracking-[-0.075em]">
            I&apos;m Thato
            <br />
            <span className="bg-gradient-to-r from-[#c4f36a] via-[#8de4d2] to-[#b8a0ff] bg-clip-text text-transparent">
              Thobane.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#c1c5d8] sm:text-lg sm:leading-8">
            I build accessible, thoughtful web experiences that turn good ideas
            into useful products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#c4f36a] px-5 py-3 text-sm font-bold text-[#1a2231] transition duration-200 hover:-translate-y-1 hover:bg-[#d2ff7b] hover:shadow-[0_10px_30px_rgba(196,243,106,0.2)]"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#aeb4cc]">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4f36a]" />
              Open to opportunities
            </span>
            <span>React · Next.js · TypeScript</span>
          </div>
        </div>

        <div className="hero-reveal relative mx-auto w-full max-w-[23rem] lg:justify-self-end">
          <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#c4f36a]/20 via-[#7fe2d4]/10 to-[#a879ff]/30 blur-xl" />
          <div className="hero-float relative aspect-[4/4.5] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#91dcd0] via-[#8c88c7] to-[#f39b87] p-3 shadow-[0_24px_70px_rgba(6,9,24,0.45)]">
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/30 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.55),transparent_35%),linear-gradient(145deg,rgba(20,30,51,0.12),rgba(20,30,51,0.72))]">
              {hasPortrait ? (
                <Image
                  src="/portrait.jpg"
                  alt="Portrait of Thato Thobane"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 368px"
                  className="object-cover"
                />
              ) : (
                <>
                  <div className="absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full border border-white/20" />
                  <div className="absolute left-1/2 top-[24%] h-44 w-44 -translate-x-1/2 rounded-full border border-white/20" />
                  <div
                    aria-hidden="true"
                    className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/40 bg-white/15 text-5xl font-bold tracking-[-0.08em] text-white shadow-[0_10px_40px_rgba(20,30,51,0.2)] backdrop-blur-sm"
                  >
                    TT
                  </div>
                  <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                    Your portrait
                  </p>
                  <p className="relative mt-1 text-[0.68rem] text-white/70">
                    A little more about me
                  </p>
                </>
              )}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-[#171c32]/60 px-4 py-3 text-white shadow-lg backdrop-blur-md">
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/65">
                    Based in
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold">
                    Johannesburg, ZA
                  </span>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c4f36a] text-lg font-bold text-[#1a2231]">
                  ↗
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-16">
        <div className="mb-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#7b67c7]">
            A bit about me
          </p>
          <h2 className="m-0 text-2xl font-bold tracking-[-0.04em] text-[#211a34] sm:text-3xl">
            Curious by nature, focused on impact.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.8fr)] sm:gap-5">
          <div className="rounded-2xl border border-[#e7e2f1] bg-white p-5 text-[0.93rem] leading-7 text-[#67627a] shadow-[0_8px_28px_rgba(37,27,64,0.04)] sm:p-7">
            <p>
              I am a full-stack developer based in Johannesburg, South Africa.
              I enjoy turning ideas into products that people can actually use.
            </p>
            <p>
              My stack is Next.js, React, TypeScript and Tailwind CSS, and I am
              looking for frontend / full-time or contract roles where I can
              ship quality code.
            </p>
          </div>
          <div className="flex min-h-52 flex-col justify-center rounded-2xl border border-[#dfd5ff] bg-[radial-gradient(circle_at_85%_15%,rgba(196,243,106,0.28),transparent_32%),linear-gradient(135deg,#eee9ff,#faf8ff)] p-6 sm:p-7">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7b67c7]">
              What I bring
            </span>
            <p className="mt-3 text-xl font-bold leading-snug tracking-[-0.04em] text-[#29213f]">
              Good ideas deserve to feel great to use.
            </p>
            <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#54458e]">
              Design-minded development <span aria-hidden="true">✳</span>
            </span>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-16">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#7b67c7]">
              Things I&apos;ve made
            </p>
            <h2 className="m-0 text-2xl font-bold tracking-[-0.04em] text-[#211a34] sm:text-3xl">
              Selected work
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-[#777187]">
              A few things I have been exploring and building.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 rounded-full border border-[#dfd5ff] bg-white px-4 py-2 text-sm font-semibold text-[#6652ae] transition hover:border-[#7b67c7] hover:bg-[#f6f2ff]"
          >
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <FeaturedProjects />
      </section>
    </div>
  );
}
