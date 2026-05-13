import React from 'react'
import { motion } from 'framer-motion'
import {
  Star,
  Coffee,
  Cake,
  Leaf,
  Music2,
  Users,
  Heart,
  Truck,
  Sun,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { businessData } from '../data/businessData'

const stats = [
  { value: '4.0', label: 'Average rating', sub: 'on Google' },
  { value: '250', label: 'Reviews', sub: 'and growing' },
  { value: '147', label: '5-star reviews', sub: 'loyal regulars' },
  { value: '13.5k', label: 'Instagram', sub: 'engaged audience' },
]

const assets = [
  { icon: Sun, title: 'Breakfast & Brunch', desc: 'Eggs, French toast, croissants, fresh juice & coffee.' },
  { icon: Coffee, title: 'Great coffee & tea', desc: 'Specialty coffee, Moroccan mint tea, tea selection.' },
  { icon: Cake, title: 'Great dessert', desc: 'Signature dessert boxes, chocolate confectionery.' },
  { icon: Music2, title: 'Live music nights', desc: 'Musician sessions for romantic & weekend evenings.' },
  { icon: Truck, title: 'Delivery & no-contact', desc: 'Delivery, takeaway and no-contact delivery options.' },
  { icon: Leaf, title: 'Vegan / Vegetarian', desc: 'Vegan bowls, vegetarian small plates, organic dishes.' },
  { icon: Users, title: 'Family & friends', desc: 'Family friendly, groups welcome, kids menu.' },
  { icon: Heart, title: 'Tourists & students', desc: 'Tourists welcome, university students welcome.' },
]

export default function TrustExperienceSection() {
  return (
    <section className="section bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience assets"
          title="The atmosphere already sells. The website should match it."
          subtitle="Bloom Tree has strong experience assets. The website should sell the atmosphere, menu variety, and convenience before customers arrive."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-3xl bg-white p-5 ring-1 ring-forest-800/5 shadow-soft"
            >
              <p className="font-display text-4xl font-semibold text-forest-900">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-forest-900">{s.label}</p>
              <p className="text-xs text-forest-800/60">{s.sub}</p>
              {s.label === 'Average rating' && (
                <div className="mt-2 flex items-center gap-0.5 text-gold-500">
                  {[1, 2, 3, 4].map((n) => (
                    <Star key={n} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                  <Star className="h-4 w-4 text-gold-400/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {assets.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="card group"
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-forest-800 text-gold-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-forest-900">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-800/70">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-forest-800/60">
          Open daily {businessData.hours.label.replace('Daily • ', '')} ·{' '}
          {businessData.priceRange}
        </p>
      </div>
    </section>
  )
}
