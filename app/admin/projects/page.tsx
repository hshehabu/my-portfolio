import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getProjects } from '@/lib/data'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { ProjectForm } from './ProjectForm'
import { DeleteProjectButton } from './DeleteProjectButton'

export default async function AdminProjectsPage({
  searchParams,
}: {
  searchParams?: { id?: string }
}) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const editId = searchParams?.id
  const items = await getProjects()
  const editItem = editId ? items.find((p) => p.id === editId) ?? null : null

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Projects</h1>

      <div>
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">
          {editItem ? 'Edit' : 'Add new'}
        </h2>
        <ProjectForm edit={editItem} />
      </div>

      <div>
        <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">
          Existing
        </h2>
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-white">
                  {item.title}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.industry}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/admin/projects?id=${item.id}`}
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Edit
                </Link>
                <DeleteProjectButton id={item.id} />
              </div>
            </li>
          ))}
          {items.length === 0 && (
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No projects yet. Add one above.
            </p>
          )}
        </ul>
      </div>
    </div>
  )
}
