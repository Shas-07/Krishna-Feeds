export function HeroShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-primary-light/40 blur-2xl" />
      <svg
        className="absolute right-0 bottom-0 w-full max-w-3xl text-primary/8"
        viewBox="0 0 800 400"
        fill="currentColor"
      >
        <path d="M0,200 Q200,80 400,200 T800,200 L800,400 L0,400 Z" />
      </svg>
      <svg
        className="absolute top-20 left-0 h-32 w-full opacity-30"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C200,0 400,80 600,40 S1000,0 1200,40"
          fill="none"
          stroke="#A8D5A2"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

export function SectionCurve({ flip }: { flip?: boolean }) {
  return (
    <div
      className={`wave-line h-12 w-full ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    />
  )
}
