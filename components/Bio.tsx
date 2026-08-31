import type { Bio as BioType } from '@/lib/types'

type Props = { bio: BioType }

export function Bio({ bio }: Props) {
  const tech = bio.tech_stack ?? []
  return (
    <section id="about" className="py-16 border-t border-warm-taupe/20">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-3 reveal relative">
          <p className="font-accent text-3xl text-odoo-yellow -rotate-2">Bio</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-text">{bio.bio_heading}</h2>
          
          <svg className="absolute -bottom-8 left-0 w-16 h-16 text-odoo-pink opacity-50 transform -rotate-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 50C40 20 60 80 80 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="lg:col-span-2 space-y-6 text-slate-text/70 reveal">
          <p className="text-base leading-relaxed">{bio.bio_text}</p>
          <div className="flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
