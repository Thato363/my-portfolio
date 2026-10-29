-- Contact submissions are public-write and admin-readable.
-- The existing project uses the singular public.admin_user table.
create table if not exists public.admin_user (
  email text primary key,
  role text not null default 'admin' check (role in ('admin', 'employer')),
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

alter table public.admin_user add column if not exists email text;
alter table public.admin_user add column if not exists role text default 'admin';
alter table public.admin_user add column if not exists created_at timestamptz default now();
alter table public.admin_user add column if not exists last_login_at timestamptz;
alter table public.admin_user enable row level security;
grant select, insert on table public.admin_user to authenticated;

drop policy if exists "Authenticated users can read admin records" on public.admin_user;
create policy "Authenticated users can read admin records"
  on public.admin_user for select to authenticated
  using (true);

drop policy if exists "Authenticated users can register admin records" on public.admin_user;
create policy "Authenticated users can register admin records"
  on public.admin_user for insert to authenticated
  with check (lower(email) = lower(auth.jwt() ->> 'email'));

create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 10 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

grant insert on table public.contact_messages to anon, authenticated;
grant select on table public.contact_messages to authenticated;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
  on public.contact_messages for insert to anon, authenticated
  with check (true);

drop policy if exists "Only admins can read contact messages" on public.contact_messages;
create policy "Only admins can read contact messages"
  on public.contact_messages for select to authenticated
  using (exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ));

-- Only authenticated admin owners may manage portfolio projects.
alter table public.projects enable row level security;

drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects"
  on public.projects for select
  using (published = true or exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ));

drop policy if exists "Only admins can insert projects" on public.projects;
create policy "Only admins can insert projects"
  on public.projects for insert to authenticated
  with check (exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ));

drop policy if exists "Only admins can update projects" on public.projects;
create policy "Only admins can update projects"
  on public.projects for update to authenticated
  using (exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ))
  with check (exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ));

drop policy if exists "Only admins can delete projects" on public.projects;
create policy "Only admins can delete projects"
  on public.projects for delete to authenticated
  using (exists (
    select 1 from public.admin_user
    where lower(admin_user.email) = lower(auth.jwt() ->> 'email')
      and admin_user.role = 'admin'
  ));
