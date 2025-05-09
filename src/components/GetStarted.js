"use client";
import Link from "next/link";
import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { FaCloudUploadAlt, FaMoneyCheckAlt, FaCheckCircle } from 'react-icons/fa';

function GetStarted() {
  const steps = [
    {
      title: 'Upload License',
      description: 'Submit your unused software license in just a few clicks.',
      icon: <FaCloudUploadAlt size={40} />,
    },
    {
      title: 'Get Valuation',
      description: 'We’ll analyze the market and send you a real-time offer.',
      icon: <FaMoneyCheckAlt size={40} />,
    },
    {
      title: 'Get Paid',
      description: 'Accept the offer and get paid securely and quickly.',
      icon: <FaCheckCircle size={40} />,
    },
  ];

  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url('/home-bg.png')" }}
    >
      <div className="bg-gradient-to-b from-purple-500/60 via-indigo-600/40 to-blue-800/40 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-tight sm:leading-[60px] lg:leading-[70px] text-[#1E0E62]">
          How It Works 
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl text-white/90 mb-8 px-2">
            SoftSell is a powerful platform for quickly and securely selling your unused software licenses.
          </p>
        </div>

         
          <div className="grid gap-12 sm:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-indigo-100 text-indigo-600 p-5 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-indigo-100 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link href="/sign-up">
              <button className="bg-[#25DAC5] hover:bg-teal-500 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg">
                Get Started →
              </button>
            </Link>
          </motion.div>
       

       
      </div>
    </div>
  );
}

export default GetStarted;
