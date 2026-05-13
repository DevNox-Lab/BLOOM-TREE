import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  GraduationCap,
  Plane,
  Baby,
  Smile,
  Heart,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const groups = [
  {
    icon: Users,
    title: 'Family friendly',
    desc: 'Family tables, kids menu, high chairs & changing tables.',
  },
  {
    icon: GraduationCap,
    title: 'Students welcome',
    desc: 'Casual seating for university students, brunch & study breaks.',
  },
  {
    icon: Plane,
    title: 'Tourists welcome',
    desc: 'Modern French menu, English service, central El Jadida spot.',
  },
  {
    icon: Heart,
    title: 'Groups & dates',
    desc: 'Group tables, romantic tables, and trendy atmosphere.',
  },
  {
    icon: Baby,
    title: 'Good for kids',
    desc: 'Kids menu, high chairs, changing tables, and family seating.',
  },
  {
    icon: Smile,
    title: 'Atmosphere',
    desc: 'Casual, cosy, quiet, romantic, trendy — chosen by mood.',
  },
]

export default function FamilyStudentsTouristsSection() {
  return (
    <section className="section bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="For everyone"
              title="A table for families, students, tourists & groups."
              subtitle="Bloom Tree welcomes every guest — from morning brunch with kids to late-night dinner with friends or a romantic evening with live music."
            />
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            <a href="#reservations" className="btn-primary">
              Plan a Visit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card group"
            >
              <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl bg-gold-300 text-forest-900">
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
      </div>
    </section>
  )
}
