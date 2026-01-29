'use client'

import { useState } from 'react'
import { updateProfile } from '@/lib/actions/profile'
import type { Profile } from '@/lib/types'

type Props = { profile: Profile }

export function ProfileForm({ profile }: Props) {
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    formData.set('id', profile.id)
    const result = await updateProfile(formData)
    setMessage({ ok: result.ok, text: result.message })
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-xl">
      <input type="hidden" name="id" value={profile.id} />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
        <input id="name" name="name" defaultValue={profile.name} required className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
        <input id="title" name="title" defaultValue={profile.title} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="hero_badge" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Hero badge</label>
        <input id="hero_badge" name="hero_badge" defaultValue={profile.hero_badge} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="hero_headline" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Hero headline</label>
        <input id="hero_headline" name="hero_headline" defaultValue={profile.hero_headline} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="hero_description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Hero description</label>
        <textarea id="hero_description" name="hero_description" rows={4} defaultValue={profile.hero_description} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="hero_tags" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Hero tags (one per line)</label>
        <textarea id="hero_tags" name="hero_tags" rows={3} defaultValue={(profile.hero_tags ?? []).join('\n')} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Location</label>
        <input id="location" name="location" defaultValue={profile.location} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="availability" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Availability</label>
        <input id="availability" name="availability" defaultValue={profile.availability} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
        <input id="email" name="email" type="email" defaultValue={profile.email} required className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100" />
      </div>
      {message && <p className={message.ok ? 'text-sm text-emerald-600 dark:text-emerald-400' : 'text-sm text-red-600 dark:text-red-400'}>{message.text}</p>}
      <button type="submit" className="rounded-lg bg-slate-900 dark:bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:hover:bg-emerald-500">Save</button>
    </form>
  )
}
