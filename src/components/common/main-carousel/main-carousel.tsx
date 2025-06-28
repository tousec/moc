/*
|-----------------------------------------
| setting up MainCarousel for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: moc, June, 2025
| @makeover: AI Assistant
|-----------------------------------------
*/
'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Button } from '@/components/ui/button' // Assuming you have a Button component from shadcn/ui

// Data for our slides. Using an array of objects is more scalable.
const slideData = [
  {
    imgSrc: '/main-slider/1.png',
    title: 'Unlock Your Global Potential',
    subtitle: 'Master English with our world-class, expert-led courses.',
    buttonText: 'Explore Courses',
    buttonLink: '#courses',
  },
  {
    imgSrc: '/main-slider/2.png',
    title: 'Achieve Your IELTS Dream Score',
    subtitle: 'Proven strategies and personalized feedback to guarantee your success.',
    buttonText: 'Start IELTS Prep',
    buttonLink: '#ielts',
  },
  {
    imgSrc: '/main-slider/3.png',
    title: 'Speak with Confidence',
    subtitle: 'Join our Spoken English programs and communicate fluently.',
    buttonText: 'Learn More',
    buttonLink: '#spoken-english',
  },
  {
    imgSrc: '/main-slider/4.png',
    title: 'Excellence in Corporate Training',
    subtitle: 'Elevate your team’s communication skills with our tailored programs.',
    buttonText: 'Get a Quote',
    buttonLink: '#corporate',
  },
]

export function MainCarousel() {
  return (
    <section className="relative w-full group" aria-label="Image Carousel">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000, // Longer delay for hero banners is better
            stopOnInteraction: true,
            stopOnMouseEnter: true, // This is the "locking" hover effect
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slideData.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[60vh] min-h-[450px] md:h-[calc(100vh-80px)]">
                {/* The Image with Ken Burns Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={slide.imgSrc}
                    alt={slide.title}
                    fill
                    className="object-cover w-full h-full animate-ken-burns"
                  />
                </div>
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Text Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                  <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="max-w-2xl mt-4 text-lg text-slate-200 md:text-xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="mt-8 text-base font-bold transition duration-300 ease-in-out transform hover:scale-105"
                    asChild
                  >
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons with Hover Effect */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-black/40 border-white/50 text-white hover:bg-black/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-black/40 border-white/50 text-white hover:bg-black/60 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      </Carousel>
    </section>
  )
}