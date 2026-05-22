import { motion } from 'framer-motion'

export function LiveBackground({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const opacity = variant === 'dark' ? 0.35 : 0.55

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 h-[400px] w-[400px] rounded-full bg-gold/25 blur-[90px]"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-primary-light/50 blur-[80px]"
        animate={{ x: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,213,162,0.15),transparent_55%)]" />
    </div>
  )
}
