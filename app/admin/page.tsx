import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export default async function AdminPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Dashboard</h1>
      <p className="text-slate-600 dark:text-slate-400">Edit content for your portfolio. Changes appear on the site immediately.</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        <li>
          <Link href="/admin/profile" className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/admin/bio" className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            Bio
          </Link>
        </li>
        <li>
          <Link href="/admin/experience" className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/admin/projects" className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/admin/contact" className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-slate-900 dark:text-white hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
            Contact settings
          </Link>
        </li>
      </ul>
    </div>
  )
}
