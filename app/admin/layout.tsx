import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {user ? (
        <>
          <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
              <Link href="/admin" className="font-semibold text-slate-900 dark:text-white">Admin</Link>
              <nav className="flex items-center gap-4 text-sm">
                <Link href="/admin/profile" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Profile</Link>
                <Link href="/admin/bio" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Bio</Link>
                <Link href="/admin/experience" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Experience</Link>
                <Link href="/admin/projects" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Projects</Link>
                <Link href="/admin/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Contact</Link>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">View site</Link>
                <form action="/admin/logout" method="post">
                  <button type="submit" className="text-slate-500 hover:text-red-600">Log out</button>
                </form>
              </nav>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
        </>
      ) : (
        <main className="max-w-md mx-auto px-4 py-16">{children}</main>
      )}
    </div>
  )
}
