import type { ClinicData } from '../types'

interface HoursProps {
  data: ClinicData
}

export default function Hours({ data }: HoursProps) {
  const city = data.enderecoCidade.split(',')[0]
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="w-full max-w-container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Our Hours</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Convenient hours for {city}-area patients.
          </h2>
          <p className="text-slate-600">
            Plan your visit with our regular office hours below. For urgent concerns, please call the office directly.
          </p>
        </div>

        <div className="p-6 bg-white border border-slate-200 rounded-card shadow-sm" aria-label="Office hours">
          {data.horarios.map((row) => (
            <div
              key={row.dia}
              className="flex items-center justify-between py-4 border-b border-slate-200 last:border-0 first:pt-0"
            >
              <span className="font-bold text-slate-900">{row.dia}</span>
              <span className="text-slate-600">{row.horario}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
