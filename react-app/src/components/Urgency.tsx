import type { ClinicData } from '../types'

interface UrgencyProps {
  data: ClinicData
}

export default function Urgency({ data }: UrgencyProps) {
  return (
    <section className="py-8 bg-[#fffbeb] border-y border-amber-200/60">
      <div className="w-full max-w-container mx-auto px-4 flex flex-wrap items-center justify-center gap-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-900 m-0">
          Tooth pain? Don&apos;t wait.
        </h2>
        <p className="text-amber-800 font-semibold m-0">
          Same-day emergency appointments available.
        </p>
        <a
          href={`tel:${data.telefoneE164}`}
          className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl bg-rose-500 text-white font-semibold shadow-lg hover:bg-rose-600 transition-colors"
        >
          Call Now
        </a>
      </div>
    </section>
  )
}
