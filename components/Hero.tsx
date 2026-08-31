import Link from 'next/link'
import type { Profile } from '@/lib/types'

type Props = { profile: Profile }

export function Hero({ profile }: Props) {
  const tags = profile.hero_tags ?? ['Odoo 16 • 19', 'Process Automation', 'Integration Architecture']
  return (
    <section className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8 reveal relative">
          {/* Starburst doodle */}
          <svg className="absolute -top-12 -left-8 w-24 h-24 text-odoo-yellow opacity-70 hidden sm:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10L50 30M80 20L65 35M20 20L35 35M90 50L70 50M10 50L30 50M80 80L65 65M20 80L35 65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          
          <div className="space-y-4">
            <p className="font-accent text-3xl text-odoo-plum -rotate-2 inline-block">
              {profile.hero_badge}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-text leading-tight">
              {profile.hero_headline}
            </h1>
            <p className="text-lg sm:text-xl text-slate-text/70 leading-relaxed max-w-lg">
              {profile.hero_description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center relative">
            <Link href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-[#714B67] px-6 py-2.5 text-[15px] font-medium text-white hover:bg-[#5b3b53] transition-colors outline-none">
              View Projects
            </Link>
            
            {/* Arrow pointing to CTA */}
            <div className="hidden sm:block absolute -bottom-10 left-32">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-odoo-teal transform rotate-12">
                <path d="M10 30C15 25 25 15 30 10M30 10V25M30 10H15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <Link href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-[#f8f9fa] px-6 py-2.5 text-[15px] font-medium text-[#714B67] hover:bg-[#f1f3f5] transition-colors outline-none">
              Book a Call
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-text/60 pt-4">
            {tags.map((t) => (
              <span key={t} className="rounded-md border border-warm-taupe/20 bg-slate-50 px-3 py-1.5">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-warm-taupe/30 bg-white p-8 reveal">
          <div className="space-y-8">
            <div className="space-y-3 relative">
              <p className="font-accent text-2xl text-odoo-teal -rotate-2 absolute -top-8 right-0">Expertise</p>
              <h2 className="text-2xl font-semibold text-slate-text"><span className="odoo-highlight-yellow">End-to-end</span> ERP delivery</h2>
              <p className="text-sm text-slate-text/70">
                From discovery to deployment, I structure Odoo projects that align with strategy, data, and day-to-day execution.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-text/70">
              <div className="rounded-lg border border-warm-taupe/20 bg-slate-50 p-4">
                <p className="font-semibold text-slate-text mb-1">System Design</p>
                <p>Mapping flows, roles, and KPIs.</p>
              </div>
              <div className="rounded-lg border border-warm-taupe/20 bg-slate-50 p-4">
                <p className="font-semibold text-slate-text mb-1">Customization</p>
                <p>Python, XML, OWL, and server actions.</p>
              </div>
              <div className="rounded-lg border border-warm-taupe/20 bg-slate-50 p-4">
                <p className="font-semibold text-slate-text mb-1">Integration</p>
                <p>APIs, ETL, and data migration.</p>
              </div>
              <div className="rounded-lg border border-warm-taupe/20 bg-slate-50 p-4">
                <p className="font-semibold text-slate-text mb-1">Change Enablement</p>
                <p>Documentation and team onboarding.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-text/60 pt-2 border-t border-warm-taupe/10">
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
