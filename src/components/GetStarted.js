"use client";
import Link from "next/link";
import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";

function GetStarted() {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/home-bg.png')" }}
    >
      <div className="bg-gradient-to-b from-purple-500/60 via-indigo-600/40 to-blue-800/40 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-tight sm:leading-[60px] lg:leading-[70px]">
            Easy to setup. <br />
            Easy to maintain
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl text-white/90 mb-8 px-2">
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end
            framework for faster and easier web development.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
            {/* Play Button Animation */}
            <motion.div
              whileInView={{ x: 0, opacity: 1 }} // Start from x: -100 and opacity: 0
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-600 p-4 sm:p-3 rounded-full inline-flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <MdPlayArrow size={30} />
            </motion.div>

            {/* CTA Button Animation */}
            <motion.div
              whileInView={{ x: 0, opacity: 1 }} // Start from x: 100 and opacity: 0
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/sign-up">
                <button className="bg-[#25DAC5] hover:bg-teal-500 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 shadow-lg">
                  Get Started →
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
