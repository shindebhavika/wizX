'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLock, FaBolt, FaHandshake, FaShieldAlt, FaTools } from 'react-icons/fa'
import Link from 'next/link'

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    triggerOnce: false,
    threshold: 0.2,
  })

  const features = [
    {
      icon: <FaBolt size={30} />,
      title: 'Fast Processing',
      description: 'Get valuations and payments within 24 hours.',
    },
    {
      icon: <FaLock size={30} />,
      title: 'Secure Transactions',
      description: 'Your data and licenses are handled with top security.',
    },
    {
      icon: <FaHandshake size={30} />,
      title: 'Trusted Partners',
      description: 'Thousands of clients trust us with their license sales.',
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: '100% Legal & Compliant',
      description: 'We ensure all resales follow industry regulations.',
    },
   
  ]

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#2F1893] bg-cover bg-center flex flex-col items-center  px-4"
      style={{
        backgroundImage: "url('/Background.png')",
      }}
    >
      

      {/* Why Choose Us Section */}
      <div className=" w-full max-w-6xl px-4 text-white text-center 1">
       
        <motion.h2
          className="text-4xl mt-9 md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
Why Choose Us
        </motion.h2>
        <Link href="/sign-up">
        <motion.button
          className="bg-white text-[#2F1893] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 mb-16 mt-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Sell My Licenses
        </motion.button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center "
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="mb-4 text-[#25DAC5]">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
