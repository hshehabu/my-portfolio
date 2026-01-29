import { getProfile, getBio, getExperience, getProjects, getContactSettings } from '@/lib/data'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Bio } from '@/components/Bio'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default async function HomePage() {
  const [profile, bio, experience, projects, contact] = await Promise.all([
    getProfile(),
    getBio(),
    getExperience(),
    getProjects(),
    getContactSettings(),
  ])

  return (
    <>
      <Header name={profile.name} />
      <main id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero profile={profile} />
        <Bio bio={bio} />
        <Experience items={experience} />
        <Projects items={projects.length > 0 ? projects : getDefaultProjects()} />
        <Contact contact={contact} location={profile.location} />
      </main>
      <Footer name={profile.name} email={contact.email} />
    </>
  )
}

function getDefaultProjects() {
  return [
    {
      id: '1',
      title: 'Multi-warehouse Operations',
      industry: 'Distribution',
      description: 'Designed Odoo inventory flows for a 3-region distribution network, aligning purchasing, stock moves, and quality checks.',
      outcome: 'Outcome: 28% faster fulfillment, fewer stock discrepancies.',
      modules: ['Inventory', 'Purchase', 'Barcode'],
      order_index: 0,
    },
    {
      id: '2',
      title: 'Automated Field Service',
      industry: 'Services',
      description: 'Built service workflows, SLA tracking, and a mobile-ready technician flow that syncs with accounting and CRM.',
      outcome: 'Outcome: 40% faster ticket resolution.',
      modules: ['Field Service', 'CRM', 'Accounting'],
      order_index: 1,
    },
    {
      id: '3',
      title: 'Production Planning Suite',
      industry: 'Manufacturing',
      description: 'Implemented MRP workflows, BOM governance, and shop floor visibility with tailored dashboards.',
      outcome: 'Outcome: 18% reduction in production delays.',
      modules: ['MRP', 'BOM', 'Dashboards'],
      order_index: 2,
    },
  ] as { id: string; title: string; industry: string; description: string; outcome: string; modules: string[]; order_index: number }[]
}
