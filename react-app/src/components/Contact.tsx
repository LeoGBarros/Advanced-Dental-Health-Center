import { FormEvent, useState } from 'react'
import type { ClinicData } from '../types'

interface ContactProps {
  data: ClinicData
}

export default function Contact({ data }: ContactProps) {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    form.submit()
    setSuccess(true)
  }

  const areas = data.areasServidas.join(', ').replace(/, ([^,]*)$/, ' & $1')
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="w-full max-w-container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary-dark mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dentist in {data.enderecoCidade} – Schedule your visit
          </h2>
          <p className="text-slate-600 mb-6">
            Serving {areas} & surrounding areas. Reach out for appointments or urgent dental concerns. For medical emergencies, call 911.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
            >
              Book Online
            </a>
            <a
              href={`tel:${data.telefoneE164}`}
              className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
            >
              Call {data.telefoneDisplay}
            </a>
          </div>
          <ul className="space-y-2 text-slate-600">
            <li><strong className="text-slate-900">Address:</strong> {data.enderecoCompleto}</li>
            <li><strong className="text-slate-900">Phone:</strong> <a href={`tel:${data.telefoneE164}`} className="text-primary-dark font-semibold">{data.telefoneDisplay}</a></li>
            <li><strong className="text-slate-900">Maps:</strong> <a href={data.googleMapsUrl} target="_blank" rel="noreferrer" className="text-primary-dark font-semibold">Get directions on Google Maps</a></li>
          </ul>
        </div>

        <form
          className="p-6 bg-white border border-slate-200 rounded-card shadow-sm grid gap-4"
          action={`https://formsubmit.co/${data.formSubmitEmail}`}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value={`New contact request - ${data.clinicaNome}`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Message</h3>
          <label className="grid gap-2 font-semibold">
            Name
            <input type="text" name="name" placeholder="Your name" required className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </label>
          <label className="grid gap-2 font-semibold">
            Phone
            <input type="tel" name="phone" placeholder="(555) 555-5555" required className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </label>
          <label className="grid gap-2 font-semibold">
            Message
            <textarea name="message" rows={4} placeholder="How can we help?" className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
          </label>
          <button
            type="submit"
            className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
          {success && (
            <p className="text-emerald-600 font-semibold" aria-live="polite">
              Message sent! We&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>

      <div className="w-full max-w-container mx-auto px-4 mt-6">
        <div className="overflow-hidden rounded-card border border-slate-200">
          <iframe
            title={`${data.clinicaNome} location`}
            src={data.googleMapsEmbedUrl}
            className="w-full min-h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
