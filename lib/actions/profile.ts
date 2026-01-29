'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }

  const name = formData.get('name') as string
  const title = formData.get('title') as string
  const hero_badge = formData.get('hero_badge') as string
  const hero_headline = formData.get('hero_headline') as string
  const hero_description = formData.get('hero_description') as string
  const hero_tags = (formData.get('hero_tags') as string)?.split('\n').filter(Boolean) ?? []
  const location = formData.get('location') as string
  const availability = formData.get('availability') as string
  const email = formData.get('email') as string

  const id = formData.get('id') as string
  const row = {
    name,
    title,
    hero_badge,
    hero_headline,
    hero_description,
    hero_tags,
    location,
    availability,
    email,
    updated_at: new Date().toISOString(),
  }
  if (id) {
    const { error } = await supabase.from('profile').update(row).eq('id', id).single()
    if (error) return { ok: false, message: error.message }
  } else {
    const { error } = await supabase.from('profile').insert(row).select().single()
    if (error) return { ok: false, message: error.message }
  }
  revalidatePath('/')
  revalidatePath('/admin')
  return { ok: true, message: 'Profile saved.' }
}
