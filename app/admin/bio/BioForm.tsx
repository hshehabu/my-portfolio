'use client'

import { useState } from 'react'
import { updateBio } from '@/lib/actions/bio'
import type { Bio } from '@/lib/types'

type Props = { bio: Bio }

export function BioForm({ bio }: Props) {
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    formData.set('id', bio.id)
    const result = await updateBio(formData)
    setMessage({ ok: result.ok, text: result.message })
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="bio_heading" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bio heading</label>
        <input id="bio_heading" name="bio_heading" defaultValue={bio.bio_heading} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="bio_text" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Bio text</label>
        <textarea id="bio_text" name="bio_text" rows={5} defaultValue={bio.bio_text} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="tech_stack" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tech stack (one per line)</label>
        <textarea id="tech_stack" name="tech_stack" rows={4} defaultValue={(bio.tech_stack ?? []).join('\n')} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      {message && <p className={message.ok ? 'text-sm text-emerald-600 dark:text-emerald-400' : 'text-sm text-red-600 dark:text-red-400'}>{message.text}</p>}
      <button type="submit" className="rounded-lg bg-slate-900 dark:bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:hover:bg-emerald-500">Save</button>
    </form>
  )
}
