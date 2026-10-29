import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Thato Thobane",
  description: "Frontend, backend and delivery skills demonstrated by Thato Thobane.",
};

export default function SkillsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
