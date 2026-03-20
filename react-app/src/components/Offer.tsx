import type { ClinicData } from '../types'

interface OfferProps {
  data: ClinicData
}

export default function Offer({ data }: OfferProps) {
  const { ofertaEspecial } = data
  return (
    <section className="py-10 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="w-full max-w-container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-[420px] text-center p-10 bg-white rounded-card shadow-2xl border-2 border-white/90">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-extrabold tracking-wider uppercase mb-3">
            {ofertaEspecial.titulo}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{ofertaEspecial.itens}</h2>
          <p className="text-xl text-slate-600 mb-6">
            Only <strong className="text-primary-dark text-3xl">{ofertaEspecial.preco}</strong>
          </p>
          <a
            href={`tel:${data.telefoneE164}`}
            className="inline-flex items-center justify-center min-h-14 px-8 py-4 rounded-xl bg-primary-dark text-white font-semibold text-lg hover:bg-sky-700 transition-colors"
          >
            Claim This Offer
          </a>
        </div>
      </div>
    </section>
  )
}
