'use client'

import { useMemo } from 'react'

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  spin: number
  sway: number
  opacity: number
  hue: string
}

const BLUES = [
  'oklch(0.86 0.05 235)',
  'oklch(0.9 0.04 240)',
  'oklch(0.8 0.07 245)',
  'oklch(0.93 0.03 230)',
]

export function FallingPetals({ count = 22 }: { count?: number }) {
  const petals = useMemo<Petal[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 9 + Math.random() * 9,
      delay: -Math.random() * 16,
      drift: (Math.random() - 0.5) * 160,
      spin: 220 + Math.random() * 260,
      sway: 16 + Math.random() * 28,
      opacity: 0.45 + Math.random() * 0.4,
      hue: BLUES[i % BLUES.length],
    }))
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden motion-reduce:hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            ['--petal-drift' as string]: `${p.drift}px`,
            ['--petal-spin' as string]: `${p.spin}deg`,
            ['--petal-opacity' as string]: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <span
            className="block"
            style={{
              ['--petal-sway' as string]: `${p.sway}px`,
              animation: `petal-sway ${p.duration / 3}s ease-in-out ${p.delay}s infinite`,
            }}
          >
            <span
              className="block"
              style={{
                width: `${p.size}px`,
                height: `${p.size * 0.7}px`,
                background: p.hue,
                borderRadius: '100% 0 100% 0',
                boxShadow: '0 1px 3px oklch(0.7 0.06 240 / 0.25)',
              }}
            />
          </span>
        </span>
      ))}
    </div>
  )
}
