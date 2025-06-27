import React from 'react'
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              amaan<span className="text-emerald-500">sheikh</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              about
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              projects
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-emerald-500 transition-colors"
            >
              contact
            </a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800">
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
    </header>
  )
} 