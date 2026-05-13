import React from 'react'

/**
 * Bloom Tree brand logo.
 * The supplied PNG is gold-on-black, so it sits on a matching dark badge
 * to keep the artwork crisp on both light navbar and dark footer surfaces.
 */
export default function Logo({ className = '', variant = 'dark' }) {
  const ring = variant === 'dark' ? 'ring-forest-800/15' : 'ring-gold-300/25'

  return (
    <a
      href="#top"
      aria-label="Bloom Tree { Restaurant & Café } — home"
      className={`group inline-flex items-center ${className}`}
    >
      <span
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ${ring} transition-transform duration-300 group-hover:scale-[1.02]`}
      >
        <img
          src="/bloom-tree-logo.png"
          alt="Bloom Tree { Restaurant & Café }"
          width="240"
          height="60"
          className="h-11 w-11 object-contain sm:h-14 sm:w-14"
          decoding="async"
        />
      </span>
    </a>
  )
}
