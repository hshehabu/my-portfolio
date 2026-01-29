import type { ContactSettings as ContactType } from '@/lib/types'
import { ContactForm } from './ContactForm'

type Props = { contact: ContactType; location?: string }

export function Contact({ contact, location }: Props) {
  return (
    <section id="contact" className="py-16 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Let’s build a calmer system.</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Share your goals, timeline, and current stack. I respond within {contact.response_time}.
          </p>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <p><span className="font-semibold text-slate-900 dark:text-white">Email:</span> {contact.email}</p>
            {location && <p><span className="font-semibold text-slate-900 dark:text-white">Location:</span> {location}</p>}
            <p><span className="font-semibold text-slate-900 dark:text-white">Availability:</span> {contact.availability_note}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
