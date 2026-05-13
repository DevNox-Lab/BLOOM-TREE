import React, { useEffect, useState } from 'react'
import { Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react'
import { businessData } from '../data/businessData'
import Logo from './ui/Logo'

const NAV = [
  { label: 'Menu', href: '#menu' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Live Music', href: '#live-music' },
  { label: 'Desserts', href: '#desserts' },
  { label: 'Location', href: '#location' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(26,45,41,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-forest-900/80 transition-colors hover:text-forest-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`https://wa.me/${businessData.contact.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href={`tel:${businessData.contact.phoneTel}`} className="btn-secondary">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-xl bg-forest-800 text-cream-50 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden lg:hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pb-5">
          <div className="rounded-3xl bg-forest-800 p-4 text-cream-50 shadow-soft">
            <nav className="grid grid-cols-2 gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-cream-50/90 hover:bg-forest-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${businessData.contact.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`tel:${businessData.contact.phoneTel}`}
                className="btn-primary"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
