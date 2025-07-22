'use client'
import React from 'react'
import Image from 'next/image'
import { ScrollAnimation } from './ScrollAnimation'

export function Leadership() {
  const leadershipRoles = [
    {
      organization: 'UB Forge',
      role: 'Founder|Executive Director',
      period: 'Mar 2025 – Present',
      image: '/myImages/Forge.png',
      bullets: [
        'Launched a student-run developer collective from scratch, leading a 6-person core team and planning 5+ project pods for Fall 2025.',
        'Built partnerships and internal infrastructure to give students access to real-world product building and startup mentorship.',
      ],
    },
    {
      organization: 'Theta Tau',
      role: 'Head of Professional Dev.',
      period: 'May 2024 – Jan 2025',
      image: '/myImages/ThetaTau.png',
      bullets: [
        'Organized 4 company tours and 3 networking panels with speakers from Big Tech and startups, driving 100+ student interactions.',
        'Created a new speaker outreach system to streamline comms and secure higher-caliber guest speakers.',
      ],
    },
    {
      organization: 'Theta Tau',
      role: 'Pledge Class President',
      period: 'Jan 2024 – Apr 2024',
      image: '/myImages/ThetaTau.png',
      bullets: [
        'Led a 19-member pledge class through a 10-week leadership and engineering program, fostering collaboration and accountability.',
        'Raised $1,900 to fund and build an Arduino-powered catapult, managing coding, system integration, and final demo.',
        'Coordinated project logistics and delegated technical tasks across subteams for successful on-time delivery.',
      ],
    },
  ]
  return (
    <section id="leadership" className="py-16 border-t border-emerald-100">
      <ScrollAnimation animation="fadeIn">
        <h2 className="text-3xl font-bold mb-2">leadership</h2>
        <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadershipRoles.map((role, index) => (
          <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
            <div
              className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:outline hover:outline-2 hover:outline-black focus:outline-none focus:ring-2 focus:ring-black"
            >
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-500 shadow-md flex items-center justify-center overflow-hidden">
                <Image src={role.image} alt={role.organization + ' logo'} width={56} height={56} className="w-14 h-14 object-cover" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 text-white">
              {role.organization}
            </h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">{role.role}</span>
              <span className="text-white/80 text-sm">{role.period}</span>
            </div>
            <ul className="list-disc pl-5 text-white mb-2 space-y-2">
              {role.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </ScrollAnimation>
        ))}
      </div>
    </section>
  )
} 