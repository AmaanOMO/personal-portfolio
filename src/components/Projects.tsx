'use client'
import React from 'react'
import { GithubIcon, ExternalLinkIcon, HomeIcon } from 'lucide-react'
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
      title: 'This Cool, Amazing, Awesome-Sauce Site',
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
      <p className="text-gray-600 mb-12 max-w-3xl">
        {"Here are some of my projects."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-emerald-500 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={192}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-white mb-4 flex-1">
                {project.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/20 text-xs px-3 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.amaans.dev/#projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <HomeIcon className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <ExternalLinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 