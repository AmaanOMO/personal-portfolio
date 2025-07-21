'use client'
import React, { useEffect, useState } from 'react'
import { GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react'
import { ScrollAnimation } from './ScrollAnimation'

const phrases = [
  "Aspiring Software Engineer",
  "Into Full-Stack & AI/ML",
  "I like Cats & Volleyball",
];

export function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  // Typing and erasing animation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const currentPhrase = phrases[currentPhraseIndex]
    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }, 100)
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, 50)
      } else {
        timeoutId = setTimeout(() => {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          setIsTyping(true)
        }, 500)
      }
    }
    return () => clearTimeout(timeoutId)
  }, [displayText, isTyping, currentPhraseIndex])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <ScrollAnimation animation="fadeUp">
        <div className="cat-emoji text-5xl mb-6">🐈‍⬛🐈</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {"Hi, I'm "}<span className="text-emerald-500">Amaan Sheikh</span>
        </h1>
        <div className="text-xl md:text-2xl mb-8 font-light min-h-[2rem]">
          <span className="text-black">{displayText}</span>
          {showCursor && <span className="text-black">_</span>}
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center w-full max-w-xs mx-auto">
        <a
          href="https://drive.google.com/file/d/1fjTMOdXyHj48VxmpPs5U0iTscXv6fD9p/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-emerald-500 text-black hover:bg-emerald-50 px-6 py-3 rounded-md flex justify-center items-center gap-2 w-[260px] transition-colors text-base cursor-pointer"
        >
          <span className="flex items-center gap-2 w-full justify-center">
            <FileTextIcon className="w-5 h-5 text-black" />
            Resume
          </span>
        </a>
        <a
          href="https://github.com/AmaanOMO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md flex justify-center items-center gap-2 w-[260px] transition-colors text-base"
        >
          <GithubIcon className="w-5 h-5" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amaansheikh-swe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-emerald-500 text-black hover:bg-emerald-50 px-6 py-3 rounded-md flex justify-center items-center gap-2 w-[260px] transition-colors text-base cursor-pointer"
        >
          <span className="flex items-center gap-2 w-full justify-center">
            <LinkedinIcon className="w-5 h-5 text-black" />
            LinkedIn
          </span>
        </a>
      </div>
        </ScrollAnimation>
    </section>
  )
} 