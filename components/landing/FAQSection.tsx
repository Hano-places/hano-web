"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FAQSection() {
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
            className="text-4xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            className="text-white text-xl"
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
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-white group-open:hidden group-hover:text-purple-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                  <svg
                    className="w-2.5 h-2.5 md:w-3 md:h-3 text-white hidden group-open:block group-hover:text-purple-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                  </svg>
                </div>
                <span className="text-sm md:text-lg font-medium flex-1 group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </span>
              </motion.summary>
              <motion.div
                className="pl-10 md:pl-16 pr-4 md:pr-6 pb-4 md:pb-6 pt-2 text-white text-sm md:text-base leading-relaxed group-open:bg-[#1E1E1E]/60"
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
