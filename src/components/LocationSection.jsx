import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  Facebook,
  Navigation,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData } from '../data/businessData'

export default function LocationSection() {
  const c = businessData.contact
  const s = businessData.social
  return (
    <section id="location" className="section bg-cream-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Find Bloom Tree"
          title="Av. Bir Anzarane, El Jadida."
          subtitle="Find us in the heart of El Jadida — open daily from 7 AM to 11:30 PM."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 overflow-hidden rounded-3xl ring-1 ring-forest-800/10 shadow-soft"
          >
            <div className="relative aspect-[16/10] w-full bg-forest-800">
              <iframe
                title="Bloom Tree location"
                src={businessData.maps.embed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute left-4 top-4">
                <span className="chip-dark">
                  <MapPin className="h-3.5 w-3.5 text-gold-300" />
                  {businessData.address}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4">
              <p className="text-xs text-forest-800/70">
                {businessData.maps.lat.toFixed(4)}°N,{' '}
                {businessData.maps.lng.toFixed(4)}°W
              </p>
              <a
                href={businessData.maps.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2 text-xs"
              >
                <Navigation className="h-3.5 w-3.5" />
                Open Directions
              </a>
            </div>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="card-dark">
              <p className="eyebrow text-gold-300">Contact</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-gold-300" />
                  <span>{businessData.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-gold-300" />
                  <a href={`tel:${c.phoneTel}`} className="hover:text-gold-300">
                    {c.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 text-gold-300" />
                  <div>
                    <a
                      href={`https://wa.me/${c.whatsappRaw}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block hover:text-gold-300"
                    >
                      WhatsApp · {c.whatsapp}
                    </a>
                    <a
                      href={`https://wa.me/${c.whatsappAltRaw}`}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-xs text-cream-50/70 hover:text-gold-300"
                    >
                      Extra WhatsApp · {c.whatsappAlt}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 text-gold-300" />
                  <div>
                    <p>{businessData.hours.label}</p>
                    <p className="text-xs text-cream-50/70">
                      {businessData.hours.peak}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={`tel:${c.phoneTel}`}
                  className="btn bg-cream-50/10 text-cream-50 ring-1 ring-cream-50/20 hover:bg-cream-50/15"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${c.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="card flex items-center justify-between">
              <p className="text-sm font-medium text-forest-900">
                Follow Bloom Tree
              </p>
              <div className="flex gap-2">
                <a
                  href={s.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-cream-100 text-forest-900 hover:bg-gold-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={s.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-cream-100 text-forest-900 hover:bg-gold-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="card">
              <p className="eyebrow">Weekly hours</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-forest-800/80 sm:grid-cols-2">
                {businessData.hours.schedule.map((d) => (
                  <li
                    key={d.day}
                    className="flex items-center justify-between rounded-lg px-2 py-1 hover:bg-cream-100"
                  >
                    <span className="font-semibold text-forest-900">
                      {d.day}
                    </span>
                    <span>{d.open} – {d.close}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
