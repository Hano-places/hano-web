"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import NotificationCard from "@/components/NotificationCard";
import TeamCard from "@/components/TeamCard";

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Header */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
}

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      {/* Header/Navbar */}
      <header className="relative z-50 bg-transparent pt-4 sm:pt-6 md:pt-8 lg:pt-32">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
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
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
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
              {["Home", "Our Products", "Resources", "Places"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm lg:text-base"
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Auth Buttons */}
            <motion.div
              className="hidden md:flex items-center space-x-3 lg:space-x-5 flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/signup"
                className="text-sm lg:text-base text-gray-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              {["home", "products", "resources", "places"].map(
                (item, index) => (
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
                )
              )}
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

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl pt-6 sm:pt-8 md:pt-12 lg:pt-24 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left: Phone Mockups */}
          <motion.div
            className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full flex items-center justify-center -space-x-6 sm:-space-x-8">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/landing/landing_iphone.png"
                  alt="App Screenshots"
                  width={1000}
                  height={1000}
                  className="w-[45%] sm:w-[48%] h-auto"
                  priority
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <Image
                  src="/landing/landing_iphone_1.png"
                  alt="App Screenshots"
                  width={800}
                  height={800}
                  className="w-[45%] sm:w-[48%] h-auto"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            className="space-y-3 sm:space-y-4 md:space-y-5 order-1 lg:order-2 lg:pt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover Rwanda's Best Spots
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Start your 30-day free trial today.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {["App Store", "Google Play"].map((store, index) => (
                <motion.div
                  key={store}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Link href="#" className="inline-block w-full">
                    <div className="bg-black border border-white rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 flex items-center space-x-2 sm:space-x-3 hover:bg-gray-900 transition justify-center sm:justify-start">
                      {index === 0 ? (
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      )}
                      <div className="text-left">
                        <div className="text-[9px] sm:text-[10px]">
                          {index === 0 ? "Download on the" : "GET IT ON"}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold">
                          {store}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: "🔍",
      title: "Discover Local Gems",
      description:
        "Explore the best restaurants, hotels, and cafés nearby — personalized to your preferences and budget.",
    },
    {
      icon: "🎁",
      title: "Earn & Redeem Rewards",
      description:
        "Collect Hano Coins every time you visit or review a place, then unlock exclusive offers and discounts.",
    },
    {
      icon: "💬",
      title: "Share Your Moments",
      description:
        "Capture and share your favorite experiences — from sunset dinners to hidden lounges worth discovering.",
    },
  ];

  return (
    <section className="pt-16 md:pt-24 lg:pt-32 bg-[#060606] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block bg-[#F9F5FF] text-[#6941C6] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base mb-6 md:mb-8">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 max-w-5xl mx-auto leading-tight px-4">
            Smart features for a seamless discovery experience
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Discover, book, and enjoy Rwanda's best restaurants, hotels, and
            cafés — all in one place. Hano helps users explore with ease while
            helping businesses grow through visibility, rewards, and insights.
          </p>
        </div>
      </div>

      {/* Phone Mockup with Real Background Image - Full Width */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative flex justify-center items-center mb-16 md:mb-20 lg:mb-24 min-h-[600px] md:min-h-[750px] lg:min-h-[900px]"
        style={{ backgroundImage: "url('/landing/landing_features_bg.png')" }}
      >
        {/* Notification Cards */}
        <div className="absolute left-[10%] md:left-[25%] bottom-[8%] z-20 space-y-5 hidden lg:block">
          <NotificationCard
            userName="Olivia Rhye"
            action="shared moments at"
            place="Kigali Lounge & Grill"
            placeColor="text-purple-400"
            avatarType="circle"
            avatarColor="bg-pink-400"
          />
          <NotificationCard
            userName="Candice Wu"
            action="redeemed a 10% reward at"
            place="Java House Kigali"
            placeColor="text-green-400"
            avatarType="circle"
            avatarColor="bg-blue-400"
          />
          <NotificationCard
            userName="Nyandungu Eco Park"
            action="raised rewards to"
            place="1.4k RWF"
            placeColor="text-orange-400"
            avatarType="square"
            avatarColor="bg-gray-700"
            icon={
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
              </svg>
            }
          />
          <NotificationCard
            userName="Lana Steiner"
            action="just launched"
            place="The 10k users challenge workbook"
            placeColor="text-blue-400"
            avatarType="circle"
            avatarColor="bg-teal-400"
          />
        </div>
      </div>

      {/* Kigali Business Scene Section - Full Width */}
      <div className="w-full bg-[#030303] py-16 md:py-20 lg:py-24 mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="w-12 h-12 bg-[#383838] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Kigali's vibrant business scene
              </h2>
              <p className="text-gray-400 text-xl mb-8">
                Explore Rwanda's finest places — from local favorites to new
                discoveries.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300 text-lg">
                    Track engagement from your visitors across Kigali
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300 text-lg">
                    Promote your business to locals and travelers alike
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300 text-lg">
                    Gain insights that help you grow and stand out in the city
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/landing/kigali_scene.png"
                  alt="Kigali Business Scene"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Business Tools Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block bg-[#F9F5FF] text-[#6941C6] px-5 py-2.5 rounded-full text-base mb-8">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Smart tools to power your business Hano
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Simple yet powerful features that help your place attract more
            visitors, increase visibility, and manage your activities
            effortlessly.
          </p>
        </div>

{/* Business Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mx-auto mb-16 md:mb-24 lg:mb-32">
          {/* Track Performance */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
              Track your performance
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              Get clear insights into visits, engagement, menu views, and promo
              usage.
            </p>
            <p className="text-gray-500 text-sm">
              Filter and explore your data in seconds.
            </p>
          </div>

          {/* Engage with Customers */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
              Engage with customers
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              Share updates, promotions, and moments in real time.
            </p>
            <p className="text-gray-500 text-sm">
              Keep your audience informed and build stronger customer
              connections.
            </p>
          </div>

          {/* Integrate Effortlessly */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-400">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
              Integrate effortlessly
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              Sync your location, menu, booking links, and social pages.
            </p>
            <p className="text-gray-500 text-sm">
              Everything works smoothly so you can focus on serving your
              customers.
            </p>
          </div>

          {/* Support */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-600">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors">
              We're here to support you
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-2">
              Get help anytime from the Hano support team.
            </p>
            <p className="text-gray-500 text-sm">
              We guide you as you grow your presence and attract more visitors.
            </p>
          </div>
        </div>


        {/* Advanced Analytics Section */}
        <div className="text-center mt-16 md:mt-24 lg:mt-32 mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block bg-[#F9F5FF] text-[#6941C6] px-5 py-2.5 rounded-full text-base mb-8">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        {/* Analytics Dashboard Image */}
        <div className="relative max-w-6xl mx-auto mb-0">
          <Image
            src="/landing/landing_features_electronics.png"
            alt="Advanced Analytics Dashboard"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Meet our team
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg mx-auto mb-6 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
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
                  index === 0
                    ? "border border-gray-700 hover:bg-gray-900"
                    : "bg-white text-black hover:bg-gray-200"
                } transition w-full sm:w-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto mt-10 md:mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                bgColor={member.bgColor}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time with no penalties.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices.",
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually depending on your chosen plan.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your email in account settings.",
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to know about the product and billing.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4 rounded-xl">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group bg-transparent rounded-xl overflow-hidden hover:bg-[#1E1E1E]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.summary
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 cursor-pointer list-none group-open:bg-[#1E1E1E]/60 transition-all duration-300 hover:pl-6 md:hover:pl-8"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-gray-600 flex items-center justify-center mt-0.5 group-hover:border-purple-500 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400 group-open:hidden group-hover:text-purple-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-gray-400 hidden group-open:block group-hover:text-purple-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M20 12H4"
                    />
                  </svg>
                </div>
                <span className="text-sm md:text-lg font-medium flex-1 group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
              </motion.summary>
              <motion.div
                className="pl-10 md:pl-16 pr-4 md:pr-6 pb-4 md:pb-6 pt-2 text-gray-400 text-sm md:text-base leading-relaxed group-open:bg-[#1E1E1E]/60"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {faq.answer}
              </motion.div>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function FooterSection() {
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
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Let's get started on something great
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm md:text-base mb-6 md:mb-8"
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
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base ${
                  index === 0 ? "border border-gray-700" : "bg-white text-black"
                } w-full sm:w-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Hano Places. All rights reserved.
            </p>
            <div className="flex space-x-4 md:space-x-6">
              {["Terms", "Privacy", "Cookies"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white transition text-xs sm:text-sm"
                >
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
