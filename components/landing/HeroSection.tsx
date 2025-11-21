"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";
import AppStoreButton from "./AppStoreButton";

export default function HeroSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing/landing_hero_bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 ml-24 pt-8 sm:pt-12 md:pt-16 lg:pt-24 pb-24 sm:pb-32 md:pb-40 lg:pb-40">
        <div className="container mx-auto max-w-7xl px-12 sm:px-16 md:px-24 lg:px-32 xl:px-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center lg:items-start">
            {/* Left: Phone Mockups */}
            <motion.div
              className="
                relative flex justify-center lg:justify-start items-center
                -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-20
              "
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[900px] lg:max-w-[1100px] flex items-center justify-center -space-x-8 sm:-space-x-12 md:-space-x-16">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1/2"
                >
                  <Image
                    src="/landing/landing_iphone.png"
                    alt="App Screenshots"
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="w-1/2"
                >
                  <Image
                    src="/landing/landing_iphone_1.png"
                    alt="App Screenshots"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              className="space-y-3 sm:space-y-3 md:space-y-4 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover Rwanda's Best Spots
              </motion.h1>

              <motion.p
                className="text-base sm:text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Start your 30-day free trial today.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AppStoreButton store="App Store" />
                <AppStoreButton store="Google Play" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
