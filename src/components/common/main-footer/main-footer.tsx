/*
|-----------------------------------------
| setting up Footer for the App
| @author: AI Assistant & Toufiquer Rahman
| @copyright: moc, June, 2025
|-----------------------------------------
*/

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// UI Components
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Icons from lucide-react
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

// Reusable Logo Component (can be imported or defined here)
const NavImage = ({
  width = 120,
  height = 120,
  className = '',
}: {
  className?: string
  width?: number
  height?: number
}) => {
  return (
    <Image
      src="/white-red-logo.png" // Ensure this path is correct
      alt="Stars' English Centre Logo"
      width={width}
      height={height}
      className={cn('h-auto', className)}
    />
  )
}

// The All-in-One Footer Component
export function MainFooterComponent() {
  // All data is self-contained within the component
  const footerData = {
    about: {
      description:
        "Your trusted partner in mastering English. From IELTS to Spoken English, we provide expert guidance for global success.",
    },
    links: {
      title: 'Quick Links',
      items: [
        { title: 'About Us', href: '/about' },
        { title: 'All Courses', href: '/courses' },
        { title: 'Our Gallery', href: '/gallery' },
        { title: 'Student Portal', href: '/login' },
        { title: 'Contact Us', href: '/contact' },
      ],
    },
    services: {
      title: 'Our Services',
      items: [
        { title: 'IELTS Preparation', href: '/courses/ielts' },
        { title: 'Spoken English', href: '/courses/spoken' },
        { title: 'Corporate Training', href: '/services/corporate' },
        { title: 'Free Mock Tests', href: '/services/mock-tests' },
        { title: 'Kids & Juniors', href: '/courses/kids' },
      ],
    },
    contact: {
      address: '123 English Lane, Badda, Dhaka, Bangladesh',
      phone: '+880 1700 000 000',
      email: 'info@starsenglish.com',
    },
    socials: [
      { Icon: Facebook, href: '#', label: 'Facebook' },
      { Icon: Instagram, href: '#', label: 'Instagram' },
      { Icon: Youtube, href: '#', label: 'YouTube' },
      { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    ],
    copyright: "© 2025 Stars' English Centre. All Rights Reserved.",
  }

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: About & Socials */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4">
              <NavImage />
            </Link>
            <p className="mb-6 text-slate-400">{footerData.about.description}</p>
            <div className="flex space-x-4">
              {footerData.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Our ${social.label} page`}
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                >
                  <social.Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{footerData.links.title}</h3>
            <ul className="space-y-3">
              {footerData.links.items.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-slate-400 transition-colors hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">{footerData.services.title}</h3>
            <ul className="space-y-3">
              {footerData.services.items.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-slate-400 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Stay Updated & Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mb-4 text-slate-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-cyan-500"
              />
              <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Subscribe
              </Button>
            </div>
            <div className="mt-8 space-y-3 text-slate-400">
              <p className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-cyan-400" /> {footerData.contact.address}
              </p>
              <p className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-cyan-400" /> {footerData.contact.phone}
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-cyan-400" /> {footerData.contact.email}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Separator and Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}