import { createServerSupabaseClient } from '@/lib/supabase/server'
import type { Profile, Bio, Experience, Project, ContactSettings } from '@/lib/types'

const defaultProfile: Profile = {
  id: '',
  name: 'Hamza Shehabu',
  title: 'Odoo Developer',
  hero_badge: 'Odoo Developer',
  hero_headline: 'Building calm, scalable business systems with Odoo.',
  hero_description: 'I design and implement reliable ERP solutions that streamline operations, connect teams, and make decision-making effortless. My focus is clarity, performance, and long-term maintainability.',
  hero_tags: ['Odoo 16 • 19', 'Process Automation', 'Integration Architecture'],
  location: 'Addis Ababa, Ethiopia (Remote-ready)',
  availability: 'Available for new projects',
  email: 'ibnushihab64@gmail.com',
}

const defaultBio: Bio = {
  id: '',
  bio_heading: 'Builder mindset, architect approach.',
  bio_text: 'I help growing organizations turn complex operations into clear, connected workflows. My work combines discovery, data modeling, and pragmatic engineering so Odoo feels like a natural extension of the business.',
  tech_stack: ['Odoo', 'Python', 'PostgreSQL', 'OWL', 'XML/QWeb', 'REST API', 'Docker', 'CI/CD'],
}

const defaultContact: ContactSettings = {
  id: '',
  email: 'ibnushihab64@gmail.com',
  response_time: '1-2 business days',
  availability_note: 'New projects starting next month',
}

export async function getProfile(): Promise<Profile> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('profile').select('*').limit(1).single()
  if (data) return data as Profile
  return defaultProfile
}

export async function getBio(): Promise<Bio> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('bio').select('*').limit(1).single()
  if (data) return data as Bio
  return defaultBio
}

export async function getExperience(): Promise<Experience[]> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('experience').select('*').order('order_index', { ascending: true })
  return (data ?? []) as Experience[]
}

export async function getProjects(): Promise<Project[]> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('projects').select('*').order('order_index', { ascending: true })
  return (data ?? []) as Project[]
}

export async function getContactSettings(): Promise<ContactSettings> {
  const supabase = await createServerSupabaseClient()
  const { data } = await supabase.from('contact_settings').select('*').limit(1).single()
  if (data) return data as ContactSettings
  return defaultContact
}
