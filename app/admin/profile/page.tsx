import { redirect } from 'next/navigation'
import { getProfile } from '@/lib/data'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { ProfileForm } from './ProfileForm'

export default async function AdminProfilePage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const profile = await getProfile()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Profile</h1>
      <ProfileForm profile={profile} />
    </div>
  )
}
