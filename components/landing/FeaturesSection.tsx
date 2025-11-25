"use client";

import NotificationCard from "@/components/NotificationCard";
import SectionBadge from "./SectionBadge";
import Image from "next/image";
import CheckListItem from "./CheckListItem";

export default function FeaturesSection() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 bg-[#060606] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-2 md:mb-3 lg:mb-4">
          <SectionBadge>Features</SectionBadge>
          <h2 className="text-4xl font-bold mb-6 md:mb-8 max-w-5xl mx-auto leading-tight px-4">
            Smart features for a seamless discovery experience
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
            Discover, book, and enjoy Rwanda's best restaurants, hotels, and
            cafés — all in one place.
          </p>
        </div>
      </div>

      {/* Phone Mockup with Background - Hidden on mobile */}
      <div className="relative mb-16 md:mb-20 lg:mb-24">
        {/* Background image - only visible on larger screens */}
        <div
          className="hidden lg:block w-full bg-cover bg-center bg-no-repeat relative min-h-[900px]"
          style={{ backgroundImage: "url('/landing/landing_features_bg.png')" }}
        >
          {/* Notification Cards - Desktop */}
          <div className="absolute left-[25%] bottom-[8%] z-20 space-y-5">
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

        {/* Mobile/Tablet view - Just notification cards without background */}
        <div className="lg:hidden container mx-auto px-4 sm:px-6 space-y-4 py-8">
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

      {/* Kigali Business Scene */}
      <div className="w-full bg-[#030303] py-8 md:py-10 lg:py-12 mb-12 md:mb-16 lg:mb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
            <div>
              <div className="w-12 h-12 bg-[#383838] rounded-full flex items-center justify-center mb-4">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Discover Kigali's vibrant business scene
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 md:mb-6">
                Explore Rwanda's finest places — from local favorites to new
                discoveries.
              </p>
              <ul className="space-y-3">
                <CheckListItem>
                  Track engagement from your visitors across Kigali
                </CheckListItem>
                <CheckListItem>
                  Promote your business to locals and travelers alike
                </CheckListItem>
                <CheckListItem>
                  Gain insights that help you grow and stand out in the city
                </CheckListItem>
              </ul>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
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

      {/* Business Tools */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-16 md:mb-24 lg:mb-32">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <SectionBadge>Features</SectionBadge>
          <h2 className="text-4xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Smart tools to power your business Hano
          </h2>
          <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
            Simple yet powerful features that help your place attract more
            visitors.
          </p>
        </div>

        {/* Business Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mx-auto mb-16 md:mb-24 lg:mb-32">
          {/* Track Performance */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up mb-8">
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
            <p className="text-gray-400 text-base leading-relaxed">
              Get clear insights into visits, engagement, menu views, and promo usage. Filter and explore your data in seconds.
            </p>
          </div>

          {/* Engage with Customers */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200 mb-8">
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
            <p className="text-gray-400 text-base leading-relaxed">
              Share updates, promotions, and moments in real time. Keep your audience informed and build stronger customer connections.
            </p>
          </div>

          {/* Integrate Effortlessly */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-400 mb-8">
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
            <p className="text-gray-400 text-base leading-relaxed">
              Sync your location, menu, booking links, and social pages. Everything works smoothly so you can focus on serving your customers.
            </p>
          </div>

          {/* Support */}
          <div className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-600 mb-8">
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
            <p className="text-gray-400 text-base leading-relaxed">
              Get help anytime from the Hano support team. We guide you as you grow your presence and attract more visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
