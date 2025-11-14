import Image from 'next/image';
import Link from 'next/link';

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
    <section className="relative min-h-screen">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Hano" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
              <span className="text-xl md:text-2xl font-bold">Hano</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link href="#products" className="text-gray-300 hover:text-white transition">Our Products</Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition flex items-center">
                  Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link href="#places" className="text-gray-300 hover:text-white transition">Places</Link>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link href="/signup" className="text-sm md:text-base text-gray-300 hover:text-white transition">Sign Up</Link>
              <Link href="/login" className="px-4 md:px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition text-sm md:text-base font-medium">
                Log in
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover Rwanda's Best Spots
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Start your 30-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-block">
                <Image src="/logo.png" alt="Download on App Store" width={150} height={45} className="h-12 w-auto" />
              </Link>
              <Link href="#" className="inline-block">
                <Image src="/logo.png" alt="Get it on Google Play" width={150} height={45} className="h-12 w-auto" />
              </Link>
            </div>
          </div>
          
          {/* Right: Phone Mockups */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              <Image src="/Modal.png" alt="App Screenshot 1" width={300} height={600} className="relative z-10" />
              <Image src="/ModalDetails.png" alt="App Screenshot 2" width={300} height={600} className="absolute top-8 left-1/4 z-20" />
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
      title: "Discover Places",
      description: "Features section — images will be provided later."
    },
    {
      title: "Real-time Updates",
      description: "Features section — images will be provided later."
    },
    {
      title: "Community Reviews",
      description: "Features section — images will be provided later."
    },
    {
      title: "Personalized Recommendations",
      description: "Features section — images will be provided later."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to explore Rwanda
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
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
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time with no penalties."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices."
    },
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually depending on your chosen plan."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your email in account settings."
    }
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
            <details key={index} className="group bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="text-lg font-medium">{faq.question}</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "/logo.png" },
    { name: "Jane Smith", role: "CTO", image: "/logo.png" },
    { name: "Mike Johnson", role: "Lead Designer", image: "/logo.png" },
    { name: "Sarah Williams", role: "Product Manager", image: "/logo.png" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg">
            The people behind Hano Places
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-1 overflow-hidden">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <Image src={member.image} alt={member.name} width={80} height={80} className="opacity-50" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
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
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
