'use client'
import React from 'react'
import { UsersIcon } from 'lucide-react'
export function Leadership() {
  const leadershipRoles = [
    {
      organization: 'Forge',
      role: 'Founder | Executive Director',
      period: '2025 - Present',
      description:
        'Founded and led a student-run tech incubator, mentoring 30+ students and launching 5 successful projects.',
    },
    {
      organization: 'Nexo',
      role: 'Technical Lead',
      period: '2019 - 2021',
      description:
        'Managed a team of 8 developers working on community-focused applications that served 500+ users.',
    },
    {
      organization: 'Theta Tau',
      role: 'Vice President',
      period: '2018 - 2019',
      description:
        'Organized professional development events and workshops for 50+ engineering students.',
    },
  ]
  return (
    <section id="leadership" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">leadership</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadershipRoles.map((role, index) => (
          <div
            key={index}
            className="bg-emerald-500 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4">
              <div className="w-10 h-10 text-white">
                <UsersIcon className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 text-white">
              {role.organization}
            </h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-medium">{role.role}</span>
              <span className="text-white/80 text-sm">{role.period}</span>
            </div>
            <p className="text-white">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 