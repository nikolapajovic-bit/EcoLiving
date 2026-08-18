'use client'

import { useEffect, useState, ReactNode } from 'react'
import ThemeToggle from './ThemeToggle'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('eco-theme')
    if (stored) setDark(stored === 'dark')
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('eco-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
      <div className="theme-toggle-slot">
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
      {children}
    </div>
  )
}