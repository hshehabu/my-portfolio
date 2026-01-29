'use client'

import { useState } from 'react'
import { updateContactSettings } from '@/lib/actions/contact-settings'
import type { ContactSettings } from '@/lib/types'

type Props = { contact: ContactSettings }

export function ContactSettingsForm({ contact }: Props) {
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    formData.set('id', contact.id)
    const result = await updateContactSettings(formData)
    setMessage({ ok: result.ok, text: result.message })
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
        <input id="email" name="email" type="email" defaultValue={contact.email} required className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="response_time" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Response time</label>
        <input id="response_time" name="response_time" defaultValue={contact.response_time} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="availability_note" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Availability note</label>
        <input id="availability_note" name="availability_note" defaultValue={contact.availability_note} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      {message && <p className={message.ok ? 'text-sm text-emerald-600 dark:text-emerald-400' : 'text-sm text-red-600 dark:text-red-400'}>{message.text}</p>}
      <button type="submit" className="rounded-lg bg-slate-900 dark:bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:hover:bg-emerald-500">Save</button>
    </form>
  )
}
