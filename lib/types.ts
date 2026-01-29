export type Profile = {
  id: string
  name: string
  title: string
  hero_badge: string
  hero_headline: string
  hero_description: string
  hero_tags: string[] | null
  location: string
  availability: string
  email: string
}

export type Bio = {
  id: string
  bio_heading: string
  bio_text: string
  tech_stack: string[] | null
}

export type Experience = {
  id: string
  role: string
  company: string
  start_year: string
  end_year: string
  description: string
  tech_stack: string[] | null
  order_index: number
}

export type Project = {
  id: string
  title: string
  industry: string
  description: string
  outcome: string
  modules: string[] | null
  order_index: number
}

export type ContactSettings = {
  id: string
  email: string
  response_time: string
  availability_note: string
}
