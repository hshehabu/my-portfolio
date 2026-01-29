import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { LoginForm } from './LoginForm'

export default async function AdminLoginPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) redirect('/admin')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Admin login</h1>
      <LoginForm />
      <p className="text-sm text-slate-500 dark:text-slate-400">
        <Link href="/" className="text-emerald-600 dark:text-emerald-400 hover:underline">← Back to site</Link>
      </p>
    </div>
  )
}
