import React from 'react'
import { motion } from 'framer-motion'
import { Music2, Wine, Cake, Moon, Users, Calendar } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { events } from '../data/businessData'
import images from '../data/images'
import SafeImage from './ui/SafeImage'

const highlights = [
  { icon: Music2, label: 'Live musician sets' },
  { icon: Wine, label: 'Signature cocktails' },
  { icon: Cake, label: 'Dessert pairings' },
  { icon: Moon, label: 'Late-night food' },
  { icon: Users, label: 'Groups & tourists' },
  { icon: Calendar, label: 'Weekend dinner energy' },
]

export default function LiveMusicSection() {
  return (
    <section id="live-music" className="section relative overflow-hidden bg-forest-900 text-cream-50">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-gold-300/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blush-200/10 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              variant="light"
              eyebrow="Live music & evenings"
              title="A candle-lit, music-led evening — every week."
              subtitle="Romantic atmosphere, live musician sets, cocktails, desserts, and late-night food — the kind of night you reserve a table for."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <a href="#reservations" className="btn-primary">
              <Music2 className="h-4 w-4" />
              Plan a Music Night
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {highlights.map(({ icon: Icon, label }) => (
            <span key={label} className="chip-dark">
              <Icon className="h-3.5 w-3.5 text-gold-300" />
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative h-72 overflow-hidden rounded-3xl bg-forest-800 ring-1 ring-gold-300/15 shadow-soft"
            >
              {/* Warm fallback so the card always looks intentional, even if a photo fails to load */}
              <div className="absolute inset-0" aria-hidden>
                <svg viewBox="0 0 200 280" className="h-full w-full">
                  <defs>
                    <radialGradient id={`ev-${i}`} cx="80%" cy="20%" r="80%">
                      <stop offset="0%" stopColor="#dbb17f" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#dbb17f" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#1a2d29" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="200" height="280" fill={`url(#ev-${i})`} />
                </svg>
              </div>
              <SafeImage
                src={images.events[i % images.events.length]}
                alt={e.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/20"
                aria-hidden
              />
              <div
                className="absolute inset-0 mix-blend-overlay bg-gradient-to-tr from-forest-800/40 via-transparent to-gold-300/15"
                aria-hidden
              />

              <div className="relative flex h-full flex-col justify-end p-5">
                <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-300/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300 ring-1 ring-gold-300/40 backdrop-blur">
                  <Calendar className="h-3 w-3" /> {e.when}
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-cream-50/85">{e.desc}</p>
                <a
                  href="#reservations"
                  className="mt-4 inline-flex items-center text-xs font-semibold text-gold-300 hover:text-gold-200"
                >
                  Reserve a seat →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
