"use client";
import React from 'react';
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaBuilding } from "react-icons/fa";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
   
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};

const bounceEffect = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

function ContactSection() {
  return (
    <motion.section
      className="bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-12 md:px-20 lg:px-30 bg-[#2F1893]"
      style={{ backgroundImage: "url('/contact-bg.png')" }}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="flex-col-reverse max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-4 md:px-30">

        {/* LEFT SIDE - TEXT & CONTACT DETAILS */}
        <motion.div
          className="text-[#FFFFFF] space-y-6"
          initial="hidden"
          animate="visible"
          variants={bounceEffect}
        >
          <h2 className="text-[22px] sm:text-[35px] font-bold">Let’s Keep in Touch</h2>
          <p className="text-white/80 text-lg sm:text-lg">
          We're building tools to help businesses unlock hidden value from unused software licenses. Whether you're a startup optimizing costs or an enterprise with legacy software, SoftSell is here to make your resale journey fast, secure, and profitable..
          </p>

          <div className="space-y-5 text-sm">
            <div className="flex gap-4 text-center"><IoCall /> +1 555 505 5050</div>
            <div className="flex gap-4 text-center"><CiMail />info@designmodo.com</div>
            <div className="flex gap-4"><FaBuilding />San Francisco, CA<br />560 Bush St & 20th Ave, Apt5<br />San Francisco, 230909</div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          className="bg-white p-8 rounded-xl shadow-lg text-[#1E0E62] "
          initial="hidden"
          animate="visible"
          variants={bounceEffect}
        >
          <form className="space-y-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-semibold mb-1">YOUR NAME</label>
                <input type="text" placeholder="First name" className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-600" />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-semibold mb-1">BUDGET</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-full">
                  <option>$500</option>
                  <option>$1000</option>
                  <option>$5000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">INPUT FIELD</label>
              <input type="email" placeholder="name@mail.com" className="w-full px-4 py-2 border border-gray-300 rounded-full text-gray-600" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">YOUR MESSAGE</label>
              <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-md h-24 resize-none text-gray-600" />
            </div>

            <div className="flex  items-center justify-between gap-4 mt-4">
              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="copy" className="accent-[#25DAC5]" />
                <label htmlFor="copy" className="text-sm text-gray-700">Send me a copy</label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-[#25DAC5] hover:bg-teal-500 text-white px-6 py-2 rounded-full transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default ContactSection;
