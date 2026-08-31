import Link from 'next/link'

type Props = { name: string; email: string }

export function Footer({ name, email }: Props) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-warm-taupe/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-text/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p>© {year} {name}. Senior Odoo Developer.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-odoo-plum micro-animation focus-visible:ring-2 focus-visible:ring-odoo-plum focus-visible:ring-offset-2 rounded outline-none" href="#home">Back to top</Link>
          <span className="text-slate-text/30">•</span>
          <Link className="hover:text-odoo-plum micro-animation focus-visible:ring-2 focus-visible:ring-odoo-plum focus-visible:ring-offset-2 rounded outline-none" href={`mailto:${email}`}>{email}</Link>
        </div>
      </div>
    </footer>
  )
}
