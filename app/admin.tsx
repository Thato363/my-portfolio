"use client";

import { useEffect, useState } from "react";
import { supabase, type Project } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [saving, setSaving] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    async function logPageView() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace("/login");
        return;
      }
      const userRole = session?.user?.id 
        ? (await supabase
            .from("admin_user")
            .select("role")
            .eq("email", session.user.email ?? "")
            .single()).data?.role 
        : "anonymous";
      
      const ipAddress = typeof navigator !== "undefined" 
        ? navigator.userAgent 
        : "server";
      
      await supabase.from("audit_log").insert({
        user_id: session?.user?.id || null,
        user_role: userRole,
        ip_address: ipAddress,
        viewed_page: window.location.pathname,
      });

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) {
        setNotice(`Could not load projects: ${error.message}`);
      } else {
        setProjects((data as Project[]) ?? []);
      }
    }
    logPageView();
  }, [router]);

  async function saveProject(project: Project) {
    setSaving(project.id);
    setNotice(null);
    const { error } = await supabase
      .from("projects")
      .update({
        title: project.title,
        description: project.description,
        status: project.status,
        published: project.published,
      })
      .eq("id", project.id);
    setSaving(null);
    setNotice(error ? `Could not save project: ${error.message}` : "Project saved.");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#182b2b] mb-6">Admin Dashboard</h1>
        
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Audit Log</h2>
          <div className="h-96 overflow-y-auto border border-[#c9d8d3] rounded-md p-4">
            <p className="text-sm text-[#6d7c7a] italic">Loading audit log...</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Project management</h2>
          <div className="space-y-5">
            {projects.map((project) => (
              <div key={project.id} className="rounded-xl border border-[#dce8e3] p-4">
                <label className="block text-xs font-semibold text-[#405653]" htmlFor={`title-${project.id}`}>Title</label>
                <input
                  id={`title-${project.id}`}
                  value={project.title}
                  onChange={(event) => setProjects((current) => current.map((item) => item.id === project.id ? { ...item, title: event.target.value } : item))}
                  className="mt-1 w-full rounded-lg border border-[#c9d8d3] px-3 py-2 text-sm"
                />
                <label className="mt-3 block text-xs font-semibold text-[#405653]" htmlFor={`description-${project.id}`}>Description</label>
                <textarea
                  id={`description-${project.id}`}
                  value={project.description ?? ""}
                  onChange={(event) => setProjects((current) => current.map((item) => item.id === project.id ? { ...item, description: event.target.value } : item))}
                  className="mt-1 w-full rounded-lg border border-[#c9d8d3] px-3 py-2 text-sm"
                  rows={2}
                />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <label className="flex items-center gap-2 text-sm text-[#6d7c7a]">
                    <input type="checkbox" checked={project.published} onChange={(event) => setProjects((current) => current.map((item) => item.id === project.id ? { ...item, published: event.target.checked } : item))} />
                    Published
                  </label>
                  <button type="button" onClick={() => saveProject(project)} disabled={saving === project.id} className="rounded-lg bg-[#173b39] px-4 py-2 text-xs font-semibold text-white disabled:opacity-60">
                    {saving === project.id ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {notice && <p role="status" className="mt-4 text-sm text-[#1b766e]">{notice}</p>}
        </div>
      </div>
    </div>
  );
}