'use server'

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function saveProject(formData: FormData) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }

  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const industry = formData.get('industry') as string
  const description = formData.get('description') as string
  const outcome = formData.get('outcome') as string
  const modules = (formData.get('modules') as string)?.split('\n').filter(Boolean) ?? []
  const order_index = parseInt(formData.get('order_index') as string || '0', 10)

  const row = { title, industry, description, outcome, modules, order_index, updated_at: new Date().toISOString() }

  if (id) {
    const { error } = await supabase.from('projects').update(row).eq('id', id).single()
    if (error) return { ok: false, message: error.message }
  } else {
    const { error } = await supabase.from('projects').insert(row).select().single()
    if (error) return { ok: false, message: error.message }
  }
  revalidatePath('/')
  revalidatePath('/admin')
  revalidatePath('/admin/projects')
  return { ok: true, message: 'Project saved.' }
}

export async function deleteProject(id: string) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, message: 'Unauthorized' }
  const { error } = await supabase.from('projects').delete().eq('id', id)
  if (error) return { ok: false, message: error.message }
  revalidatePath('/')
  revalidatePath('/admin/projects')
  return { ok: true, message: 'Deleted.' }
}
