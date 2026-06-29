'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'BBM Dispatch', href: '/dispatch' },
    { label: 'APEX', href: '/apex' },
    { label: 'Media', href: '/media' },
    { label: 'Latest News', href: '/news' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-bbmBlack border-b border-bbmGold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-bbmGold font-heading text-3xl tracking-widest">
          BBM STUDIOS
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white text-sm font-body hover:text-bbmGold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-bbmGold text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bbmGray px-6 pb-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white font-body hover:text-bbmGold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
      }
