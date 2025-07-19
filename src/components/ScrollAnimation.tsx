'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight'
  delay?: number
  duration?: number
  className?: string
}

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }
}

export function ScrollAnimation({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: ScrollAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth feel
      }}
      variants={animations[animation]}
      className={className}
    >
      {children}
    </motion.div>
  )
} 