import React, { useState } from 'react'

/**
 * SafeImage — renders an <img> with graceful fallback.
 * If the image fails to load, it hides itself so the underlying
 * gradient / brand placeholder stays visible. Keeps the demo polished
 * even on flaky networks.
 */
export default function SafeImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  sizes,
  decoding = 'async',
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) return null
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  )
}
