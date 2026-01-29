'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateContactSettings(formData: FormData) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }

  const email = formData.get('email') as string
  const response_time = formData.get('response_time') as string
  const availability_note = formData.get('availability_note') as string

  const id = formData.get('id') as string
  const row = { email, response_time, availability_note, updated_at: new Date().toISOString() }
  if (id) {
    const { error } = await supabase.from('contact_settings').update(row).eq('id', id).single()
    if (error) return { ok: false, message: error.message }
  } else {
    const { error } = await supabase.from('contact_settings').insert(row).select().single()
    if (error) return { ok: false, message: error.message }
  }
  revalidatePath('/')
  revalidatePath('/admin')
  return { ok: true, message: 'Contact settings saved.' }
}
