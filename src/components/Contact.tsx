import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { BRAND } from '../constants'
import { AnimatedSection } from './AnimatedSection'
import { LiveBackground } from './LiveBackground'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-surface to-primary-light/20 py-20 sm:py-28"
    >
      <LiveBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Call or email for product enquiries, bulk orders, and dealership opportunities."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatedSection>
            <a
              href={`tel:${BRAND.phone}`}
              className="contact-card group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-md transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg active:scale-[0.99] sm:p-8"
            >
              <span className="inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Phone className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm font-medium text-muted">Phone</p>
              <p className="mt-1 text-2xl font-bold text-primary-dark">{BRAND.phone}</p>
              <p className="mt-3 text-sm font-medium text-primary">Tap to call</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <a
              href={`mailto:${BRAND.email}`}
              className="contact-card group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-md transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg active:scale-[0.99] sm:p-8"
            >
              <span className="inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition group-hover:bg-primary group-hover:text-white">
                <Mail className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm font-medium text-muted">Email</p>
              <p className="mt-1 text-base font-bold break-all text-primary-dark sm:text-lg">
                {BRAND.email}
              </p>
              <p className="mt-3 text-sm font-medium text-primary">Tap to email</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="sm:col-span-2 lg:col-span-1">
            <a
              href={BRAND.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-md transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg active:scale-[0.99] sm:p-8"
            >
              <span className="inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition group-hover:bg-primary group-hover:text-white">
                <MapPin className="h-6 w-6" />
              </span>
              <p className="mt-5 text-sm font-medium text-muted">Location</p>
              <p className="mt-1 text-xl font-bold text-primary-dark">{BRAND.location}</p>
              <p className="mt-2 text-sm text-muted">{BRAND.locationDetail}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Open in Google Maps
                <ExternalLink className="h-4 w-4" />
              </p>
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.18} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg">
            <iframe
              title="KRISHNA FEEDS location on Google Maps"
              src={BRAND.mapsEmbedUrl}
              className="h-64 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-primary/10 bg-surface px-4 py-3 sm:px-5">
              <p className="text-sm text-muted">KRISHNA FEEDS — Hulakoti, Gadag</p>
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View on Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
