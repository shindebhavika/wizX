"use client"
import React from 'react'
import ClientCard from './atoms/ClientCard'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9 },
  },
}

function Testimonials() {
  const Clients = [
    {
      name: 'Rayhan Curran',
      src: '/client1.png',
      feedback:
        'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
    },
    {
      name: 'Kayley Frame',
      src: '/client2.png',
      feedback:
        'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
    },
    {
      name: 'Gene Whitfield',
      src: '/client3.png',
      feedback:
        'The most important part of the Startup Framework is the samples',
    },
    {
      name: 'Allan Kim',
      src: '/client4.png',
      feedback:
        'I’ve built my website with Startup just in one day, and it was ready-to-go. ',
    },
  ]

  return (
    <motion.section
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
      variants={containerVariants}
      className="bg-[#1E0E62] py-16 px-4 md:px-10"
    >
      <motion.h2
        className="text-white text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Happy Clients
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {Clients.map((client, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ClientCard
              name={client.name}
              src={client.src}
              feedback={client.feedback}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Testimonials
