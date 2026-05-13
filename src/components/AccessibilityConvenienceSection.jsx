import React from 'react'
import { motion } from 'framer-motion'
import {
  Accessibility,
  CreditCard,
  Smartphone,
  Banknote,
  Car,
  ParkingSquare,
  Users,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const items = [
  {
    icon: Accessibility,
    title: 'Wheelchair-accessible',
    desc: 'Accessible entrance, seating and toilet — welcoming every guest.',
  },
  {
    icon: CreditCard,
    title: 'Cards accepted',
    desc: 'Credit cards, debit cards — fast and secure checkout.',
  },
  {
    icon: Smartphone,
    title: 'NFC mobile payments',
    desc: 'Pay with phone or smartwatch — quick & contactless.',
  },
  {
    icon: Banknote,
    title: 'Cheques accepted',
    desc: 'Traditional payment options available on request.',
  },
  {
    icon: Car,
    title: 'Free street parking',
    desc: 'Convenient street parking around Av. Bir Anzarane.',
  },
  {
    icon: ParkingSquare,
    title: 'Free parking lot',
    desc: 'Free parking lot for guests — easy arrivals.',
  },
  {
    icon: Users,
    title: 'Gender-neutral toilets',
    desc: 'Inclusive, accessible restrooms on-site.',
  },
]

export default function AccessibilityConvenienceSection() {
  return (
    <section className="section bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Accessibility & convenience"
          title="Designed to make every visit easy."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card flex h-full flex-col"
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-forest-800 text-gold-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-forest-900">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
