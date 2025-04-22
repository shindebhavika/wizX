'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import { PiBeachBallLight } from 'react-icons/pi'
import { motion, useInView } from 'framer-motion'

const navLinks = ['Home', 'Features', 'Pricing', 'Blog']
export const dynamic = 'force-static'
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
}

export default function Home() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.9 })

  return (
    <div
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/home-bg.png')" }}
      ref={sectionRef}
    >
      {/* Overlay */}
      <motion.div
        className="bg-gradient-to-b from-purple-500/60 via-indigo-600/40 to-blue-800/40 min-h-screen flex flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Navbar */}
        <motion.nav
          className="w-full max-w-6xl flex justify-center items-center text-sm py-6 text-white/80"
          variants={fadeInUp}
        >
          <div className="flex space-x-6 font-600 text-[18px]">
            {navLinks.map((item) => (
              <motion.a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className={`transition-all duration-200 hover:text-white ${item === 'Features' ? 'font-semibold text-white' : 'hover:opacity-80'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={scaleIn}
              >
                {item}
              </motion.a>
            ))}
            <motion.span
              className="hover:rotate-12 transform transition-all duration-300 text-white"
              whileHover={{ rotate: 360 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              variants={scaleIn}
            >
              <PiBeachBallLight size={20} />
            </motion.span>
          </div>
        </motion.nav>

        {/* Center Content */}
        <motion.div className="text-center mt-16" variants={fadeInUp}>
          <motion.p className="font-bold text-2xl" variants={fadeInUp}>
            Startup 3
          </motion.p>
          <motion.h1 className="text-4xl sm:text-6xl font-bold mt-4 mb-4" variants={fadeInUp}>
            Forget About Code
          </motion.h1>
          <motion.p className="max-w-xl mx-auto text-lg text-white/90 mb-8" variants={fadeInUp}>
            Startup Framework gives you complete freedom over your creative process —
            you don’t have to think about any technical aspects. There are no limits
            and absolutely no coding.
          </motion.p>

          {/* Dots */}
          <motion.div className="flex justify-center space-x-2 mb-8" variants={fadeInUp}>
            {[0, 1, 2, 3, 4].map((dot, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
                whileHover={i !== 2 ? { scale: 1.4, opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                variants={scaleIn}
              ></motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/sign-up">
              <motion.button
                className="bg-[#482BE7] hover:bg-indigo-400 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all duration-300"
                variants={scaleIn}
              >
                Create an Account
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
