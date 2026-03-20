import type { ClinicData } from '../types'

interface MobileStickyCtaProps {
  data: ClinicData
}

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3.2a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 1.8-.6l3.2.5A2 2 0 0 1 22 16.9Z" />
  </svg>
)

export default function MobileStickyCta({ data }: MobileStickyCtaProps) {
  return (
    <a
      href={`tel:${data.telefoneE164}`}
      className="md:hidden fixed bottom-0 left-0 right-0 z-[999] flex items-center justify-center gap-2 py-4 px-6 bg-primary text-white font-extrabold text-lg shadow-[0_-8px_30px_rgba(15,23,42,0.12)] hover:bg-primary-dark transition-colors"
      aria-label="Call now to book appointment"
    >
      <PhoneIcon />
      <span>Call Now</span>
    </a>
  )
}
