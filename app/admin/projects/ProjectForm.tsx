'use client'

import { useState } from 'react'
import { saveProject } from '@/lib/actions/projects'
import type { Project } from '@/lib/types'

type Props = { edit?: Project | null }

export function ProjectForm({ edit = null }: Props) {
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    if (edit?.id) formData.set('id', edit.id)
    const result = await saveProject(formData)
    setMessage({ ok: result.ok, text: result.message })
    if (result.ok) window.location.reload()
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-xl">
      {edit?.id && <input type="hidden" name="id" value={edit.id} />}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
          <input id="title" name="title" defaultValue={edit?.title} required className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Industry</label>
          <input id="industry" name="industry" defaultValue={edit?.industry} required className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
        <textarea id="description" name="description" rows={3} defaultValue={edit?.description} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="outcome" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Outcome</label>
        <input id="outcome" name="outcome" defaultValue={edit?.outcome} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="modules" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Modules (one per line)</label>
        <textarea id="modules" name="modules" rows={2} defaultValue={(edit?.modules ?? []).join('\n')} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="order_index" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Order index</label>
        <input id="order_index" name="order_index" type="number" defaultValue={edit?.order_index ?? 0} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      {message && <p className={message.ok ? 'text-sm text-emerald-600 dark:text-emerald-400' : 'text-sm text-red-600 dark:text-red-400'}>{message.text}</p>}
      <button type="submit" className="rounded-lg bg-slate-900 dark:bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:hover:bg-emerald-500">{edit ? 'Update' : 'Add'}</button>
    </form>
  )
}
