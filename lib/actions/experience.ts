'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function saveExperience(formData: FormData) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }

  const id = formData.get('id') as string
  const role = formData.get('role') as string
  const company = formData.get('company') as string
  const start_year = formData.get('start_year') as string
  const end_year = formData.get('end_year') as string
  const description = formData.get('description') as string
  const tech_stack = (formData.get('tech_stack') as string)?.split('\n').filter(Boolean) ?? []
  const order_index = parseInt(formData.get('order_index') as string || '0', 10)

  const row = { role, company, start_year, end_year, description, tech_stack, order_index, updated_at: new Date().toISOString() }

  if (id) {
    const { error } = await supabase.from('experience').update(row).eq('id', id).single()
    if (error) return { ok: false, message: error.message }
  } else {
    const { error } = await supabase.from('experience').insert(row).select().single()
    if (error) return { ok: false, message: error.message }
  }
  revalidatePath('/')
  revalidatePath('/admin')
  revalidatePath('/admin/experience')
  return { ok: true, message: 'Experience saved.' }
}

export async function deleteExperience(id: string) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }
  const { error } = await supabase.from('experience').delete().eq('id', id)
  if (error) return { ok: false, message: error.message }
  revalidatePath('/')
  revalidatePath('/admin/experience')
  return { ok: true, message: 'Deleted.' }
}
