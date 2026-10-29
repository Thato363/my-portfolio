const skillGroups = [
  {
    title: "Frontend",
    description: "Building polished, responsive interfaces with a focus on clarity and accessibility.",
    skills: [
      { name: "React", href: "https://github.com/Thato363/my-portfolio" },
      { name: "Next.js", href: "https://github.com/Thato363/nextjs-dashboard" },
      { name: "TypeScript", href: "https://github.com/Thato363/my-portfolio" },
      { name: "Tailwind CSS", href: "https://github.com/Thato363/my-portfolio" },
      { name: "HTML & CSS", href: "https://github.com/Thato363/nasa-exploration" },
    ],
  },
  {
    title: "Backend",
    description: "Designing dependable APIs and data-driven features that support real products.",
    skills: [
      { name: "Node.js", href: "https://github.com/Thato363/nextjs-dashboard" },
      { name: "REST APIs", href: "https://github.com/Thato363/API-Geolocation" },
      { name: "Supabase", href: "https://github.com/Thato363/nextjs-dashboard" },
      { name: "PostgreSQL", href: "https://github.com/Thato363/nextjs-dashboard" },
      { name: "Authentication", href: "https://github.com/Thato363/nextjs-dashboard" },
    ],
  },
  {
    title: "Workflow",
    description: "Working thoughtfully from the first idea through delivery and iteration.",
    skills: [
      { name: "Git & GitHub", href: "https://github.com/Thato363" },
      { name: "Responsive design", href: "https://github.com/Thato363/my-portfolio" },
      { name: "Component systems", href: "https://github.com/Thato363/my-portfolio" },
      { name: "Testing", href: "https://github.com/Thato363/nextjs-dashboard" },
      { name: "Deployment", href: "https://my-portfolio-amber-theta-53.vercel.app" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto w-full max-w-[74rem] px-4 py-5 sm:px-6 sm:py-8 lg:px-[clamp(2rem,5vw,5rem)] lg:py-12">
      <header className="mb-8 pt-2 lg:mb-10">
        <p className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#1b766e]">
          <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-[#46a895]" />
          Tools I use to bring ideas to life
        </p>
        <h1 className="mt-4 text-[clamp(2.3rem,9vw,3.8rem)] font-bold leading-tight tracking-[-0.065em] text-[#182b2b]">
          Skills
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#6d7c7a]">
          A practical toolkit shaped by building useful products, learning continuously,
          and caring about the details users notice.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {skillGroups.map((group, index) => (
          <section
            key={group.title}
            className="rounded-2xl border border-[#e1e8e5] bg-white p-5 sm:p-6"
          >
            <span className="font-mono text-xs font-bold text-[#76a99d]">0{index + 1}</span>
            <h2 className="mt-5 text-xl font-bold tracking-tight text-[#182b2b]">
              {group.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#6d7c7a]">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#dce8e3] bg-[#f7faf8] px-3 py-1.5 text-xs font-semibold text-[#58736c] hover:border-[#1b766e] hover:text-[#1b766e]"
              >
                {skill.name} ↗
              </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
