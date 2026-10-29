import Link from "next/link";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {

  return (
    <div className="mx-auto w-full max-w-[74rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <section className="relative overflow-hidden rounded-3xl border border-[#dfe9e5] bg-[radial-gradient(ellipse_at_90%_5%,rgba(120,205,183,0.21),transparent_38%),linear-gradient(135deg,#fff_0%,#f2f8f5_100%)] p-6 sm:p-12 lg:p-16">
        <div className="relative z-10 max-w-2xl">
          <p className="m-0 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#1b766e]">
            <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#46a895]" />
            Full-stack developer · Johannesburg
          </p>
          <h1 className="mt-4 text-[clamp(2.4rem,10vw,4.5rem)] font-bold leading-[1.04] tracking-[-0.065em] text-[#182b2b]">
            Thato
            <br />
            <span className="text-[#1b766e]">Thobane.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#6d7c7a]">
            I build accessible, thoughtful web experiences that help turn good
            ideas into useful products.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#173b39] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#245a54]"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#e1e8e5] bg-white/70 px-5 py-3 text-sm font-semibold text-[#182b2b] transition hover:border-[#b8cec7] hover:bg-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 lg:mt-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="m-0 text-2xl font-bold tracking-[-0.04em] text-[#182b2b]">
              About me
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-[#6d7c7a]">
              Curious by nature, focused on making the web work better.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.8fr)] sm:gap-5">
          <div className="rounded-2xl border border-[#e1e8e5] bg-white p-5 text-[0.93rem] leading-7 text-[#6d7c7a] sm:p-7">
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
          <div className="flex min-h-52 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#c9d8d3] bg-[radial-gradient(ellipse_at_50%_30%,rgba(141,201,186,0.23),transparent_55%),#edf3f0] text-sm text-[#78908a]">
            Portrait photo
          </div>
        </div>
      </section>

      <section className="mt-10 lg:mt-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="m-0 text-2xl font-bold tracking-[-0.04em] text-[#182b2b]">
              Selected work
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-[#6d7c7a]">
              A few things I have been exploring and building.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-semibold text-[#1b766e] hover:underline hover:underline-offset-4"
          >
            All projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
          <FeaturedProjects />
      </section>
    </div>
  );
}
