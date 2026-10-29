"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
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
        <h1 className="text-3xl font-bold text-[#182b2b] mb-6">Admin Dashboard</h1>
        
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Audit Log</h2>
          <div className="h-96 overflow-y-auto border border-[#c9d8d3] rounded-md p-4">
            <p className="text-sm text-[#6d7c7a] italic">Loading audit log...</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-[#182b2b] mb-4">Admin Controls</h2>
          <p className="text-[#6d7c7a]">Admin-only content and management features.</p>
        </div>
      </div>
    </div>
  );
}