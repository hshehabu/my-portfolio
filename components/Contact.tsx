import type { ContactSettings as ContactType } from '@/lib/types'
import { ContactForm } from './ContactForm'

type Props = { contact: ContactType; location?: string }

export function Contact({ contact, location }: Props) {
  return (
    <section id="contact" className="py-16 border-t border-warm-taupe/20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 reveal relative">
          <p className="font-accent text-3xl text-odoo-blue -rotate-2">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-text">Let’s build a <span className="odoo-highlight-pink">calmer</span> system.</h2>
          
          <svg className="hidden lg:block absolute top-12 left-64 w-12 h-12 text-odoo-yellow opacity-70 transform rotate-45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10V90M10 50H90M20 20L80 80M20 80L80 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          </svg>

          <p className="text-sm text-slate-text/70 pt-4">
            Share your goals, timeline, and current stack. I respond within {contact.response_time}.
          </p>
          <div className="space-y-3 text-sm text-slate-text/70">
            <p><span className="font-semibold text-slate-text">Email:</span> {contact.email}</p>
            {location && <p><span className="font-semibold text-slate-text">Location:</span> {location}</p>}
            <p><span className="font-semibold text-slate-text">Availability:</span> {contact.availability_note}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
