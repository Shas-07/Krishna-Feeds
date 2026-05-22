const HEADER_OFFSET = 80

export function scrollToSection(href: string) {
  const id = href.replace(/^#/, '')
  const el = document.getElementById(id)
  if (!el) return false

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  window.history.pushState(null, '', href)
  return true
}
