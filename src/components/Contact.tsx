'use client'
import React from 'react'
import { MailIcon, SendIcon } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">contact me</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-emerald-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <MailIcon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
          <p className="text-white mb-6">
            {"Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing new opportunities and ideas."}
          </p>
          <a
            href="mailto:amaansheikhme@gmail.com"
            className="text-white hover:text-white/80 flex items-center"
          >
            amaansheikhme@gmail.com
          </a>
        </div>
        <div className="bg-emerald-500 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
          <form action="https://formspree.io/f/mqabwegq" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-white/90 text-emerald-500 px-6 py-3 rounded-md flex items-center transition-colors"
            >
              Send Message
              <SendIcon className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 