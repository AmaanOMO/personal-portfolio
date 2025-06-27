'use client'
import React from 'react'
export function About() {
  return (
    <section id="about" className="py-16 border-t border-emerald-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">about me</h2>
        <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden border-2 border-black w-48 h-48 mx-auto">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 text-lg mb-4">
              Hello! I'm Amaan Sheikh, a passionate Computer Science student with a minor in Statistics. I'm into full-stack development, startups, hackathons and using code to make life smoother.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              I'm also the founder of UB Forge, a student run dev collective helping driven students build real projects, explore startup opportunities, and connect with mentors.
            </p>
            <p className="text-gray-700 text-lg">
              Outside of class and coding, you'll find me playing volleyball, spending time with friends and family, or petting cats. I'm always trying to live a clean and active life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 