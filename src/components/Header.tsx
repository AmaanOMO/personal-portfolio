'use client'
import React, { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen((open) => !open)
  const handleMenuClose = () => setMenuOpen(false)

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
    { href: '#experience', label: 'experience' },
    { href: '#contact', label: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold text-gray-800"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
                handleMenuClose()
              }}
            >
              amaan<span className="text-emerald-500">sheikh</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={handleMenuToggle}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center transition-all"
          onClick={handleMenuClose}
        >
          <nav
            className="flex flex-col space-y-8 text-2xl font-bold text-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMenuClose}
                className="hover:text-emerald-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 text-3xl"
            onClick={handleMenuClose}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
      )}
    </header>
  )
} 