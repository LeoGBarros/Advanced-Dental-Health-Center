import type { ClinicData } from '../types'

interface HeroProps {
  data: ClinicData
}

export default function Hero({ data }: HeroProps) {
  const areas = data.areasServidas.join(', ').replace(/, ([^,]*)$/, ' & $1')
  return (
    <section
      id="top"
      className="pt-10 pb-16 md:py-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(14,165,233,0.15),transparent)] bg-gradient-to-b from-sky-50 via-white to-slate-50"
    >
      <div className="w-full max-w-container mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Dentist in {data.enderecoCidade}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-4">
            Get Seen Today by a Top-Rated Dentist in {data.enderecoCidade.split(',')[0]}
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Same-day appointments available. Most insurance accepted.
          </p>
          <div className="mb-6">
            <a
              href={`tel:${data.telefoneE164}`}
              className="inline-flex items-center justify-center min-h-14 px-6 py-4 rounded-xl bg-primary text-white font-semibold text-lg shadow-md hover:bg-primary-dark hover:-translate-y-0.5 transition-all"
            >
              Call Now – Book Your Appointment Today
            </a>
          </div>
          <p className="font-bold text-slate-900 mb-6">
            ⭐ {data.trustIndicators.rating} Rating | {data.trustIndicators.pacientes} Happy Patients
          </p>
          <ul className="space-y-3" aria-label="Practice highlights">
            {[`Serving ${areas}`, 'Same-day emergency appointments', 'Most insurance plans accepted'].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="aspect-[16/11] overflow-hidden rounded-card border border-slate-200 shadow-sm bg-white">
            <img
              src="/assets/images/hero-dental-smile.png"
              alt="Smiling patient speaking with a dentist in a modern clinic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-card shadow-sm">
            <span className="inline-block px-3 py-1.5 rounded-xl bg-sky-100 text-primary-dark text-sm font-bold mb-3">
              Visit Our Office
            </span>
            <h2 className="text-xl font-bold text-slate-900 mb-2">{data.clinicaNome}</h2>
            <p className="text-slate-600 mb-4" style={{ whiteSpace: 'pre-line' }}>
              {data.enderecoCompleto}
            </p>
            <div className="flex flex-col gap-3">
              <a href={data.googleMapsUrl} target="_blank" rel="noreferrer" className="font-bold text-primary-dark">
                Open in Google Maps
              </a>
              <a href={data.facebookUrl} target="_blank" rel="noreferrer" className="font-bold text-primary-dark">
                Follow on Facebook
              </a>
            </div>
          </div>
          <div className="grid gap-3 p-5 bg-white border border-slate-200 rounded-card shadow-sm">
            <div>
              <strong className="block text-slate-900 mb-1">Patient-first</strong>
              <span className="text-slate-600 text-sm">Care focused on comfort, clarity, and long-term oral health.</span>
            </div>
            <div>
              <strong className="block text-slate-900 mb-1">Comprehensive</strong>
              <span className="text-slate-600 text-sm">Preventive, restorative, cosmetic, and specialty services in one place.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
