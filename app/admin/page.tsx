import { Metadata } from "next";
import AdminDashboard from "@/app/admin";

export const metadata: Metadata = {
  title: "Admin Dashboard - Thato Thobane Portfolio",
  description: "Admin dashboard for managing the portfolio",
};

export default function Page() {
  return <AdminDashboard />;
}