"use client"
import React from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "./atoms/TeamMemberCard";

const team = [
  {
    name: "Leah Salomon",
    role: "UI Designer",
    src: "/client1.png",
    socials: ["twitter", "facebook", "dribbble", "instagram"],
  },
  {
    name: "Colin Timmons",
    role: "UX Designer",
    src: "/client2.png",
    socials: ["twitter", "google", "dribbble"],
  },
  {
    name: "Miguel Osborne",
    role: "Front-end Developer",
    src: "/client4.png",
    socials: ["skype", "google", "github"],
  },
  {
    name: "Taylor Simon",
    role: "Product Manager",
    src: "/client3.png",
    socials: ["twitter", "instagram"],
  },
  {
    name: "Steven MacAlister",
    role: "Copyrighter",
    src: "/client5.png",
    socials: ["twitter"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TeamSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-[#2F1893] py-16 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-left mb-12">
        <motion.h2
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Startup Crew
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-white/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The most important part of the Startup Framework is the samples. The <br />
          samples form a set of 25 usable pages you can use as is or you can add <br />
          new blocks from UI Kit.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center mt-5"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
