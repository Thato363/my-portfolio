-- Contact submissions are public-write and admin-readable.
create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 3 and 320),
  message text not null check (char_length(message) between 10 and 5000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit contact messages" on public.contact_messages;
create policy "Anyone can submit contact messages"
  on public.contact_messages for insert to anon, authenticated
  with check (true);

drop policy if exists "Only admins can read contact messages" on public.contact_messages;
create policy "Only admins can read contact messages"
  on public.contact_messages for select to authenticated
  using (exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ));

-- Only authenticated admin owners may manage portfolio projects.
alter table public.projects enable row level security;

drop policy if exists "Public can read published projects" on public.projects;
create policy "Public can read published projects"
  on public.projects for select
  using (published = true or exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ));

drop policy if exists "Only admins can insert projects" on public.projects;
create policy "Only admins can insert projects"
  on public.projects for insert to authenticated
  with check (exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ));

drop policy if exists "Only admins can update projects" on public.projects;
create policy "Only admins can update projects"
  on public.projects for update to authenticated
  using (exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ))
  with check (exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ));

drop policy if exists "Only admins can delete projects" on public.projects;
create policy "Only admins can delete projects"
  on public.projects for delete to authenticated
  using (exists (
    select 1 from public.admin_users
    where admin_users.id = auth.uid()
      and admin_users.role = 'admin'
  ));
