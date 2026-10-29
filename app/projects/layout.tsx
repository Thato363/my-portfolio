import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Thato Thobane",
  description: "Case studies and selected projects by Thato Thobane.",
};

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
