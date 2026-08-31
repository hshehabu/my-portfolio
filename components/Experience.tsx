import type { Experience as Exp } from '@/lib/types'

type Props = { items: Exp[] }

export function Experience({ items }: Props) {
  return (
    <section id="experience" className="py-16 border-t border-warm-taupe/20">
      <div className="flex flex-col gap-10">
        <div className="space-y-2 reveal relative">
          <p className="font-accent text-3xl text-odoo-teal -rotate-2">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-text">Journey <span className="odoo-underline-blue">so far</span>.</h2>
          <p className="text-sm text-slate-text/70 max-w-2xl">
            Roles and milestones that shaped how I build systems and deliver value.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-warm-taupe/20" aria-hidden />
          <ul className="space-y-8">
            {items.length === 0 ? (
              <li className="relative pl-12 text-sm text-slate-text/60">
                No experience entries yet. Add some from the admin dashboard.
              </li>
            ) : items.map((exp) => (
              <li key={exp.id} className="relative pl-12 reveal">
                <span className="absolute left-[11px] top-1.5 h-3 w-3 rounded-full border-2 border-odoo-plum bg-white" aria-hidden />
                <article className="experience-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-text">{exp.role}</h3>
                    <span className="text-xs font-medium text-slate-text/60">{exp.start_year} — {exp.end_year}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-odoo-plum">{exp.company}</p>
                  <p className="mt-3 text-sm text-slate-text/70 leading-relaxed">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(exp.tech_stack ?? []).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
