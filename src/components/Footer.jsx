import React from 'react'
import { Instagram, Facebook, MessageCircle, Phone, MapPin } from 'lucide-react'
import Logo from './ui/Logo'
import { businessData } from '../data/businessData'

const columns = [
  {
    title: 'Visit',
    links: [
      { label: 'Menu', href: '#menu' },
      { label: 'Delivery', href: '#delivery' },
      { label: 'Reservations', href: '#reservations' },
      { label: 'Live Music', href: '#live-music' },
      { label: 'Desserts', href: '#desserts' },
    ],
  },
  {
    title: 'Convert',
    links: [
      { label: 'Conversion funnel', href: '#conversion' },
      { label: 'Offers', href: '#offers' },
      { label: 'Location', href: '#location' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-50/85">
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream-50/70 text-pretty">
              {businessData.positioning} A modern café and restaurant for
              breakfast, brunch, French plates, dessert, cocktails, delivery,
              takeaway and live music in El Jadida.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold-300" />
                {businessData.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold-300" />
                <a
                  href={`tel:${businessData.contact.phoneTel}`}
                  className="hover:text-gold-300"
                >
                  {businessData.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gold-300" />
                <a
                  href={`https://wa.me/${businessData.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-300"
                >
                  WhatsApp · {businessData.contact.whatsapp}
                </a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-3">
              <p className="eyebrow text-gold-300">{col.title}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-cream-50/80 hover:text-gold-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <p className="eyebrow text-gold-300">Social</p>
            <div className="mt-4 flex gap-2">
              <a
                href={businessData.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream-50/10 hover:bg-cream-50/15"
              >
                <Instagram className="h-4 w-4 text-gold-300" />
              </a>
              <a
                href={businessData.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream-50/10 hover:bg-cream-50/15"
              >
                <Facebook className="h-4 w-4 text-gold-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 text-xs text-cream-50/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Bloom Tree · El Jadida, Morocco. All
            rights reserved.
          </p>
          <p>Premium client-facing demo · Built for conversion.</p>
        </div>
      </div>
    </footer>
  )
}
