import type { ClinicData } from '../types'

interface TestimonialsProps {
  data: ClinicData
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>&#9733;</span>
      ))}
    </div>
  )
}

export default function Testimonials({ data }: TestimonialsProps) {
  const areas = data.areasServidas.join(', ').replace(/, ([^,]*)$/, ' & $1')
  const city = data.enderecoCidade.split(',')[0]
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Patient Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            What {city} patients are saying
          </h2>
          <p className="font-bold text-primary-dark">{data.totalPacientes} in {areas}.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.depoimentos.map((rev) => (
            <article
              key={rev.autor}
              className="p-6 bg-white border border-slate-200 rounded-card shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <StarRating count={rev.estrelas} />
                <span className="text-sm text-slate-600">{rev.tempoRelativo}</span>
              </div>
              <p className="text-slate-900 flex-1 mb-4">&ldquo;{rev.texto}&rdquo;</p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold text-slate-900">
                  {rev.autor.charAt(0)}
                </span>
                <strong className="text-slate-900">{rev.autor}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
            aria-label="Open Google reviews for Advanced Dental Health Center"
          >
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
