/**
 * DoctorsPage - Página explicativa dos doutores
 * Segue o padrão dentista-modelo-2 e referência Advanced Dental Health Center
 */
import { Link } from 'react-router-dom'
import { clinicData } from '../data'
import type { ClinicData, DoutorDetalhado } from '../types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileStickyCta from '../components/MobileStickyCta'
import { useState } from 'react'

interface DoctorsPageProps {
  data?: Partial<ClinicData>
}

function DoctorCard({ doc }: { doc: DoutorDetalhado }) {
  return (
    <article className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
      <div className="md:flex">
        <div className="md:w-80 shrink-0">
          <div className="aspect-[4/5] md:aspect-square bg-slate-100">
            <img
              src={doc.imagem || '/assets/images/doctor-placeholder.png'}
              alt={`${doc.nome}, ${doc.credencial}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-2">Meet the Doctor</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              {doc.nome}, {doc.credencial}
            </h2>
          </div>

          {doc.citacao && (
            <blockquote className="border-l-4 border-primary pl-4 py-2 text-slate-600 italic">
              &ldquo;{doc.citacao}&rdquo;
              <footer className="mt-2 text-slate-900 font-semibold not-italic">— {doc.nome}, {doc.credencial}</footer>
            </blockquote>
          )}

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Experience</h3>
            <p className="text-slate-600 leading-relaxed">{doc.experiencia}</p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Education</h3>
            <ul className="space-y-2">
              {doc.educacao.map((edu) => (
                <li key={edu.titulo} className="text-slate-600">
                  <strong className="text-slate-900">{edu.titulo}</strong>
                  <br />
                  <span>{edu.instituicao} — {edu.local}</span>
                </li>
              ))}
            </ul>
          </section>

          {doc.secaoExtra && (
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{doc.secaoExtra.titulo}</h3>
              <p className="text-slate-600 leading-relaxed">{doc.secaoExtra.conteudo}</p>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}

export default function DoctorsPage({ data: propData }: DoctorsPageProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const data = { ...clinicData, ...propData } as ClinicData
  const doutores = data.doutoresDetalhados ?? []

  if (doutores.length === 0) {
    return (
      <>
        <Header data={data} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="min-h-[50vh] flex items-center justify-center">
          <p className="text-slate-600">No doctor profiles available.</p>
        </main>
        <Footer data={data} />
      </>
    )
  }

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full">
        Skip to content
      </a>
      <Header data={data} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <section className="pt-10 pb-8 md:pt-14 md:pb-12 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(14,165,233,0.12),transparent)] bg-gradient-to-b from-sky-50 via-white to-slate-50">
          <div className="w-full max-w-container mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:underline mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Meet the Doctors
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              Experienced dental care led by trusted professionals. Get to know the doctors behind {data.clinicaNome} and learn more about their mission, training, and approach to patient care.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-slate-50">
          <div className="w-full max-w-container mx-auto px-4 space-y-16 md:space-y-20">
            {doutores.map((doc) => (
              <DoctorCard key={doc.nome} doc={doc} />
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white border-t border-slate-200">
          <div className="w-full max-w-container mx-auto px-4 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">
              Ready to meet us in person?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Schedule your appointment today
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Trusted, modern dental care for patients and families in {data.enderecoCidade}. Same-day appointments available for new patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.telefoneE164}`}
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Call Now
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MobileStickyCta data={data} />
      <Footer data={data} />
    </>
  )
}
