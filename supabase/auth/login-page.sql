-- Create the admin table used by the application.
create table if not exists public.admin_user (
  email text primary key,
  role text not null default 'admin' check (role in ('admin', 'employer')),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  last_login_at timestamp with time zone
);

-- Create audit log table
create table if not exists public.audit_log (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete set null,
  user_role text not null default 'anonymous',
  ip_address text,
  user_agent text,
  viewed_page text not null,
  viewed_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable RLS
alter table public.admin_user enable row level security;
alter table public.audit_log enable row level security;

-- Create policies for admin_user
create policy if not exists "Allow read access for authenticated users" on public.admin_user
  for select to authenticated using (true);

create policy if not exists "Allow insert for service role" on public.admin_user
  for insert with check (true);

-- Create policies for audit_log
create policy if not exists "Allow read for service role" on public.audit_log
  for select to authenticated using (true);

create policy if not exists "Allow insert for logged in users" on public.audit_log
  for insert with check (
    auth.role() = 'authenticated' 
    or (auth.role() = 'anon' and current_setting('role')::text = 'admin')
  );