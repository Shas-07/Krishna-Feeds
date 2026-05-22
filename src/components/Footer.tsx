import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../constants'

const social = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt={`${BRAND.name} logo`}
                className="h-14 w-14 rounded-full bg-white/10 p-1"
                width={56}
                height={56}
              />
              <div>
                <p className="font-bold">{BRAND.name}</p>
                <p className="text-xs text-white/70">{BRAND.legalName}</p>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              &ldquo;{BRAND.tagline}&rdquo; — Premium feed manufacturing for farmers across
              Karnataka.
            </p>
            <div className="mt-5 flex gap-3">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-white/20 p-2 text-white/80 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold">Animal Feed</h4>
            <ul className="mt-4 space-y-1.5 text-sm text-white/75">
              <li>Buffalo · Cow · Calf</li>
              <li>Sheep & Goat · Pig</li>
            </ul>
            <h4 className="mt-5 font-bold text-gold">Poultry</h4>
            <ul className="mt-2 space-y-1.5 text-sm text-white/75">
              <li>Broiler Feed</li>
              <li>Layer Feed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  <span className="break-all">{BRAND.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BRAND.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 sm:flex-row sm:text-left">
          <p>
            © {year} {BRAND.name} – {BRAND.legalName}. All rights reserved.
          </p>
          <p>Formulated in India · Hulakoti, Gadag, Karnataka</p>
        </div>
      </div>
    </footer>
  )
}
