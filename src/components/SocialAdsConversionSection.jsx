import React from 'react'
import { motion } from 'framer-motion'
import {
  Instagram,
  Facebook,
  Megaphone,
  MessageCircle,
  QrCode,
  Truck,
  CalendarCheck,
  MapPin,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const channels = [
  {
    icon: Instagram,
    title: '13.5k Instagram audience',
    desc: 'Daily reach already built — needs a destination that converts.',
    accent: 'from-blush-200 to-gold-300',
  },
  {
    icon: Facebook,
    title: 'Facebook audience',
    desc: 'Profile traffic and event posts pointed at one page.',
    accent: 'from-forest-300 to-forest-500',
  },
  {
    icon: Megaphone,
    title: 'Paid ad traffic',
    desc: 'Ad spend lands on a conversion-built landing page, not a profile.',
    accent: 'from-gold-300 to-gold-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp order funnel',
    desc: 'One-tap WhatsApp orders with menu links and quick replies.',
    accent: 'from-[#25D366] to-forest-500',
  },
  {
    icon: QrCode,
    title: 'QR menu upgrade',
    desc: 'Replace the PDF with an interactive menu that captures orders.',
    accent: 'from-cream-200 to-gold-300',
  },
  {
    icon: Truck,
    title: 'Delivery order funnel',
    desc: 'Bring delivery requests directly to Bloom Tree, not third parties.',
    accent: 'from-gold-400 to-blush-200',
  },
  {
    icon: CalendarCheck,
    title: 'Reservation funnel',
    desc: 'Capture dinner, brunch, and live-music seats ahead of peak hours.',
    accent: 'from-forest-400 to-forest-700',
  },
  {
    icon: MapPin,
    title: 'Google Maps / directions',
    desc: 'Turn Maps clicks into menu views, calls, and reservations.',
    accent: 'from-gold-300 to-forest-400',
  },
]

export default function SocialAdsConversionSection() {
  return (
    <section id="conversion" className="section bg-cream-50">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Conversion engine"
              title="One website. Every traffic source converted."
              subtitle="Bloom Tree already has Instagram reach, Facebook presence, ads, WhatsApp links, and a QR/PDF menu. A polished website can unify that traffic into one conversion flow for orders, reservations, menu views, live music visits, and directions."
            />
          </div>
          <div className="lg:col-span-5">
            <div className="card flex items-center justify-between gap-4 bg-forest-800 text-cream-50">
              <div>
                <p className="eyebrow text-gold-300">Estimated impact</p>
                <p className="mt-1 font-display text-2xl">
                  +1 unified funnel
                </p>
                <p className="mt-1 text-sm text-cream-50/70">
                  Replace scattered links with one premium destination.
                </p>
              </div>
              <a
                href="#delivery"
                className="btn-primary shrink-0"
                aria-label="See the funnel in action"
              >
                See it
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-5 ring-1 ring-forest-800/5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div
                className={`mb-4 inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-forest-900 ring-1 ring-forest-800/10`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-forest-800/70">
                {desc}
              </p>
              <span className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gold-300/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
