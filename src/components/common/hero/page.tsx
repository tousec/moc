/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: moc-dev, August, 2025
|-----------------------------------------
*/

'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Star, Users, BookOpen, Headphones, PenTool, MessageCircle, Baby, Award } from 'lucide-react';

interface MousePosition {
  x: number;
  y: number;
}

const StarsHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const services = [
    { icon: Award, name: 'IELTS Preparation' },
    { icon: MessageCircle, name: 'Spoken English' },
    { icon: PenTool, name: 'Writing Skills' },
    { icon: Headphones, name: 'Listening Comprehension' },
    { icon: Users, name: 'Language Club' },
    { icon: Baby, name: 'Kids & Junior English' },
    { icon: BookOpen, name: 'Basic to IELTS Programs' },
    { icon: Star, name: 'Advanced Spoken English' },
  ];

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Star 
              className="w-2 h-2 text-red-400 opacity-30" 
              fill="currentColor"
            />
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-red-600 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30}px)`,
            left: '10%',
            top: '20%',
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-red-500 rounded-full opacity-15 blur-2xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 40}px)`,
            right: '10%',
            bottom: '20%',
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Interactive Mouse Trail */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
        }}
      >
        <div className="w-4 h-4 bg-red-500 rounded-full opacity-30 animate-ping" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Logo/Brand Section */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center mb-4">
            {/* <Star className="w-12 h-12 text-red-500 mr-3 animate-spin-slow" fill="currentColor" /> */}
            <h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
              }}
            >
              Explore
            </h1>
            {/* <Star className="w-12 h-12 text-red-500 ml-3 animate-spin-slow" fill="currentColor" /> */}
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-red-300 mb-2">
            Your Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            With Stars&apos; English Centre.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className="group relative p-4 bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-lg hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:bg-red-900/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <IconComponent className="w-8 h-8 text-red-400 mx-auto mb-2 group-hover:text-red-300 transition-colors" />
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                  {service.name}
                </p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
            style={{
              boxShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
            }}
          >
            <span className="relative z-10">Explore Courses</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-red-500 text-red-400 font-bold rounded-full text-lg hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Book Free Trial</span>
          </button>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
          <div className="group">
            <div 
              className="text-3xl md:text-4xl font-bold text-red-400 mb-2 transform group-hover:scale-110 transition-transform"
              style={{
                transform: `translateY(${mousePosition.y * -5}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              1000+
            </div>
            <p className="text-gray-300">Students Trained</p>
          </div>
          <div className="group">
            <div 
              className="text-3xl md:text-4xl font-bold text-red-400 mb-2 transform group-hover:scale-110 transition-transform"
              style={{
                transform: `translateY(${mousePosition.x * -3}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              95%
            </div>
            <p className="text-gray-300">Success Rate</p>
          </div>
          <div className="group">
            <div 
              className="text-3xl md:text-4xl font-bold text-red-400 mb-2 transform group-hover:scale-110 transition-transform"
              style={{
                transform: `translateY(${(mousePosition.x + mousePosition.y) * -2}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              5+
            </div>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StarsHero;