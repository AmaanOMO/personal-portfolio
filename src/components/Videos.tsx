'use client'
import React from 'react'
import { PlayIcon } from 'lucide-react'
export function Videos() {
  const videos = [
    {
      title: 'Building a React Portfolio',
      description:
        'A step-by-step guide to creating a personal portfolio with React and Tailwind CSS.',
      thumbnail:
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      duration: '12:45',
    },
    {
      title: 'Modern JavaScript Techniques',
      description:
        'Exploring advanced JavaScript patterns and techniques for cleaner, more efficient code.',
      thumbnail:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      duration: '18:32',
    },
    {
      title: 'Responsive Design Principles',
      description:
        'Learn how to create truly responsive websites that work on any device.',
      thumbnail:
        'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      duration: '15:10',
    },
  ]
  return (
    <section id="videos" className="py-16 border-t border-emerald-100">
      <h2 className="text-3xl font-bold mb-2">videos</h2>
      <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
      <p className="text-gray-600 mb-12 max-w-3xl">
        Check out some of my video tutorials and tech talks.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-emerald-500 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-3">
                  <PlayIcon className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-white">
                {video.title}
              </h3>
              <p className="text-white mb-4 flex-1">{video.description}</p>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Watch video
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 