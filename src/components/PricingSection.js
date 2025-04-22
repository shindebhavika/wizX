"use client";
import { useState } from "react";
import PriceCard from "./atoms/PriceCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Starter",
      price: "9.99",
      features: ["2 GB of space", "14 days of backups", "Social integrations", "Client billing"],
      extras: ["Remote access", "Custom domain", "24 hours support", "Admin tools", "Collaboration tools", "User management"],
    },
    {
      title: "Professional",
      price: "19.99",
      features: ["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Remote access"],
      extras: ["Custom domain", "24 hours support", "Admin tools", "Collaboration tools", "User management"],
    },
    {
      title: "Team",
      price: "49.99",
      features: ["2 GB of space", "14 days of backups", "Social integrations", "Client billing", "Remote access", "Custom domain", "24 hours support", "Admin tools", "Collaboration tools", "User management"],
      extras: [],
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20 text-white"
      style={{ backgroundImage: "url('/price-bg.png')" }}
    >
      <div className="absolute inset-0 bg-[#2F1893]/50 z-0" />
      <div className="relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-2 text-center"
        >
          Plans & Pricing
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-sm max-w-xl mx-auto mb-12 text-center font-medium leading-8"
        >
          Startup Framework is free forever — you only pay for <br />
          custom domain hosting or to export your site.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PriceCard
                plan={plan}
                isSelected={selectedPlan === index}
                onSelect={() => setSelectedPlan(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PricingSection;
