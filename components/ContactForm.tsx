'use client'

import { useActionState } from 'react'
import { submitContact } from '@/lib/actions/contact'

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, { ok: false, message: '' })

  return (
    <form
      className="rounded-lg border border-warm-taupe/30 bg-white p-6 sm:p-8 space-y-5 reveal relative"
      action={formAction}
    >
      <div>
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-slate-text/60">Full Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-md border border-warm-taupe/20 bg-slate-50 px-4 py-3 text-sm text-slate-text placeholder:text-slate-text/40 focus:border-odoo-plum focus:outline-none focus:ring-1 focus:ring-odoo-plum transition-colors" />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-slate-text/60">Email</label>
        <input id="email" name="email" type="email" placeholder="you@email.com" className="mt-2 w-full rounded-md border border-warm-taupe/20 bg-slate-50 px-4 py-3 text-sm text-slate-text placeholder:text-slate-text/40 focus:border-odoo-plum focus:outline-none focus:ring-1 focus:ring-odoo-plum transition-colors" />
      </div>
      <div>
        <label htmlFor="summary" className="text-xs font-semibold uppercase tracking-widest text-slate-text/60">Project Summary</label>
        <textarea id="summary" name="summary" rows={4} placeholder="Tell me about your workflow, goals, or pain points." className="mt-2 w-full rounded-md border border-warm-taupe/20 bg-slate-50 px-4 py-3 text-sm text-slate-text placeholder:text-slate-text/40 focus:border-odoo-plum focus:outline-none focus:ring-1 focus:ring-odoo-plum transition-colors" />
      </div>
      {state?.message && <p className="text-sm text-odoo-plum">{state.message}</p>}
      
      <div className="flex flex-col items-center">
        <button type="submit" className="w-full sm:w-auto self-start rounded bg-[#714B67] px-6 py-2.5 text-[15px] font-medium text-white hover:bg-[#5b3b53] transition-colors outline-none">
          Send Message
        </button>
      </div>
    </form>
  )
}
