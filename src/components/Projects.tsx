'use client'
import React from 'react'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      title: 'Matchy AI',
      description:
        'An AI-powered job matching platform that analyzes your resume and preferences to surface high-fit job listings, automating the application hunt and sending tailored alerts straight to your inbox. Still in the works.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI API', 'PostHog', 'Vercel'],
      github: 'https://github.com/AmaanOMO/matchyai-landing',
      demo: 'https://github.com/AmaanOMO/matchyai-landing',
      image: '/MatchyAI.png',
    },
    {
      title: 'Itinera',
      description:
        'An AI-powered travel planner that maps optimized multi-city routes and recommends places to visit based on your mood. From food to nature to hidden gems.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Google Maps API', 'OpenAI API'],
      github: 'https://github.com/ChuTown/Itinera',
      demo: 'https://devpost.com/software/temp-jg764r?ref_content=user-portfolio&ref_feature=in_progress',
      image: '/Itinera.png',
    },
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio website, built to showcase my projects, experience, and skills. Designed and developed from scratch with a focus on clean design, accessibility, and performance.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/AmaanOMO/personal-portfolio',
      demo: '#',
      image: '/Portfolio.png',
    },
  ]
  return (
    <section id="projects" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">featured projects</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center">
        {"Here are some of my projects."}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-emerald-500 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-black hover:outline hover:outline-2 hover:outline-black"
            tabIndex={0}
            aria-label={`View ${project.title} on GitHub`}
          >
            <div className="relative h-48 w-full overflow-hidden pointer-events-none">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={240}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-focus:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white mb-4 flex-1 text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 mt-auto">
                <span
                  className="text-white hover:text-black transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label="GitHub"
                  onClick={e => {
                    e.stopPropagation();
                    window.open(project.github, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <GithubIcon className="w-6 h-6" />
                </span>
                <span
                  className="text-white hover:text-black transition-colors cursor-pointer"
                  tabIndex={-1}
                  aria-label="External Link"
                  onClick={e => {
                    e.stopPropagation();
                    window.open(project.demo, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <ExternalLinkIcon className="w-6 h-6" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
} 