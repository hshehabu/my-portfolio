import Link from 'next/link'
import type { Profile } from '@/lib/types'

type Props = { profile: Profile }

export function Hero({ profile }: Props) {
  const tags = profile.hero_tags ?? ['Odoo 16 • 19', 'Process Automation', 'Integration Architecture']
  return (
    <section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 reveal">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
            {profile.hero_badge}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {profile.hero_headline}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {profile.hero_description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 outline-none">
              View Projects
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 outline-none">
              Book a Call
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-700 dark:bg-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 reveal">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Core Focus</p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">End-to-end ERP delivery</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                From discovery to deployment, I structure Odoo projects that align with strategy, data, and day-to-day execution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white">System Design</p>
                <p>Mapping flows, roles, and KPIs.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white">Customization</p>
                <p>Python, XML, OWL, and server actions.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white">Integration</p>
                <p>APIs, ETL, and data migration.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
                <p className="font-semibold text-slate-900 dark:text-white">Change Enablement</p>
                <p>Documentation and team onboarding.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {profile.availability}
              </span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
