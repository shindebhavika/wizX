import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { GrGooglePlus } from "react-icons/gr";
function Footer() {
  return (
    <footer className="bg-[#2F1893] text-white px-6 py-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Left: Brand */}
          <div className="text-lg font-semibold">
            <img src='/logo.png' className='rounded-full h-20 w-20'/>
          </div>

          {/* Right: Policy & Social */}
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:text-gray-300 text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300 text-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300 text-2xl"><GrGooglePlus /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-white/30" />

        <div className="flex flex-col md:flex-row justify-between text-sm text-white/80">
          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">Tour</a>
            <a href="#" className="hover:underline">Features</a>
            <a href="#" className="hover:underline">Pricing Plans</a>
            <a href="#" className="hover:underline">Our Works</a>
            <a href="#" className="hover:underline">Brands</a>
            <a href="#" className="hover:underline">Contacts</a>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">© 2017 SoftSell. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
