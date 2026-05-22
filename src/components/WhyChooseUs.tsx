import {
  Award,
  Factory,
  Leaf,
  Shield,
  Truck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { WHY_CHOOSE } from '../constants'
import { AnimatedSection } from './AnimatedSection'
import { SectionHeading } from './SectionHeading'

const iconMap: Record<(typeof WHY_CHOOSE)[number]['icon'], LucideIcon> = {
  leaf: Leaf,
  shield: Shield,
  factory: Factory,
  users: Users,
  truck: Truck,
  award: Award,
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-primary-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Why Choose Us"
          title="The KRISHNA FEEDS Advantage"
          subtitle="A cooperative society built on trust, quality manufacturing, and farmer-first values."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <AnimatedSection key={item.title} delay={i * 0.06}>
                <article className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-gold/40 hover:bg-white/10">
                  <div className="inline-flex rounded-xl bg-gold/20 p-3 text-gold transition group-hover:bg-gold group-hover:text-primary-dark">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                </article>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
