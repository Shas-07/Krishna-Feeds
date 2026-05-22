import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'
import { useState } from 'react'
import { PRODUCT_CATEGORIES, type ProductCategory, type ProductItem } from '../data/products'
import { AnimatedSection } from './AnimatedSection'
import { LiveBackground } from './LiveBackground'
import { ProductModal } from './ProductModal'
import { SectionHeading } from './SectionHeading'

function ProductCard({
  product,
  onSelect,
}: {
  product: ProductItem
  onSelect: (p: ProductItem) => void
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(product)}
      className="product-card group w-full overflow-hidden rounded-2xl border border-primary/10 bg-white text-left transition active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-gradient-to-b from-surface to-white px-4 pt-6 pb-4">
        <span className="absolute top-4 right-4 rounded-md bg-primary-dark px-2.5 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
          {product.weight}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto h-44 w-full object-contain transition duration-300 group-hover:scale-[1.03] sm:h-52"
        />
      </div>
      <div className="border-t border-primary/8 px-5 py-5">
        <h4 className="text-lg font-bold text-primary-dark">{product.name}</h4>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{product.tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
          View product details
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </motion.button>
  )
}

function CategoryPanel({
  category,
  onSelectProduct,
}: {
  category: ProductCategory
  onSelectProduct: (p: ProductItem) => void
}) {
  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mb-10 flex flex-col gap-3 rounded-2xl border border-primary/10 bg-white p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <div>
          <h3 className="text-2xl font-bold text-primary-dark">{category.name}</h3>
          <p className="mt-2 max-w-2xl text-muted">{category.description}</p>
        </div>
        <p className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
          <Package className="h-4 w-4" aria-hidden />
          {category.products.length} formulations
        </p>
      </div>

      <div
        className={`grid gap-5 sm:gap-6 ${
          category.products.length <= 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {category.products.map((product, i) => (
          <AnimatedSection key={product.id} delay={i * 0.04}>
            <ProductCard product={product} onSelect={onSelectProduct} />
          </AnimatedSection>
        ))}
      </div>
    </motion.div>
  )
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory['id']>('animal')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)
  const category = PRODUCT_CATEGORIES.find((c) => c.id === activeCategory)!

  const handleCategoryChange = (id: ProductCategory['id']) => {
    setActiveCategory(id)
    setSelectedProduct(null)
  }

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-white via-surface to-white py-20 sm:py-28"
    >
      <LiveBackground />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Portfolio"
          title="Our Feed Range"
          subtitle="Animal Feed and Poultry divisions — select a category, then tap any product to view full specifications."
        />

        <AnimatedSection className="mt-10 sm:mt-12">
          <div
            className="mx-auto flex max-w-lg rounded-xl border border-primary/15 bg-white p-1 shadow-md"
            role="tablist"
            aria-label="Product categories"
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`relative flex-1 rounded-lg px-4 py-3.5 text-sm font-bold transition sm:py-4 sm:text-base ${
                    isActive ? 'text-white' : 'text-primary-dark hover:bg-primary/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="category-tab"
                      className="absolute inset-0 rounded-lg bg-primary shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        <div className="mt-12 sm:mt-14">
          <AnimatePresence mode="wait">
            <CategoryPanel
              key={category.id}
              category={category}
              onSelectProduct={setSelectedProduct}
            />
          </AnimatePresence>
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  )
}
