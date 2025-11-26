"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FooterSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <motion.footer
      ref={containerRef}
      className="bg-black border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 md:mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Image src="/logo.png" alt="Hano" width={32} height={32} />
          </motion.div>
          <motion.h3
            className="text-3xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Let's get started on something great
          </motion.h3>
          <motion.p
            className="text-gray-400 text-xl mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join over 4,000+ startups already growing with Hano.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["View demo", "Get started"].map((btn, index) => (
              <motion.button
                key={btn}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-base flex items-center justify-center gap-2 ${
                  index === 0 ? "bg-[#1E1E1E]" : "bg-white text-black"
                } w-full sm:w-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index === 0 && (
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-whitetext-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </span>
                )}
                {btn}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="border-t-2 border-white pt-6 md:pt-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-white text-base">© {new Date().getFullYear()} Hano Places. All rights reserved.</p>
            <div className="flex space-x-4 md:space-x-6">
              {["Terms", "Privacy", "Cookies"].map((link) => (
                <Link key={link} href="#" className="text-white hover:text-white transition text-base">
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
