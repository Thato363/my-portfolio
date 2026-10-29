"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "employer">("admin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: user } = await supabase
          .from("admin_user")
          .select("role")
          .eq("email", session.user.email ?? "")
          .single();

        if (user?.role === "employer") {
          setTimeout(() => router.push("/employer"), 500);
        } else if (user?.role === "admin") {
          setTimeout(() => router.push("/admin"), 500);
        }
      }
    }
    checkAuth();
  }, [router]);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (role === "employer") {
        const { error: authError } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: `${window.location.origin}/employer`,
            shouldCreateUser: false,
          },
        });

        if (authError) throw authError;

        setSuccess("Check your email for a secure sign-in link.");
      } else {
        const { data, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (authError) throw authError;

        if (data.user) {
          const { data: existingAdmin, error: adminLookupError } = await supabase
            .from("admin_user")
            .select("email")
            .eq("email", data.user.email!)
            .maybeSingle();

          if (adminLookupError) throw adminLookupError;
          if (!existingAdmin) {
            const { error: insertError } = await supabase
              .from("admin_user")
              .insert({ email: data.user.email!, role: "admin" });
            if (insertError) throw insertError;
          }

          await logAuditEvent("login", "admin", data.user.id);

          setTimeout(() => router.push("/admin"), 500);
        }
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      setError(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const logAuditEvent = async (action: string, userRole: string | null, userId: string | null) => {
    const ipAddress = typeof navigator !== "undefined" ? navigator.userAgent : "server";
    await supabase.from("audit_log").insert({
      user_id: userId,
      user_role: userRole,
      ip_address: ipAddress,
      viewed_page: "/login",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f6f4] to-[#e4e8e7] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-[#182b2b] mb-6 text-center">
          {role === "admin" ? "Admin Login" : "Employer Login"}
        </h2>

        {error && (
          <div className="mb-4 p-3 rounded bg-red-100 text-red-800 text-sm mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 text-green-800 text-sm mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#6d7c7a] mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#c9d8d3] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#46a895] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {role === "admin" && (
            <div>
              <label className="block text-sm font-medium text-[#6d7c7a] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#c9d8d3] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#46a895] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#6d7c7a] mb-2">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "admin" | "employer")}
              className="w-full px-3 py-2 border border-[#c9d8d3] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#46a895] focus:border-transparent"
            >
              <option value="admin">Admin (username + password)</option>
              <option value="employer">Employer (passwordless login)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md text-sm font-medium transition-colors hover:bg-[#245a54] focus:outline-none focus:ring-2 focus:ring-offset-2 focus-[#173b39]"
          >
            {loading
              ? role === "employer" ? "Sending link..." : "Signing in..."
              : role === "employer" ? "Email me a sign-in link" : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#6d7c7a]">
            Don&apos;t have an account?
          </p>
          <Link
            href="/"
            className="ml-1 text-[0.88rem] font-medium underline underline-offset-2 text-[#46a895] hover:text-[#1b766e]"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}