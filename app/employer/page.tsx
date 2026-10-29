import { Metadata } from "next";
import EmployerDashboard from "@/app/employer";

export const metadata: Metadata = {
  title: "Employer Dashboard - Thato Thobane Portfolio",
  description: "Employer portal for the portfolio",
};

export default function Page() {
  return <EmployerDashboard />;
}