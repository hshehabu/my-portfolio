import Link from 'next/link'

type Props = {
  name: string
}

export function Header({ name }: Props) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px] gap-4">
          <Link
            href="#home"
            className="text-[22px] font-bold tracking-tight text-[#714B67] hover:text-[#5b3b53] transition-colors outline-none flex items-center gap-2"
          >
            {name}
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <Link className="hover:text-slate-900 transition-colors outline-none" href="#about">Bio</Link>
            <Link className="hover:text-slate-900 transition-colors outline-none" href="#experience">Experience</Link>
            <Link className="hover:text-slate-900 transition-colors outline-none" href="#projects">Projects</Link>
            <Link className="hover:text-slate-900 transition-colors outline-none" href="#contact">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-4 text-[15px] font-medium">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded bg-[#714B67] px-4 py-2 text-white hover:bg-[#5b3b53] transition-colors outline-none"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
