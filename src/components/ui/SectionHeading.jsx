import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'dark',
}) {
  const titleColor = variant === 'dark' ? 'text-forest-900' : 'text-cream-50'
  const subColor =
    variant === 'dark' ? 'text-forest-800/70' : 'text-cream-50/80'
  const eyebrowColor =
    variant === 'dark' ? 'text-gold-600' : 'text-gold-300'

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className={`eyebrow ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className={`mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${titleColor} text-balance`}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className={`mt-4 text-base leading-relaxed sm:text-lg ${subColor} text-pretty`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
