import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../constants'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt={`${BRAND.name} logo`}
            className="h-11 w-11 rounded-full object-contain sm:h-12 sm:w-12"
            width={48}
            height={48}
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-primary-dark">{BRAND.name}</p>
            <p className="max-w-[200px] text-[10px] leading-tight text-muted">{BRAND.legalName}</p>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'text-primary'
                      : 'text-primary-dark/75 hover:bg-primary/5 hover:text-primary-dark'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={`tel:${BRAND.phone}`}
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark active:scale-[0.98] lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Call Us
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-primary-dark lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-primary/10 bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-3 py-3 font-medium transition ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-primary-dark hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-semibold text-white active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4" />
                  {BRAND.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
