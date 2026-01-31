import Link from 'next/link'
import type { Project } from '@/lib/types'

type Props = { items: Project[] }

export function Projects({ items }: Props) {
  return (
    <section id="projects" className="py-16 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Projects</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Recent implementations.</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Selected work focused on operational clarity, automation, and reporting depth.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((proj) => (
            <article key={proj.id} className="project-card reveal">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">{proj.industry}</p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{proj.title}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{proj.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                  {(proj.modules ?? []).map((m) => (
                    <span key={m} className="chip">{m}</span>
                  ))}
                </div>
              </div>
              <div className="pt-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
                {proj.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
