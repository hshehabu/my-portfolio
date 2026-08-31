import Link from 'next/link'
import type { Project } from '@/lib/types'

type Props = { items: Project[] }

export function Projects({ items }: Props) {
  return (
    <section id="projects" className="py-16 border-t border-warm-taupe/20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal">
          <div className="space-y-2 relative">
            <p className="font-accent text-3xl text-odoo-pink -rotate-2 absolute -top-8 left-0">Projects</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-text mt-8"><span className="odoo-underline-teal">Recent</span> implementations.</h2>
            <p className="text-sm text-slate-text/70">
              Selected work focused on operational clarity, automation, and reporting depth.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((proj) => (
            <article key={proj.id} className="project-card reveal flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-text/50">{proj.industry}</p>
                  <h3 className="text-lg font-semibold text-slate-text">{proj.title}</h3>
                </div>
                <p className="text-sm text-slate-text/70">{proj.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-text/60">
                  {(proj.modules ?? []).map((m) => (
                    <span key={m} className="chip">{m}</span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-6 text-sm text-slate-text/60 border-t border-warm-taupe/20 font-medium">
                {proj.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
