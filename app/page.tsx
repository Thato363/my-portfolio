import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <section className="px-4 py-20 sm:py-32 max-w-6xl mx-auto text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 text-white mx-auto mb-6 text-sm font-mono font-bold">
          TT
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Thato Thobane
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Full-stack developer building accessible, performant web applications
          with React, Next.js, TypeScript and Tailwind CSS.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="px-4 py-20 border-y border-slate-200 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">About me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              I am a full-stack developer based in Johannesburg, South Africa. I
              enjoy turning ideas into products that people can actually use.
            </p>
            <p>
              My stack is Next.js, React, TypeScript and Tailwind CSS, and I am
              looking for frontend / full-time or contract roles where I can
              ship quality code.
            </p>
          </div>
          <div className="flex h-80 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 text-sm">
            [Portrait photo placeholder]
          </div>
        </div>
      </section>

      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Featured work</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 underline-offset-4 hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "E-commerce storefront", desc: "Responsive shop with cart and checkout.", stack: ["Next.js", "TypeScript", "Stripe"] },
            { title: "Task dashboard", desc: "Drag-and-drop kanban board with real-time updates.", stack: ["React", "Tailwind", "Firebase"] },
            { title: "Finance tracker", desc: "Charts and monthly summaries for income and expenses.", stack: ["Next.js", "Recharts", "Tailwind"] },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-xl p-6 border border-slate-200 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="h-48 w-full rounded-lg border border-slate-200 bg-slate-100 mb-4 flex items-center justify-center text-slate-400 text-sm">
                [{project.title} image]
              </div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] border border-slate-300 rounded text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
