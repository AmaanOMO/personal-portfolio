'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
      image: '/SchoolofCS.png',
      description: '',
      tech: [],
      bullets: [
        'Learned about state-of-the-art HOI detection by collaborating with SONY researchers on transformer-based model optimization.',
        'Explored and analyzed Python codebases for QPIC and STIP architectures to understand model efficiency and design.',
        'Studied detection precision on benchmark datasets (V-COCO, HICO-DET) by investigating query embeddings and pipeline gaps.',
      ],
    },
  ]

  // Animation variants
  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  }

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 300,
        damping: 15,
        delay: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.3
      }
    }
  }

  return (
    <section id="experience" className="py-16 border-t border-emerald-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2">experience</h2>
        <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      </motion.div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-500"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        />
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Logo */}
              <motion.div
                className="absolute left-0 transform -translate-x-1/2 z-10"
                variants={logoVariants}
              >
                <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center overflow-hidden">
                  <Image 
                    src={experience.image} 
                    alt={experience.company + ' logo'} 
                    width={64} 
                    height={64} 
                    className="w-16 h-16 object-cover" 
                  />
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                className="ml-20 flex-1"
                variants={cardVariants}
              >
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 