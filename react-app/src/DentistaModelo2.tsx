/**
 * DentistaModelo2 - Landing page premium CRO-otimizada para clínica dentária (React + Tailwind)
 * Baseado em https://dentalhealthcenter.lovable.app
 *
 * Uso: importar e passar props opcionais para customizar os dados.
 * Sem props, usa os dados default de src/data.ts
 */
import { useState } from 'react'
import { clinicData } from './data'
import type { ClinicData } from './types'
import Header from './components/Header'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Urgency from './components/Urgency'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Hours from './components/Hours'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileStickyCta from './components/MobileStickyCta'

export interface DentistaModelo2Props {
  data?: Partial<ClinicData>
}

export default function DentistaModelo2({ data: propData }: DentistaModelo2Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const data = { ...clinicData, ...propData } as ClinicData

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full">
        Skip to content
      </a>
      <Header data={data} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="main">
        <Hero data={data} />
        <Offer data={data} />
        <Urgency data={data} />
        <Services data={data} />
        <Doctors data={data} />
        <Hours data={data} />
        <Testimonials data={data} />
        <FAQ data={data} />
        <FinalCta data={data} />
        <Contact data={data} />
      </main>
      <MobileStickyCta data={data} />
      <Footer data={data} />
    </>
  )
}

export { clinicData }
export type { ClinicData }
