import type { ClinicData } from '../types'

interface ServicesProps {
  data: ClinicData
}

const icons = {
  emergency: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a8 8 0 1 0 8 8M12 8v5m0 3h.01" />
    </svg>
  ),
  implant: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 0 4 1.8 4 4v2c0 2-1.1 3.7-2.7 4.6L12 21l-1.3-7.4C9.1 12.7 8 11 8 9V7c0-2.2 1.8-4 4-4Z" />
    </svg>
  ),
  whitening: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16c2.5-5 5.2-8 8-8s5.5 3 8 8M7 18h10" />
    </svg>
  ),
}

export default function Services({ data }: ServicesProps) {
  const areas = data.areasServidas.join(', ')
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="w-full max-w-container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            Top dental services for {data.enderecoCidade.split(',')[0]} & surrounding areas.
          </h2>
          <p className="text-slate-600">
            From emergency care to cosmetic improvements, we help patients in {areas} get the care they need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl lg:max-w-none mx-auto">
          {data.servicos.map((srv) => (
            <article
              key={srv.titulo}
              className="p-6 bg-white border border-slate-200 rounded-card shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  srv.icon === 'emergency' ? 'bg-red-50 text-red-600' : 'bg-sky-50 text-primary-dark'
                }`}
              >
                {icons[srv.icon as keyof typeof icons] || icons.implant}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{srv.titulo}</h3>
              <p className="text-slate-600 mb-4">{srv.descricao}</p>
              <a
                href={`tel:${data.telefoneE164}`}
                className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
