const projects = [
  {
    title: "E-commerce storefront",
    desc: "Responsive shop with product catalogue, cart and Stripe checkout.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    status: "Coming soon",
  },
  {
    title: "Task management dashboard",
    desc: "Drag-and-drop kanban board with real-time updates and drag-and-drop columns.",
    stack: ["React", "TypeScript", "Tailwind", "Firebase"],
    status: "Coming soon",
  },
  {
    title: "Personal finance tracker",
    desc: "Charts and monthly summaries for income, expenses and savings goals.",
    stack: ["Next.js", "Recharts", "Tailwind"],
    status: "Coming soon",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-[74rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <header className="mb-6 pt-2 lg:mb-8">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#1b766e]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#46a895]" />
          A few things I have been building
        </p>
        <h1 className="mt-4 text-[clamp(2.3rem,9vw,3.8rem)] font-bold leading-tight tracking-[-0.065em] text-[#182b2b]">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#6d7c7a]">
          A selection of projects I have built. Live demos and source code links
          coming soon.
        </p>
      </header>

      <section aria-label="Project filters and results">
        <div
          className="mb-5 flex gap-2 overflow-x-auto"
          aria-label="Filter projects"
        >
          <button
            type="button"
            className="shrink-0 rounded-full border border-[#173b39] bg-[#173b39] px-4 py-2 text-xs font-semibold text-white"
          >
            All work
          </button>
          <button
            type="button"
            className="shrink-0 rounded-full border border-[#e1e8e5] bg-white px-4 py-2 text-xs font-semibold text-[#6d7c7a]"
          >
            Web
          </button>
          <button
            type="button"
            className="shrink-0 rounded-full border border-[#e1e8e5] bg-white px-4 py-2 text-xs font-semibold text-[#6d7c7a]"
          >
            Mobile
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="flex min-w-0 flex-col rounded-2xl border border-[#e1e8e5] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(24,56,51,0.08)]"
            >
              <div className="mb-4 flex min-h-40 items-center justify-center rounded-xl border border-dashed border-[#c9d8d3] bg-[linear-gradient(135deg,#edf4f0,#f9fbfa)] p-4 text-center text-xs text-[#78908a]">
                Project 0{index + 1} preview
              </div>
              <h2 className="mb-1.5 text-base font-bold tracking-tight text-[#182b2b]">
                {project.title}
              </h2>
              <p className="mb-4 text-sm leading-6 text-[#6d7c7a]">
                {project.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#dce8e3] bg-[#f7faf8] px-2 py-1 text-[0.68rem] font-semibold text-[#58736c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-4 text-xs font-semibold text-[#778984]">
                {project.status}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[#6d7c7a]">
          More projects coming soon.
        </p>
      </section>
    </div>
  );
}
