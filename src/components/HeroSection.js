'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    triggerOnce: false,
    threshold: 2,
  })

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#2F1893] bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="rounded-lg max-w-4xl w-full flex flex-col items-center justify-center text-center">
        {/* Small Title */}
        <motion.h2
          className="text-white text-lg font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Free Sample
        </motion.h2>

        {/* Main Heading from Left */}
        <motion.h2
          className="text-4xl mt-9 md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Powerful Generator and Free <br /> Figma Sources
        </motion.h2>

        {/* Paragraph from Right */}
        <motion.p
          className="text-white/80 text-md font-medium max-w-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          Startup Framework contains components and complex blocks which can easily
          be integrated into almost any design. All of the components are made in
          the same style, and can easily be integrated into projects, allowing you
          to create hundreds of solutions.
        </motion.p>
      </div>
    </div>
  )
}

export default HeroSection
