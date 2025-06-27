'use client'
import React from 'react'
import { BriefcaseIcon } from 'lucide-react'
export function Experience() {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      period: '2022 - Present',
      description:
        'Led development of a cloud-based analytics platform, improving performance by 40%. Mentored junior developers and implemented CI/CD pipelines.',
      tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
    },
    {
      company: 'DataViz Solutions',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description:
        'Developed responsive web applications for data visualization. Collaborated with UX designers to create intuitive user interfaces.',
      tech: ['React', 'Express', 'D3.js', 'PostgreSQL'],
    },
    {
      company: 'StartUp Labs',
      position: 'Frontend Developer',
      period: '2018 - 2020',
      description:
        'Built and maintained client-facing applications. Implemented responsive designs and optimized web performance.',
      tech: ['JavaScript', 'HTML/CSS', 'Vue.js', 'Firebase'],
    },
  ]
  return (
    <section id="experience" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">experience</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-10 md:pl-0">
            <div className="md:grid md:grid-cols-8 md:gap-8">
              {/* Timeline connector */}
              <div className="hidden md:block md:col-span-3">
                <div className="flex justify-end mr-8 relative">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 z-10"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-4 bottom-0 right-[7px] w-0.5 bg-emerald-100 -z-10 h-full"></div>
                  )}
                </div>
              </div>
              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-0 md:hidden">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-emerald-500">
                  <BriefcaseIcon className="w-4 h-4 text-emerald-500" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-emerald-100 -z-10"></div>
                )}
              </div>
              {/* Content */}
              <div className="md:col-span-5">
                <div className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {experience.company}
                    </h3>
                    <span className="text-white/80">{experience.period}</span>
                  </div>
                  <h4 className="text-lg font-medium text-white mb-4">
                    {experience.position}
                  </h4>
                  <p className="text-white mb-4">{experience.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/20 text-xs px-3 py-1 rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 