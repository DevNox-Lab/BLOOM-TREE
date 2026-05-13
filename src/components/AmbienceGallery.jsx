import React from 'react'
import { motion } from 'framer-motion'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const tiles = [
  {
    src: images.ambience,
    label: 'Dine-in atmosphere',
    sub: 'Casual · cosy · romantic · trendy',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: images.ambienceBrunch,
    label: 'Breakfast & brunch',
    sub: 'Eggs · French toast · croissants',
  },
  {
    src: images.ambienceCoffee,
    label: 'Great coffee',
    sub: 'Specialty espresso · cappuccino',
  },
  {
    src: images.ambienceEvening,
    label: 'Evening dining',
    sub: 'Romantic · live music · cocktails',
    span: 'sm:col-span-2',
  },
]

export default function AmbienceGallery() {
  return (
    <section className="relative bg-cream-50 py-8 sm:py-12">
      <div className="container-x">
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl bg-forest-800 ring-1 ring-forest-800/10 shadow-soft ${
                t.span || ''
              }`}
            >
              <SafeImage
                src={t.src}
                alt={t.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/15 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                <p className="font-display text-base font-semibold text-cream-50 sm:text-lg">
                  {t.label}
                </p>
                <p className="text-[11px] text-cream-50/75 sm:text-xs">
                  {t.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
