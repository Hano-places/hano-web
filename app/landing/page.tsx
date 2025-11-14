import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Header */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Team Section */}
      <TeamSection />

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
      <header className="relative z-50 bg-transparent">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Hano"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <span className="text-xl md:text-2xl font-bold">Hano</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-gray-300 hover:text-white transition"
              >
                Our Products
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition flex items-center">
                  Resources
                  <svg
                    className="w-4 h-4 ml-1"
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
                className="text-gray-300 hover:text-white transition"
              >
                Places
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                href="/signup"
                className="text-sm md:text-base text-gray-300 hover:text-white transition"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-4 md:px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition text-sm md:text-base font-medium"
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockups */}
          <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1">
            <div className="relative w-full max-w-2xl flex items-center justify-center">
              <Image
                src="/landing/landing_iphone.png"
                alt="App Screenshots"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
              <Image
                src="/landing/landing_iphone_1.png"
                alt="App Screenshots"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover Rwanda's Best Spots
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-block">
                <div className="bg-black border border-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-900 transition">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="inline-block">
                <div className="bg-black border border-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-900 transition">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold">Google Play</div>
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
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-800 text-gray-300 px-5 py-2.5 rounded-full text-base mb-8">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            Smart features for a seamless discovery experience
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover, book, and enjoy Rwanda's best restaurants, hotels, and
            cafés — all in one place. Hano helps users explore with ease while
            helping businesses grow through visibility, rewards, and insights.
          </p>
        </div>

        {/* Phone Mockup with Background Image */}
        <div className="relative flex justify-center items-center mb-24 min-h-[700px] md:min-h-[900px]">
          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/landing/landing_features_bg.png"
              alt="Features Background"
              width={800}
              height={800}
              className="w-auto h-[600px] md:h-[800px] object-contain"
            />
          </div>

          {/* Phone Image */}
          <div className="relative z-10">
            <Image
              src="/landing/landing_iphone_2.png"
              alt="App Features"
              width={450}
              height={900}
              className="w-auto h-[550px] md:h-[700px]"
            />
          </div>

          {/* Notification Cards - All on Left Side with negative z-index to go behind phone */}
          <div className="absolute left-[8%] md:left-[20%] top-[8%] z-0 space-y-5 hidden lg:block">
            {/* Notification 1 */}
            <div className="bg-[#1E1E1E]/60 backdrop-blur-md rounded-2xl p-4 w-[240px] shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-pink-400 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white text-xs leading-tight">
                    <span className="font-semibold">Olivia Rhye</span> shared
                    moments at
                  </p>
                  <p className="text-purple-400 font-semibold text-xs mt-1">
                    Kigali Lounge & Grill
                  </p>
                </div>
              </div>
            </div>

            {/* Notification 2 */}
            <div className="bg-[#1E1E1E]/60 backdrop-blur-md rounded-2xl p-4 w-[240px] shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-400 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white text-xs leading-tight">
                    <span className="font-semibold">Candice Wu</span> redeemed a
                    10% reward at
                  </p>
                  <p className="text-green-400 font-semibold text-xs mt-1">
                    Java House Kigali
                  </p>
                </div>
              </div>
            </div>

            {/* Notification 3 */}
            <div className="bg-[#1E1E1E]/60 backdrop-blur-md rounded-2xl p-4 w-[240px] shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gray-700 flex-shrink-0 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-xs leading-tight">
                    <span className="font-semibold">Nyandungu Eco Park</span>{" "}
                    raised rewards to
                  </p>
                  <p className="text-orange-400 font-semibold text-xs mt-1">
                    1.4k RWF
                  </p>
                </div>
              </div>
            </div>

            {/* Notification 4 */}
            <div className="bg-[#1E1E1E]/60 backdrop-blur-md rounded-2xl p-4 w-[240px] shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-teal-400 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-white text-xs leading-tight">
                    <span className="font-semibold">Lana Steiner</span> just
                    launched
                  </p>
                  <p className="text-blue-400 font-semibold text-xs mt-1">
                    The 10k users challenge workbook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-20"></div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-32">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Kigali Business Scene Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <div>
            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
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

        {/* Business Tools Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-800 text-gray-300 px-5 py-2.5 rounded-full text-base mb-8">
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
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-32">
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
        <div className="text-center mt-32 mb-20">
          <div className="inline-block bg-gray-800 text-gray-300 px-5 py-2.5 rounded-full text-base mb-8">
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
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6">
            <Image src="/logo.png" alt="FAQ Icon" width={32} height={32} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-400 group-open:rotate-180 transition"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">{faq.answer}</div>
            </details>
          ))}
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
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            <div key={index} className="group">
              <div
                className={`relative mb-6 w-full aspect-[3/4] ${member.bgColor} rounded-lg overflow-hidden flex items-center justify-center`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="opacity-30"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-red-500 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-6">
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
