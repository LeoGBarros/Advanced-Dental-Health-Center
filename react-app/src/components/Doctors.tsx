import { Link } from 'react-router-dom'
import type { ClinicData } from '../types'

interface DoctorsProps {
  data: ClinicData
}

export default function Doctors({ data }: DoctorsProps) {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-slate-50">
      <div className="w-full max-w-container mx-auto px-4">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Meet Your Dentist</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Trusted dental care in {data.enderecoCidade}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {data.doutores.map((doc) => (
            <article
              key={doc.nome}
              className="grid md:grid-cols-[100px_1fr] md:grid-cols-1 md:place-items-center md:text-center gap-6 p-6 bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <div className="aspect-square w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={doc.imagem || '/assets/images/doctor-placeholder.png'}
                  alt={doc.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.nome}</h3>
                <p className="font-bold text-primary-dark text-sm mb-1">{doc.anosExperiencia}</p>
                <p className="text-slate-600 text-sm">{doc.credenciais}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/doctors"
            className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Learn more about the doctors
          </Link>
        </div>
      </div>
    </section>
  )
}
