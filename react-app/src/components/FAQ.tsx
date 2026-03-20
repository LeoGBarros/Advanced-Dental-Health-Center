import type { ClinicData } from '../types'

interface FAQProps {
  data: ClinicData
}

export default function FAQ({ data }: FAQProps) {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="w-full max-w-container mx-auto px-4">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Common questions about our dental practice
          </h2>
        </div>

        <div className="max-w-2xl space-y-3">
          {data.faq.map((item, i) => (
            <details
              key={i}
              className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden [&[open]_summary_span]:before:content-['−']"
            >
              <summary className="p-5 font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span className="text-primary font-semibold before:content-['+']" />
              </summary>
              <p className="px-5 pb-5 pt-2 border-t border-slate-200 text-slate-600 leading-relaxed">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
