'use client'
import React from 'react'
import { BriefcaseIcon } from 'lucide-react'
import Image from 'next/image'

export function Experience() {
  const experiences = [
    {
      company: 'Outlier AI',
      position: 'Prompt Engineer',
      period: 'Nov 2024 – Mar 2025',
      image: '/Outlier.png',
      description: '',
      tech: [],
      bullets: [
        'Increased LLM response consistency by 25% by designing and testing over 100 tailored prompts for real-world AI workflows.',
        'Boosted prompt accuracy across customer use cases by running structured evaluation pipelines and refining edge-case logic.',
        'Improved user experience in generative AI features by collaborating with engineering leads to iterate on prompt strategies.',
      ],
    },
    {
      company: 'Visual Computing Lab',
      position: 'Undergraduate Researcher',
      period: 'Oct 2024 – Jan 2025',
      image: '/schoolofCS.png',
      description: '',
      tech: [],
      bullets: [
        'Learned about state-of-the-art HOI detection by collaborating with SONY researchers on transformer-based model optimization.',
        'Explored and analyzed Python codebases for QPIC and STIP architectures to understand model efficiency and design.',
        'Studied detection precision on benchmark datasets (V-COCO, HICO-DET) by investigating query embeddings and pipeline gaps.',
      ],
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
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center overflow-hidden z-10">
                    <Image src={experience.image} alt={experience.company + ' logo'} width={56} height={56} className="w-14 h-14 object-cover" />
                  </div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-14 bottom-0 right-[27px] w-0.5 bg-emerald-100 -z-10 h-full"></div>
                  )}
                </div>
              </div>
              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-0 md:hidden">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-emerald-500 shadow-md overflow-hidden">
                  <Image src={experience.image} alt={experience.company + ' logo'} width={64} height={64} className="w-16 h-16 object-cover" />
                </div>
                {index !== experiences.length - 1 && (
                  <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-emerald-100 -z-10"></div>
                )}
              </div>
              {/* Content */}
              <div className="md:col-span-5">
                <div className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {experience.company}
                      </h3>
                      <span className="text-white/80">{experience.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-4">
                      {experience.position}
                    </h4>
                    {/* Bullets */}
                    <ul className="list-disc pl-5 text-white mb-4 space-y-2">
                      {experience.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
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