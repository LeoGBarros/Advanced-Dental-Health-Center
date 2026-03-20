import { Link } from 'react-router-dom'
import type { ClinicData } from '../types'

interface HeaderProps {
  data: ClinicData
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l3.2.5A2 2 0 0 1 22 16.9Z" />
  </svg>
)

export default function Header({ data, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-slate-200">
      <div className="w-full max-w-container mx-auto px-4 flex items-center justify-between gap-4 min-h-[4.4rem]">
        <Link to="/" className="font-serif text-xl text-slate-900 font-normal" aria-label={`${data.clinicaNome} home`}>
          {data.clinicaNome}
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1 p-1"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-5 h-0.5 bg-slate-900 rounded" />
          <span className="w-5 h-0.5 bg-slate-900 rounded" />
          <span className="w-5 h-0.5 bg-slate-900 rounded" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav
          id="site-menu"
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-4 right-4 mt-3 md:mt-0 flex-col md:flex-row md:items-center gap-0 md:gap-5 p-4 md:p-0 bg-white md:bg-transparent border border-slate-200 md:border-0 rounded-xl md:rounded-none shadow-lg md:shadow-none`}
          aria-label="Primary"
        >
          <Link to="/#services" className="py-3 md:py-0 font-semibold text-slate-600 hover:text-slate-900">Services</Link>
          <Link to="/#doctors" className="py-3 md:py-0 font-semibold text-slate-600 hover:text-slate-900">Doctors</Link>
          <Link to="/#testimonials" className="py-3 md:py-0 font-semibold text-slate-600 hover:text-slate-900">Reviews</Link>
          <Link to="/#faq" className="py-3 md:py-0 font-semibold text-slate-600 hover:text-slate-900">FAQ</Link>
          <Link to="/#contact" className="py-3 md:py-0 font-semibold text-slate-600 hover:text-slate-900">Contact</Link>
          <a
            href={`tel:${data.telefoneE164}`}
            className="inline-flex items-center gap-2 mt-2 md:mt-0 py-2 px-4 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors"
            aria-label={`Call ${data.clinicaNome} at ${data.telefoneDisplay}`}
          >
            <PhoneIcon />
            <span>{data.telefoneDisplay}</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
