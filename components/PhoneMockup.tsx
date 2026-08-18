'use client'

import { useRef } from 'react'
import Image from 'next/image'

interface PhoneMockupProps {
  src: string
  alt: string
}

export default function PhoneMockup({ src, alt }: PhoneMockupProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`
  }

  const handleLeave = () => {
    const el = wrapRef.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div className="phone-stage">
      <div
        ref={wrapRef}
        className="phone-3d"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="phone-frame">
          <Image src={src} alt={alt} width={300} height={548} className="phone-screen" />
          <div className="phone-shine" />
        </div>
      </div>
      <div className="phone-shadow" />
    </div>
  )
}