import { motion, type MotionProps } from 'framer-motion'

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'foot'
  className?: string
  motionProps?: MotionProps
  ringClassName?: string
}

const sizes = {
  sm: 'h-11 w-11 sm:h-12 sm:w-12',
  md: 'h-24 w-24',
  lg: 'h-28 w-28 sm:h-36 sm:w-36',
  xl: 'h-24 w-24',
  foot: 'h-14 w-14',
}

export function Logo({ size = 'md', className = '', motionProps, ringClassName = '' }: Props) {
  const inner = (
    <div
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-md ring-2 ring-primary/15 ${sizes[size]} ${ringClassName}`}
    >
      <img
        src="/assets/logo.png"
        alt="KRISHNA FEEDS logo"
        className="h-full w-full object-cover"
        width={144}
        height={144}
      />
    </div>
  )

  if (motionProps) {
    return (
      <motion.div className={className} {...motionProps}>
        {inner}
      </motion.div>
    )
  }

  return <div className={className}>{inner}</div>
}
