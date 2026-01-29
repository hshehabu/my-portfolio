import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

type Props = {
  name: string
}

export function Header({ name }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-50/90 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/90 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link
            href="#home"
            className="text-base font-semibold tracking-tight text-slate-900 dark:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg outline-none"
          >
            👨‍💻 {name}
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <Link className="hover:text-slate-900 dark:hover:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded outline-none" href="#about">Bio</Link>
            <Link className="hover:text-slate-900 dark:hover:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded outline-none" href="#experience">Experience</Link>
            <Link className="hover:text-slate-900 dark:hover:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded outline-none" href="#projects">Projects</Link>
            <Link className="hover:text-slate-900 dark:hover:text-white micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded outline-none" href="#contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 micro-animation focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 outline-none"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
