"use client";
import Image from "next/image";
import { RxCopy } from "react-icons/rx";
import { IoDiamondOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <motion.div
      className="text-white min-h-screen bg-cover bg-center flex items-center bg-[#2F1893]"
      style={{ backgroundImage: "url('/Rectangle.png')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col-reverse md:flex-row w-full justify-evenly ">
        {/* Left: Laptop Image */}
        <motion.div className="md:w-1/2 w-full flex justify-start ml-0" variants={fadeInUp}>
          <Image
            src="/Mockup.png"
            alt="Laptop Visual"
            width={400}
            height={300}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Right: Text + Features */}
        <motion.div
          className="w-full p-3  mt-10 pr-0 md:pr-20 text-center md:text-left"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-4xl md:text-3xl font-semibold mb-4 leading-13"
            variants={fadeInUp}
          >
          We Help You Unlock Value
          </motion.h1>

          <motion.p
            className="text-base md:text-lg mb-6 font-medium leading-7"
            variants={fadeInUp}
          >
            SoftSell is built to empower business owners, IT teams, <br></br> and  software managers to turn unused software licenses <br></br>  into profit — quickly,securely, and effortlessly.
          </motion.p>

          {/* Feature Icons Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              className="flex flex-col items-center md:items-start"
              variants={fadeInUp}
            >
              <div className="text-2xl mb-2">
                <RxCopy />
              </div>
              <h3 className="text-sm font-bold uppercase leading-6 tracking-[2px]">
              💡 30+ Software Categories Supported
              </h3>
              <p className="text-[16px] mt-3 leading-7 font-medium">
              We handle a wide variety of licenses — from productivity suites to enterprise tools — with customized evaluation and resale paths <br></br>tailored to your needs.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-start"
              variants={fadeInUp}
            >
              <div className="text-2xl mb-2">
                <IoDiamondOutline />
              </div>
              <h3 className="text-sm font-bold uppercase leading-6 tracking-[2px]">
              🧩 Smart Matching & Valuation Engine
              </h3>
              <p className="text-[16px] mt-3 leading-7 font-medium">
              Our system uses a smart algorithm to match your licenses with real-time buyer demand, ensuring the best possible return.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
