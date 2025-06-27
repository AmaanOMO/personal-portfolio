'use client'
import React from 'react'
import { CheckCircleIcon } from 'lucide-react'
export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST API', 'GraphQL'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'SQL', 'NoSQL'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Webpack'],
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
            className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-white mr-2" />
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 