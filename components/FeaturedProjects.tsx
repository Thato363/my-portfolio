"use client";

import { useEffect, useState } from "react";
import {
  placeholderProjectTitles,
  supabase,
  supabaseConfigError,
  type Project,
} from "@/lib/supabase";

export default function FeaturedProjects() {
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
            .order("sort_order", { ascending: true })
            .limit(3),
          new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error("The project database request timed out.")), 10000)
          ),
        ]);
        if (cancelled) return;
        if (result.error) {
          setError(result.error.message);
          setProjects([]);
        } else if (
          result.data?.length &&
          result.data.every((project) => placeholderProjectTitles.has(project.title))
        ) {
          setError(
            "Supabase is connected, but the database still contains placeholder projects. Run supabase/projects.sql in the Supabase SQL Editor."
          );
          setProjects([]);
        } else {
          setProjects((result.data as Project[]) ?? []);
        }
      } catch (loadError) {
        if (cancelled) return;
        console.error("Featured projects request failed:", loadError);
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

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-dashed border-[#c9d8d3] bg-[#f7faf8] px-5 py-10 text-center text-sm text-[#6d7c7a]">
          Loading projects…
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-dashed border-[#c9d8d3] bg-[#f7faf8] px-5 py-10 text-center text-sm text-[#6d7c7a]">
        Could not load projects: {error}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className="flex min-w-0 flex-col rounded-2xl border border-[#e1e8e5] bg-white p-3 transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(24,56,51,0.08)]"
        >
          <div className="mb-4 flex min-h-44 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_75%_25%,rgba(95,168,148,0.21),transparent_30%),linear-gradient(135deg,#e8f0ec,#f4f7f4)] text-xs text-[#78908a]">
            <span>0{index + 1} &nbsp; / &nbsp; PROJECT</span>
          </div>
          <h3 className="mb-1.5 text-base font-bold tracking-tight text-[#182b2b]">
            {project.repo_url ? (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#1b766e] hover:underline"
              >
                {project.title} ↗
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="mb-4 text-sm leading-6 text-[#6d7c7a]">
            {project.description}
          </p>
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
                View repository on GitHub ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
