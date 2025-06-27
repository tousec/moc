'use client';
import React from 'react';
import { 
  Star, 
  BookOpen, 
  Users, 
  Award, 
  Mic, 
  FileText, 
  Lightbulb, 
  MapPin, 
  CheckCircle, 
  Trophy 
} from 'lucide-react';

// Types
interface NavLink {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface ServiceItem {
  title: string;
  href: string;
  description: string;
}

interface NavData {
  baseInfo: {
    firstName: string;
    lastName: string;
  };
  about: {
    groupTitle: string;
    fullName: string;
    description: string;
    links: NavLink[];
  };
  services: {
    groupTitle: string;
    data: ServiceItem[];
  };
  othersLink: Array<{
    id: number;
    title: string;
    url: string;
  }>;
}

// Data
const navData: NavData = {
  baseInfo: {
    firstName: "",
    lastName: ""
  },
  about: {
    groupTitle: "About",
    fullName: "Stars' English Centre",
    description: "The perfect place to improve your English skills with clear, engaging, and helpful lessons for learners of all levels.",
    links: [
      {
        id: 1,
        title: "Introduction",
        url: "/",
        description: "Stars' English Centre is a highly recommended place to learn English, with easy-to-understand and very helpful lessons.",
      },
      {
        id: 2,
        title: "Best Service",
        url: "/",
        description: "We offer specialized courses like Spoken English with IPA practice and comprehensive IELTS preparation including free mock tests.",
      },
      {
        id: 3,
        title: "Trust and Experience",
        url: "/",
        description: "Learn with confidence from our experienced teachers and our honorable adviser, Mr. Sharif sir, in a supportive environment.",
      },
    ],
  },
  services: {
    groupTitle: "Services",
    data: [
      {
        title: "Supports",
        href: "/",
        description: "Dedicated support for students with special classes, free seminars, and guidance from experienced educators to help you succeed.",
      },
      {
        title: "Services",
        href: "/",
        description: "Our core services include Spoken English, IELTS preparation, free mock tests, and special seminars to boost your skills.",
      },
      {
        title: "Guide",
        href: "/",
        description: "Our free IELTS seminars and expert guidance will help you understand the path to achieving a high score.",
      },
      {
        title: "Helps",
        href: "/",
        description: "We help you build a strong foundation by practicing with IPA symbols (24 Consonant & 20 Vowel sounds).",
      },
      {
        title: "Information",
        href: "/",
        description: "For admission and information, contact our Badda (Head Office), Uttara, or Mymensingh branches to join our next batch.",
      },
    ],
  },
  othersLink: [
    { id: 1, title: "Course", url: "/course" },
    { id: 2, title: "Blog", url: "/blog" },
    { id: 3, title: "Contact", url: "/contact" },
  ],
};

// Main Hero Section Component
const HeroSection: React.FC = () => {
  const { about } = navData;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Stars Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-30 animate-pulse"
            size={Math.random() * 8 + 4}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Star className="w-6 h-6 fill-current" />
                <span className="text-lg font-medium tracking-wide">Premium English Education</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {about.fullName}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                {about.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Start Learning</span>
                </span>
              </button>
              
              <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center justify-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Free Mock Test</span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-300">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">3</div>
                <div className="text-sm text-gray-300">Branches</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto">
                    <Award className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">IELTS Excellence</h3>
                    <p className="text-gray-200">Comprehensive preparation with free mock tests</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>IPA Pronunciation Practice</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Expert Guidance</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Free Seminars</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

// About Features Section Component
const AboutFeatures: React.FC = () => {
  const { about } = navData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Why Choose <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Stars' English Centre?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="space-y-6">
              {about.links.map((link) => (
                <div key={link.id} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-4 border-blue-300 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border-4 border-purple-300 rounded-full"></div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Excellence in Education</h3>
                  <p className="text-gray-600">Trusted by hundreds of students</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-blue-600 mb-1">24+20</div>
                    <div className="text-sm text-gray-600">IPA Sounds</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-purple-600 mb-1">Free</div>
                    <div className="text-sm text-gray-600">Mock Tests</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-green-600 mb-1">Expert</div>
                    <div className="text-sm text-gray-600">Teachers</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-md">
                    <div className="text-3xl font-bold text-orange-600 mb-1">3</div>
                    <div className="text-sm text-gray-600">Branches</div>
                  </div>
                </div>

                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-center text-gray-600 font-medium">
                  Rated 5 Stars by Our Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Highlights Section Component
const ServiceHighlights: React.FC = () => {
  const { services } = navData;
  
  const serviceIcons = [
    <Users key="users" className="w-8 h-8" />,
    <Mic key="mic" className="w-8 h-8" />,
    <Lightbulb key="lightbulb" className="w-8 h-8" />,
    <FileText key="filetext" className="w-8 h-8" />,
    <MapPin key="mappin" className="w-8 h-8" />,
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive English learning solutions designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.data.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {serviceIcons[index % serviceIcons.length]}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <button className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Complete Hero Component
const CompleteHeroComponent: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* CSS Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* All Hero Sections */}
      <HeroSection />
      <AboutFeatures />
      <ServiceHighlights />
    </div>
  );
};

export default CompleteHeroComponent;