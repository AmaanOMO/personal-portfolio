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
          <div className="md:hidden relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={handleMenuToggle}
              aria-label="Open menu"
              id="mobile-menu-button"
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
            {menuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-lg z-50 animate-fade-in"
                style={{ minWidth: '10rem' }}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl p-1 rounded focus:outline-none"
                  onClick={handleMenuClose}
                  aria-label="Close menu"
                >
                  &times;
                </button>
                <nav className="flex flex-col space-y-4 py-6 px-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleMenuClose}
                      className="text-base text-gray-800 hover:text-emerald-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 