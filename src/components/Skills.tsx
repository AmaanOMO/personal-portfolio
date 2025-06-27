'use client'
import React from 'react'
import { CheckCircleIcon } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        'Web Development',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Product Building & Prototyping',
      ],
    },
    {
      title: 'Web & Database',
      skills: [
        'HTML/CSS',
        'JavaScript / TypeScript',
        'React',
        'Node.js',
        'Express.js',
        'SQL / NoSQL',
        'Supabase',
        'REST API',
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Java',
        'C / C++',
        'TypeScript',
        'JavaScript',
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Git',
        'Vercel',
        'Linux',
        'PostHog',
        'Supabase Auth / Storage',
        'VS Code',
        'Figma',
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">skills</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:outline hover:outline-2 hover:outline-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center space-x-2">
                  <CheckCircleIcon className="w-5 h-5 min-w-[20px] min-h-[20px] text-white" />
                  <span className="text-white text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 