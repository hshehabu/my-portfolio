import type { Bio as BioType } from '@/lib/types'

type Props = { bio: BioType }

export function Bio({ bio }: Props) {
  const tech = bio.tech_stack ?? []
  return (
    <section id="about" className="py-16 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="space-y-3 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Bio</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">{bio.bio_heading}</h2>
        </div>
        <div className="lg:col-span-2 space-y-6 text-slate-600 dark:text-slate-400 reveal">
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
