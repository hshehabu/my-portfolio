import type { Experience as Exp } from '@/lib/types'

type Props = { items: Exp[] }

export function Experience({ items }: Props) {
  return (
    <section id="experience" className="py-16 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="flex flex-col gap-10">
        <div className="space-y-2 reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Journey so far.</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Roles and milestones that shaped how I build systems and deliver value.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700" aria-hidden />
          <ul className="space-y-8">
            {items.length === 0 ? (
              <li className="relative pl-12 text-sm text-slate-500 dark:text-slate-400">
                No experience entries yet. Add some from the admin dashboard.
              </li>
            ) : items.map((exp) => (
              <li key={exp.id} className="relative pl-12 reveal">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-emerald-500 bg-slate-50 dark:bg-slate-950 dark:border-emerald-400" aria-hidden />
                <article className="experience-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{exp.start_year} — {exp.end_year}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">{exp.company}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>
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
