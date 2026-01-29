import { redirect } from 'next/navigation'
import { getBio } from '@/lib/data'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { BioForm } from './BioForm'

export default async function AdminBioPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const bio = await getBio()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Bio</h1>
      <BioForm bio={bio} />
    </div>
  )
}
