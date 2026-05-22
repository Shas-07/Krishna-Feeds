import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { BRAND } from '../constants'
import { LiveBackground } from './LiveBackground'
import { Logo } from './Logo'
import { HeroShapes } from './OrganicShapes'

const CATEGORIES = ['Animal Feed', 'Poultry Feed']

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-surface via-white to-primary-light/20 pt-24"
    >
      <LiveBackground />
      <HeroShapes />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center lg:text-left"
        >
          <Logo
            size="lg"
            className="mx-auto lg:mx-0"
            motionProps={{
              initial: { scale: 0.85, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: 0.15, duration: 0.5 },
            }}
          />

          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            {BRAND.legalName}
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
            <span className="block">{BRAND.name.split(' ')[0]}</span>
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              {BRAND.name.split(' ')[1]}
            </span>
          </h1>

          <p className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
            &ldquo;{BRAND.tagline}&rdquo;
          </p>
          <p className="mt-3 text-lg text-muted">{BRAND.subtitle}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary-dark shadow-sm backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-primary-dark hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 font-semibold text-primary transition hover:bg-primary/5"
            >
              Explore Products
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary-light/30 to-gold/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 shadow-2xl">
            <img
              src="/assets/factory.png"
              alt="KRISHNA FEEDS manufacturing facility in Hulakoti"
              className="aspect-[4/3] w-full object-cover"
              width={800}
              height={600}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6">
              <p className="text-sm font-medium text-white/90">{BRAND.locationDetail}</p>
              <p className="mt-1 text-lg font-bold text-gold">
                Quality Nutrition · Better Performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  )
}
