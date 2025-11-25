"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-transparent pt-4 sm:pt-6 md:pt-8 lg:pt-32">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 gap-4 sm:gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Hano"
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </motion.div>
              <motion.span
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                whileHover={{ color: "#a855f7" }}
                transition={{ duration: 0.2 }}
              >
                Hano
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-4 lg:space-x-8 xl:space-x-10 flex-1 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {["Home", "Our Products", "Resources", "Places"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white transition-all duration-300 text-sm lg:text-base font-semibold"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Auth Buttons */}
          <motion.div
            className="hidden md:flex items-center space-x-3 lg:space-x-5 flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/signup" className="text-sm lg:text-base text-gray-300">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.div>
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="px-4 lg:px-6 py-2 lg:py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm lg:text-base font-medium"
              >
                Log in
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden ml-2 p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {["home", "products", "resources", "places"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`#${item}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
            <div className="pt-3 sm:pt-4 border-t border-white/10 space-y-2 sm:space-y-3">
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="block text-center text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-2"
                >
                  Sign Up
                </motion.div>
              </Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="block text-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base font-medium"
                >
                  Log in
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
