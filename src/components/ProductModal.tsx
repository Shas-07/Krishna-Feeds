import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { useEffect } from 'react'
import type { ProductItem } from '../data/products'

type Props = {
  product: ProductItem | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    if (!product) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close product details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.article
            className="relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-4xl sm:rounded-3xl lg:max-w-5xl"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
          >
            <div className="flex items-center justify-between border-b border-primary/10 px-5 py-4 sm:px-8">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Product Details
                </p>
                <h2 id="product-modal-title" className="text-xl font-bold text-primary-dark sm:text-2xl">
                  {product.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-primary/15 p-2.5 text-primary-dark transition hover:bg-primary hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="relative bg-surface px-6 py-8 sm:px-10">
                  <span className="absolute top-6 left-6 rounded-md bg-primary-dark px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                    {product.weight}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto max-h-[280px] w-full object-contain sm:max-h-[360px]"
                  />
                </div>

                <div className="px-6 py-8 sm:px-10">
                  <p className="text-base font-semibold text-gold">{product.tagline}</p>
                  <p className="mt-4 leading-relaxed text-muted">{product.about}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.benefits.map((b) => (
                      <span
                        key={b}
                        className="rounded-md border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary-dark"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-8 space-y-3 border-t border-primary/10 pt-6">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-primary-dark">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={onClose}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark sm:w-auto sm:px-10"
                  >
                    Contact for Enquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
