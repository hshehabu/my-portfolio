'use client'

import { useFormState } from 'react-dom'
import { submitContact } from '@/lib/actions/contact'

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, { ok: false, message: '' })

  return (
    <form
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 space-y-5 reveal"
      action={formAction}
    >
      <div>
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Full Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/30 transition-colors" />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/30 transition-colors" />
      </div>
      <div>
        <label htmlFor="summary" className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Project Summary</label>
        <textarea id="summary" name="summary" rows={4} placeholder="Tell me about your workflow, goals, or pain points." className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/30 transition-colors" />
      </div>
      {state?.message && <p className="text-sm text-emerald-600 dark:text-emerald-400">{state.message}</p>}
      <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 outline-none">
        Send Message
      </button>
    </form>
  )
}
