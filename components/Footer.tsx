import Link from 'next/link'

type Props = { name: string; email: string }

export function Footer({ name, email }: Props) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800/70 py-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p>© {year} {name}. Odoo Developer Portfolio.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-slate-700 dark:hover:text-slate-300 micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 rounded outline-none" href="#home">Back to top</Link>
          <span className="text-slate-300 dark:text-slate-600">•</span>
          <Link className="hover:text-slate-700 dark:hover:text-slate-300 micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 rounded outline-none" href={`mailto:${email}`}>{email}</Link>
        </div>
      </div>
    </footer>
  )
}
