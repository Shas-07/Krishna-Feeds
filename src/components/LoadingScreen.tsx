import { motion } from 'framer-motion'

type Props = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.img
        src="/assets/logo.png"
        alt="Loading"
        className="h-24 w-24"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-primary-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>
      <p className="mt-4 text-sm font-medium text-primary">Loading KRISHNA FEEDS...</p>
    </motion.div>
  )
}
