"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function EmployerDashboard() {
  useEffect(() => {
    async function logPageView() {
      const { data: { session } } = await supabase.auth.getSession();
      const userRole = session?.user?.id 
        ? (await supabase
            .from("admin_users")
            .select("role")
            .eq("id", session.user.id)
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
    }
    logPageView();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#182b2b] mb-6">Employer Dashboard</h1>
        
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Employer Portal</h2>
          <p className="text-[#6d7c7a]">
            Welcome! You have passwordless access to your employer portal.
          </p>
          <p className="mt-4 text-[#1b766e] font-medium">
            Quick access to your job postings and candidate information.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Employer Features</h2>
          <ul className="list-disc list-inside space-y-2 text-[#6d7c7a]">
            <li>View candidate profiles</li>
            <li>Post new job openings</li>
            <li>Track application status</li>
            <li>Communicate with applicants</li>
          </ul>
        </div>
      </div>
    </div>
  );
}