import { createClient } from "@supabase/supabase-js";

export type Project = {
  id: string;
  title: string;
  description: string | null;
  stack: string[] | null;
  status: string | null;
  category: string | null;
  created_at: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl ?? "",
  supabaseAnonKey ?? ""
);
