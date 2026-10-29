"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseConfigError, type Project } from "@/lib/supabase";

const filters = ["All work", "Web", "Mobile"] as const;
type ProjectFilter = (typeof filters)[number];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All work");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      if (supabaseConfigError) {
        setError(supabaseConfigError);
        setLoading(false);
        return;
      }
      try {
        const result = await Promise.race([
          supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: true }),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("The project database request timed out.")), 10000)
          ),
        ]);
        if (cancelled) return;
        if (result.error) {
          setError(result.error.message);
          setProjects([]);
        } else {
          setProjects((result.data as Project[]) ?? []);
        }
      } catch (loadError) {
        if (cancelled) return;
        console.error("Projects request failed:", loadError);
        setError(loadError instanceof Error ? loadError.message : "Could not connect to the project database.");
        setProjects([]);
      }
      setLoading(false);
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProjects =
    activeFilter === "All work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
          A selection of projects I have built, with links to the live demos and
          source code.
        </p>
      </header>

      <section aria-label="Project filters and results">
        <div
          className="mb-5 flex gap-2 overflow-x-auto"
          aria-label="Filter projects"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-[#173b39] bg-[#173b39] text-white"
                    : "border-[#e1e8e5] bg-white text-[#6d7c7a] hover:border-[#b8cec7] hover:text-[#173b39]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {loading ? (
          <p className="rounded-2xl border border-dashed border-[#c9d8d3] bg-[#f7faf8] px-5 py-10 text-center text-sm text-[#6d7c7a]">
            Loading projects…
          </p>
        ) : error ? (
          <p className="rounded-2xl border border-dashed border-[#c9d8d3] bg-[#f7faf8] px-5 py-10 text-center text-sm text-[#6d7c7a]">
            Could not load projects: {error}
          </p>
        ) : visibleProjects.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-[#c9d8d3] bg-[#f7faf8] px-5 py-10 text-center text-sm text-[#6d7c7a]">
            No projects in this category yet.
          </p>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <article
                  key={project.id}
                  className="flex min-w-0 flex-col rounded-2xl border border-[#e1e8e5] bg-white p-4 transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(24,56,51,0.08)]"
                >
                  <div className="mb-4 flex min-h-40 items-center justify-center rounded-xl border border-dashed border-[#c9d8d3] bg-[linear-gradient(135deg,#edf4f0,#f9fbfa)] p-4 text-center text-xs text-[#78908a]">
                    Project 0{index + 1} preview
                  </div>
                  <h2 className="mb-1.5 text-base font-bold tracking-tight text-[#182b2b]">
                    {project.title}
                  </h2>
                  <p className="mb-4 text-sm leading-6 text-[#6d7c7a]">
                    {project.description}
                  </p>
                  {(project.problem || project.role || project.next_steps) && (
                    <dl className="mb-4 space-y-2 border-l-2 border-[#dce8e3] pl-3 text-xs leading-5 text-[#6d7c7a]">
                      {project.problem && (
                        <div>
                          <dt className="font-semibold text-[#405653]">Problem</dt>
                          <dd>{project.problem}</dd>
                        </div>
                      )}
                      {project.role && (
                        <div>
                          <dt className="font-semibold text-[#405653]">My role</dt>
                          <dd>{project.role}</dd>
                        </div>
                      )}
                      {project.next_steps && (
                        <div>
                          <dt className="font-semibold text-[#405653]">Next</dt>
                          <dd>{project.next_steps}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {(project.stack ?? []).map((tag) => (
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
                  <div className="mt-4 flex gap-3 text-xs font-semibold">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1b766e] hover:underline"
                      >
                        Live demo ↗
                      </a>
                    )}
                    {project.repo_url && (
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1b766e] hover:underline"
                      >
                        Source code ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
