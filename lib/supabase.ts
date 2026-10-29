import { createClient } from "@supabase/supabase-js";

export type Project = {
  id: string;
  title: string;
  description: string | null;
  stack: string[] | null;
  status: string | null;
  category: string | null;
  created_at: string;
  slug: string | null;
  tagline: string | null;
  repo_url: string | null;
  live_url: string | null;
  problem: string | null;
  role: string | null;
  next_steps: string | null;
  screenshots: string[] | null;
  featured: boolean;
  published: boolean;
  sort_order: number;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseConfigError =
  !supabaseUrl || !supabaseAnonKey
    ? "Supabase environment variables are missing. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in the deployment settings."
    : null;

export const supabase = createClient(
  supabaseUrl ?? "https://example.invalid",
  supabaseAnonKey ?? "missing-anon-key"
);
