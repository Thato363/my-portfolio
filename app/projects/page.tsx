export default function Projects() {
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

  return (
    <div className="flex flex-col flex-1">
      <section className="px-4 py-16 sm:py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          A selection of projects I have built. Live demos and source code links
          coming soon.
        </p>
      </section>

      <section className="px-4 max-w-6xl mx-auto pb-24">
        <div className="flex gap-2 justify-center mb-12">
          {["All", "Web", "Mobile"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "All"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl p-6 border border-slate-200 flex flex-col"
            >
              <div className="h-56 w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 mb-4 flex items-center justify-center text-slate-400 text-sm">
                [{project.title} preview]
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-auto">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] border border-slate-300 rounded text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-slate-400 mt-auto">
                {project.status}
              </span>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-slate-500 text-sm">
          More projects coming soon…
        </p>
      </section>
    </div>
  );
}