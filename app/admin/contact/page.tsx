import { redirect } from 'next/navigation'
import { getContactSettings } from '@/lib/data'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { ContactSettingsForm } from './ContactSettingsForm'

export default async function AdminContactPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const contact = await getContactSettings()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact settings</h1>
      <ContactSettingsForm contact={contact} />
    </div>
  )
}
