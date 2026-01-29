-- Portfolio schema for Supabase
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)

-- Profile (singleton: one row)
create table if not exists public.profile (
  id uuid primary key default gen_random_uuid(),
  name text not null default 'Your Name',
  title text not null default 'Odoo Developer',
  hero_badge text not null default 'Odoo Developer',
  hero_headline text not null default 'Building calm, scalable business systems with Odoo.',
  hero_description text not null default 'I design and implement reliable ERP solutions that streamline operations, connect teams, and make decision-making effortless. My focus is clarity, performance, and long-term maintainability.',
  hero_tags text[] default array['Odoo 16 • 19', 'Process Automation', 'Integration Architecture'],
  location text not null default 'Addis Ababa, Ethiopia (Remote-ready)',
  availability text not null default 'Available for new projects',
  email text not null default 'you@example.com',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Bio (singleton)
create table if not exists public.bio (
  id uuid primary key default gen_random_uuid(),
  bio_heading text not null default 'Builder mindset, architect approach.',
  bio_text text not null default 'I help growing organizations turn complex operations into clear, connected workflows. My work combines discovery, data modeling, and pragmatic engineering so Odoo feels like a natural extension of the business.',
  tech_stack text[] default array['Odoo', 'Python', 'PostgreSQL', 'OWL', 'XML/QWeb', 'REST API', 'Docker', 'CI/CD'],
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Experience
create table if not exists public.experience (
  id uuid primary key default gen_random_uuid(),
  role text not null,
  company text not null,
  start_year text not null,
  end_year text not null,
  description text not null default '',
  tech_stack text[] default '{}',
  order_index int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Projects
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  industry text not null,
  description text not null default '',
  outcome text not null default '',
  modules text[] default '{}',
  order_index int not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Contact settings (singleton)
create table if not exists public.contact_settings (
  id uuid primary key default gen_random_uuid(),
  email text not null default 'you@example.com',
  response_time text not null default '1-2 business days',
  availability_note text not null default 'New projects starting next month',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- RLS: enable
alter table public.profile enable row level security;
alter table public.bio enable row level security;
alter table public.experience enable row level security;
alter table public.projects enable row level security;
alter table public.contact_settings enable row level security;

-- Public read
create policy "profile read" on public.profile for select using (true);
create policy "bio read" on public.bio for select using (true);
create policy "experience read" on public.experience for select using (true);
create policy "projects read" on public.projects for select using (true);
create policy "contact_settings read" on public.contact_settings for select using (true);

-- Authenticated write only
create policy "profile write" on public.profile for all using (auth.role() = 'authenticated');
create policy "bio write" on public.bio for all using (auth.role() = 'authenticated');
create policy "experience write" on public.experience for all using (auth.role() = 'authenticated');
create policy "projects write" on public.projects for all using (auth.role() = 'authenticated');
create policy "contact_settings write" on public.contact_settings for all using (auth.role() = 'authenticated');

-- Seed single rows for singletons (run once; if tables already have rows, skip these)
insert into public.profile (name, title, hero_badge, hero_headline, hero_description, hero_tags, location, availability, email)
select 'Hamza Shehabu', 'Odoo Developer', 'Odoo Developer', 'Building calm, scalable business systems with Odoo.', 'I design and implement reliable ERP solutions that streamline operations, connect teams, and make decision-making effortless. My focus is clarity, performance, and long-term maintainability.', array['Odoo 16 • 19', 'Process Automation', 'Integration Architecture'], 'Addis Ababa, Ethiopia (Remote-ready)', 'Available for new projects', 'ibnushihab64@gmail.com'
where not exists (select 1 from public.profile limit 1);

insert into public.bio (bio_heading, bio_text, tech_stack)
select 'Builder mindset, architect approach.', 'I help growing organizations turn complex operations into clear, connected workflows. My work combines discovery, data modeling, and pragmatic engineering so Odoo feels like a natural extension of the business.', array['Odoo', 'Python', 'PostgreSQL', 'OWL', 'XML/QWeb', 'REST API', 'Docker', 'CI/CD']
where not exists (select 1 from public.bio limit 1);

insert into public.contact_settings (email, response_time, availability_note)
select 'ibnushihab64@gmail.com', '1-2 business days', 'New projects starting next month'
where not exists (select 1 from public.contact_settings limit 1);
