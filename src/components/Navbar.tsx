import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { BRAND, NAV_LINKS } from '../constants'
import { scrollToSection } from '../utils/scroll'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  const closeMenu = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return

    e.preventDefault()
    closeMenu()

    // Wait for menu close + body scroll unlock (required on mobile Safari)
    window.setTimeout(() => {
      scrollToSection(href)
    }, 50)
  }

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
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [closeMenu])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-primary/10 bg-white/95 shadow-sm backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={(e) => handleNavClick(e, '#home')}
        >
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
                  onClick={(e) => handleNavClick(e, link.href)}
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
          className="relative z-50 inline-flex rounded-lg p-2 text-primary-dark lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary-dark/40 lg:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 border-t border-primary/10 bg-white shadow-lg lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block rounded-lg px-4 py-3.5 text-base font-medium transition active:bg-primary/15 ${
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
                <li className="mt-2 border-t border-primary/10 pt-3">
                  <a
                    href={`tel:${BRAND.phone}`}
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-semibold text-white active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4" />
                    {BRAND.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
