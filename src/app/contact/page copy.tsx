/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: varse-project, May, 2025
|-----------------------------------------
*/

'use client'

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What courses do you offer at Stars English Centre?",
      answer: "We offer comprehensive English language courses including IELTS Preparation, Spoken English, Writing Skills, Listening Comprehension, Language Club, Kids & Junior English, Basic to IELTS Programs, and Advanced Spoken English in an English-only environment."
    },
    {
      id: 2,
      question: "How long are the course durations?",
      answer: "Course durations vary depending on the program. Basic courses run for 3-4 months, IELTS preparation courses are 4-6 months, and our intensive programs can be completed in 2-3 months. We also offer flexible scheduling options."
    },
    {
      id: 3,
      question: "Do you provide any certification after course completion?",
      answer: "Yes! Upon successful completion of any course, students receive a certificate from Stars English Centre. For IELTS preparation, we also provide practice test certificates and progress reports."
    },
    {
      id: 4,
      question: "What are your class timings?",
      answer: "We offer flexible timing options: Morning batches (9:00 AM - 11:00 AM), Afternoon batches (2:00 PM - 4:00 PM), and Evening batches (6:00 PM - 8:00 PM). Weekend classes are also available."
    },
    {
      id: 5,
      question: "Do you offer online classes?",
      answer: "Yes, we provide both in-person and online classes. Our online platform includes live interactive sessions, recorded lectures, practice materials, and one-on-one mentoring sessions."
    },
    {
      id: 6,
      question: "What is the fee structure?",
      answer: "Our fees are competitive and vary by course type. We offer installment plans and early bird discounts. Please contact us for detailed fee information and current promotional offers."
    },
    {
      id: 7,
      question: "Can I get a free trial class?",
      answer: "Absolutely! We offer a free trial class for all our courses. This helps you understand our teaching methodology and decide if the course suits your learning style."
    },
    {
      id: 8,
      question: "What makes Stars English Centre different from other institutes?",
      answer: "Our English-only environment, experienced native and certified trainers, small batch sizes (max 12 students), personalized attention, modern teaching methods, and 95% success rate make us the best language course provider in Bangladesh."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          {/* Floating background elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                <Star className="w-4 h-4 text-blue-200" fill="currentColor" />
              </div>
            ))}
          </div>

          <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-blue-200 mr-3 animate-spin" fill="currentColor" />
              <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
              <Star className="w-8 h-8 text-blue-200 ml-3 animate-spin" fill="currentColor" />
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to start your English learning journey? Get in touch with us today!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 border border-blue-100 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex items-center mb-8">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We&apos;ll get back to you soon!</p>
              </div>
            ) : (
                <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="transform hover:scale-105 transition-all duration-300">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 focus:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="transform hover:scale-105 transition-all duration-300">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 focus:scale-105"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>
                </div>

                <div className="transform hover:scale-105 transition-all duration-300">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 focus:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="transform hover:scale-105 transition-all duration-300">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-blue-300 resize-vertical focus:scale-105"
                    placeholder="Tell us about your English learning goals or any questions you have..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+880 1332-517884</p>
                    <p className="text-gray-600">+880 1332-517885</p>
                  </div>
                </div>
 


                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">stars.englishcentrebd@gmail.com</p> 
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <div className="text-gray-600">
                      
                      <strong className="text-slate-700 font-semibold">
                      বাড্ডা (হেড অফিস)
                      </strong>
                      <br />

গ ১০৩/১, ৩য় তলা, গুলশান-বাড্ডা লিঙ্ক রোডের পূর্ব মাথায় প্রাণ সেন্টারের বিপরীতে, (বে শোরুমের উপরে)।
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Saturday - Friday: 9:00 AM - 9:00 PM<br /> 
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Social Media</h3>
                    <Link target="_blank" href="https://www.facebook.com/stars.englishcentre/" className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors">
                      facebook.com/starsenglishcentre
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Background animation */}
              <div className="absolute inset-0">
                <div className="absolute w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{top: '10%', right: '10%'}} />
                <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-25 animate-ping" style={{bottom: '15%', left: '15%', animationDelay: '0.5s'}} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <p className="text-blue-100 mb-6">
                  Need immediate assistance? Call us now for instant support!
                </p>
                <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center transform hover:scale-105 group">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-pulse">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden transform hover:scale-102 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{
                    transitionDelay: `${600 + index * 100}ms`
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-blue-700 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expandedFAQ === faq.id 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 border-t border-blue-100 transform transition-all duration-300">
                      <p className={`text-gray-600 mt-3 leading-relaxed transition-all duration-500 ${
                        expandedFAQ === faq.id 
                          ? 'translate-y-0 opacity-100' 
                          : '-translate-y-2 opacity-0'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0">
              <div className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-ping" style={{top: '10%', left: '10%'}} />
              <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-15 animate-ping" style={{top: '60%', right: '15%', animationDelay: '1s'}} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 animate-bounce">Ready to Start Your Journey?</h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who have achieved their English language goals with Stars English Centre
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Book Free Trial
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105">
                  View Courses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;