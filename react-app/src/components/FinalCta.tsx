import type { ClinicData } from '../types'

interface FinalCtaProps {
  data: ClinicData
}

export default function FinalCta({ data }: FinalCtaProps) {
  const city = data.enderecoCidade.split(',')[0]
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-sky-100/50 border-y border-slate-200 text-center">
      <div className="w-full max-w-container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Ready to book your appointment?
        </h2>
        <p className="text-slate-600 mb-6">
          Call now or book online. Same-day appointments available for new patients in {city}.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${data.telefoneE164}`}
            className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  )
}
