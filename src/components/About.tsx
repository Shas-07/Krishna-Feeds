import { CheckCircle2 } from 'lucide-react'
import { ABOUT_FEATURES, BRAND } from '../constants'
import { AnimatedSection } from './AnimatedSection'
import { SectionCurve } from './OrganicShapes'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <SectionCurve />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Committed to Farmer Success"
          subtitle={`${BRAND.name} – ${BRAND.legalName} manufactures premium Animal Feed and Poultry Feed with trusted nutrition standards — from buffalo and dairy formulations to broiler and layer programs.`}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/assets/founder.png.jpeg"
                alt="KRISHNA FEEDS manufacturing facility"
                className="aspect-[4/3] w-full object-cover"
                width={700}
                height={525}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/30 to-transparent" />
            </div>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2">
            {ABOUT_FEATURES.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <article className="glass-card product-glow h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-primary-dark">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
