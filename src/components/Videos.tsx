'use client'
import React from 'react'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import { ScrollAnimation } from './ScrollAnimation'
export function Videos() {
  const videos = [
    {
      title: 'Spurhacks 2025 Edit',
      description:
        '',
      thumbnail: '/myImages/youtube.png',
      duration: '',
      link: 'https://youtu.be/VWumBIzF4v8',
    },
  ]
  return (
    <section id="videos" className="py-16 border-t border-emerald-100">
      <ScrollAnimation animation="fadeIn">
        <h2 className="text-3xl font-bold mb-2">videos</h2>
        <div className="h-1 w-16 bg-emerald-500 mb-8"></div>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Some of my videos.
        </p>
      </ScrollAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <ScrollAnimation key={index} animation="fadeUp" delay={index * 0.1}>
            <a
              href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-emerald-500 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full cursor-pointer border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-black hover:outline hover:outline-2 hover:outline-black"
            tabIndex={0}
            aria-label={`Watch ${video.title}`}
          >
            <div className="relative h-48 overflow-hidden pointer-events-none">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={192}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
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
            </div>
          </a>
        </ScrollAnimation>
        ))}
      </div>
    </section>
  )
} 