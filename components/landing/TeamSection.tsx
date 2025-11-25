"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamCard from "@/components/TeamCard";

export default function TeamSection() {
  const team = [
    {
      name: "Ihirwe Patrick",
      role: "Founder & CEO",
      bio: "Visionary leader driving innovation and growth at Hano.",
      image: "/team/amelie.jpg",
      bgColor: "bg-purple-200",
    },
    {
      name: "Kwizera Olivier",
      role: "Mobile Developer",
      bio: "Crafting seamless mobile experiences for iOS and Android.",
      image: "/team/nikolas.jpg",
      bgColor: "bg-green-200",
    },
    {
      name: "Kirezi Livia",
      role: "Marketing & Communications",
      bio: "Driving brand awareness and customer engagement strategies.",
      image: "/team/sienna.jpg",
      bgColor: "bg-pink-200",
    },
    {
      name: "Hatuma Charles",
      role: "Frontend Developer",
      bio: "Creating beautiful and intuitive user interfaces.",
      image: "/team/lily.jpg",
      bgColor: "bg-yellow-200",
    },
    {
      name: "Irere",
      role: "Backend Developer",
      bio: "Building robust and scalable backend systems for Hano.",
      image: "/team/zahra.jpg",
      bgColor: "bg-blue-200",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <motion.section
      ref={containerRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-4xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Meet our team
          </motion.h2>
          <motion.p
            className="text-white text-lg font-semibold mx-auto mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you
            to do your best work.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["About us", "Open positions"].map((btn, index) => (
              <motion.button
                key={btn}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base ${
                  index === 0 ? "border border-gray-700 hover:bg-gray-900" : "bg-white text-black hover:bg-gray-200"
                } transition w-full sm:w-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-12 mx-auto mt-10 md:mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <TeamCard name={member.name} role={member.role} bio={member.bio} image={member.image} bgColor={member.bgColor} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
