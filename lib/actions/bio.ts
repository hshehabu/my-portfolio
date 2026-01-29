'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateBio(formData: FormData) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }

  const bio_heading = formData.get('bio_heading') as string
  const bio_text = formData.get('bio_text') as string
  const tech_stack = (formData.get('tech_stack') as string)?.split('\n').filter(Boolean) ?? []

  const id = formData.get('id') as string
  const row = { bio_heading, bio_text, tech_stack, updated_at: new Date().toISOString() }
  if (id) {
    const { error } = await supabase.from('bio').update(row).eq('id', id).single()
    if (error) return { ok: false, message: error.message }
  } else {
    const { error } = await supabase.from('bio').insert(row).select().single()
    if (error) return { ok: false, message: error.message }
  }
  revalidatePath('/')
  revalidatePath('/admin')
  return { ok: true, message: 'Bio saved.' }
}
