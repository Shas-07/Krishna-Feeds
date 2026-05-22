import { AnimatedSection } from './AnimatedSection'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, light }: Props) {
  return (
    <AnimatedSection className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold tracking-widest uppercase ${
            light ? 'text-primary-light' : 'text-primary'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-primary-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/85' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mx-auto mt-5 h-1 w-16 rounded-full ${
          light ? 'bg-gold' : 'bg-gradient-to-r from-primary to-gold'
        }`}
        aria-hidden
      />
    </AnimatedSection>
  )
}
