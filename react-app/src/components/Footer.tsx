import { Link } from 'react-router-dom'
import type { ClinicData } from '../types'

interface FooterProps {
  data: ClinicData
}

export default function Footer({ data }: FooterProps) {
  const state = data.enderecoCidade.split(',')[1]?.trim() || 'Tennessee'
  const city = data.enderecoCidade.split(',')[0]
  return (
    <footer className="py-8 border-t border-slate-200 bg-slate-50">
      <div className="w-full max-w-container mx-auto px-4 grid md:grid-cols-[1.5fr_auto] gap-6 items-center">
        <div>
          <Link to="/" className="inline-block max-w-[280px] mb-4">
            <img src="/assets/images/advanced-dental-logo.png" alt={data.clinicaNome} className="w-full h-auto brightness-0" />
          </Link>
          <p className="text-slate-600">
            Trusted, modern dental care for patients and families in {city}, {state}.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/#offer" className="font-bold text-primary-dark hover:underline">New Patient Special</Link>
          <Link to="/#contact" className="font-bold text-primary-dark hover:underline">Schedule Appointment</Link>
          <Link to="/doctors" className="font-bold text-primary-dark hover:underline">Meet the Doctors</Link>
          <a href={data.facebookUrl} target="_blank" rel="noreferrer" className="font-bold text-primary-dark hover:underline">Facebook</a>
          <a href={data.instagramUrl} target="_blank" rel="noreferrer" className="font-bold text-primary-dark hover:underline">Instagram</a>
          <a href={data.googleMapsUrl} target="_blank" rel="noreferrer" className="font-bold text-primary-dark hover:underline">Google Maps</a>
        </div>
      </div>
    </footer>
  )
}
