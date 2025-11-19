import Image from "next/image";
import Link from "next/link";

// Notification Card Component
interface NotificationCardProps {
  userName: string;
  action: string;
  place: string;
  placeColor: string;
  avatarType: "circle" | "square";
  avatarColor?: string;
  icon?: React.ReactNode;
}

function NotificationCard({
  userName,
  action,
  place,
  placeColor,
  avatarType,
  avatarColor,
  icon,
}: NotificationCardProps) {
  return (
    <div className="bg-[#1E1E1E]/60 backdrop-blur-md rounded-2xl p-4 w-[360px] shadow-xl">
      <div className="flex items-start space-x-3">
        <div
          className={`w-10 h-10 ${
            avatarType === "circle" ? "rounded-full" : "rounded-xl"
          } ${
            avatarColor || "bg-gray-700"
          } flex-shrink-0 flex items-center justify-center`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-white text-xs leading-tight">
            <span className="font-semibold">{userName}</span> {action}
          </p>
          <p className={`${placeColor} font-semibold text-xs mt-1`}>{place}</p>
        </div>
      </div>
    </div>
  );
}

// Team Card Component
interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  bgColor: string;
}

function TeamCard({ name, role, bio, image, bgColor }: TeamCardProps) {
  return (
    <div className="group">
      <div
        className={`relative mb-6 w-full aspect-[3/4] ${bgColor} rounded-lg overflow-hidden flex items-center justify-center`}
      >
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="opacity-30"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-red-500 text-sm mb-3">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

export default function LandingPage() {
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
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <header className="relative z-50 bg-transparent pt-24 md:pt-32">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Hano"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-2xl md:text-3xl font-bold">Hano</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 flex-1 justify-center">
              <Link
                href="#home"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                Our Products
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition flex items-center text-lg">
                  Resources
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <Link
                href="#places"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                Places
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 md:space-x-5 flex-shrink-0">
              <Link
                href="/signup"
                className="text-base md:text-lg text-gray-300 hover:text-white transition"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-5 md:px-7 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition text-base md:text-lg font-medium"
              >
                Log in
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden ml-4">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-0 md:gap-2 lg:gap-3 items-start">
          {/* Left: Phone Mockups */}
          <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1">
            <div className="relative w-full flex items-center justify-center -space-x-8">
              <Image
                src="/landing/landing_iphone.png"
                alt="App Screenshots"
                width={1000}
                height={1000}
                className="w-[48%] h-auto"
                priority
              />
              <Image
                src="/landing/landing_iphone_1.png"
                alt="App Screenshots"
                width={800}
                height={800}
                className="w-[48%] h-auto"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-4 md:space-y-5 order-1 lg:order-2 lg:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Discover Rwanda's Best Spots
            </h1>
            <p className="text-base md:text-lg text-gray-400">
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-row gap-3">
              <Link href="#" className="inline-block">
                <div className="bg-black border border-white rounded-lg px-5 py-2.5 flex items-center space-x-3 hover:bg-gray-900 transition">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px]">Download on the</div>
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="inline-block">
                <div className="bg-black border border-white rounded-lg px-5 py-2.5 flex items-center space-x-3 hover:bg-gray-900 transition">
                  <svg
                    className="w-6 h-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px]">GET IT ON</div>
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <div className="text-center relative z-10">
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
        className="w-full bg-cover bg-center bg-no-repeat relative flex justify-center items-center mb-16 md:mb-20 lg:mb-24 min-h-[600px] md:min-h-[750px] lg:min-h-[900px] top-[-150px] z-0"
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto mb-16 md:mb-24 lg:mb-32">
          {/* Track Performance */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-semibold mb-4">
              Track your performance
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              Get clear insights into visits, engagement, menu views, and promo
              usage.
            </p>
            <p className="text-gray-500 text-base">
              Filter and explore your data in seconds.
            </p>
          </div>

          {/* Engage with Customers */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-semibold mb-4">
              Engage with customers
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              Share updates, promotions, and moments in real time.
            </p>
            <p className="text-gray-500 text-base">
              Keep your audience informed and build stronger customer
              connections.
            </p>
          </div>

          {/* Integrate Effortlessly */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-semibold mb-4">
              Integrate effortlessly
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              Sync your location, menu, booking links, and social pages.
            </p>
            <p className="text-gray-500 text-base">
              Everything works smoothly so you can focus on serving your
              customers.
            </p>
          </div>

          {/* Support */}
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
            <h3 className="text-2xl font-semibold mb-4">
              We're here to support you
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              Get help anytime from the Hano support team.
            </p>
            <p className="text-gray-500 text-base">
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
      name: "Amélie Laurent",
      role: "Founder & CEO",
      bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "/logo.png",
      bgColor: "bg-pink-200",
    },
    {
      name: "Nikolas Gibbons",
      role: "Engineering Manager",
      bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: "/logo.png",
      bgColor: "bg-green-200",
    },
    {
      name: "Sienna Hewitt",
      role: "Product Manager",
      bio: "Former PM for Linear, Lambda School, and On Deck.",
      image: "/logo.png",
      bgColor: "bg-yellow-100",
    },
    {
      name: "Lily-Rose Chedjou",
      role: "Frontend Developer",
      bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "/logo.png",
      bgColor: "bg-amber-100",
    },
    {
      name: "Zahra Christensen",
      role: "Backend Developer",
      bio: "Lead backend dev at Clearbit. Former Clearbit and Loom.",
      image: "/logo.png",
      bgColor: "bg-gray-300",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet our team
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do your best work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition text-white">
              About us
            </button>
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition font-medium">
              Open positions
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              bgColor={member.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
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

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 rounded-xl">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-transparent rounded-xl overflow-hidden"
            >
              <summary className="flex items-start gap-4 p-6 cursor-pointer list-none group-open:bg-[#1E1E1E]/60  transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-600 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-gray-400 group-open:hidden"
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
                    className="w-3 h-3 text-gray-400 hidden group-open:block"
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
                <span className="text-lg font-medium flex-1">
                  {faq.question}
                </span>
              </summary>
              <div className="pl-16 pr-6 pb-6 pt-2 text-gray-400 leading-relaxed group-open:bg-[#1E1E1E]/60">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
            <Image src="/logo.png" alt="Hano" width={32} height={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's get started on something great
          </h3>
          <p className="text-gray-400 mb-8">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              View demo
            </button>
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition font-medium">
              Get started
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Hano Places. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
