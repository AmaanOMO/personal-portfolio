'use client'
import React from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-emerald-50 border-t border-emerald-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
            <a
              href="https://github.com/AmaanOMO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:amaansheikhme@gmail.com"
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              <MailIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amaansheikh-swe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-600 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 