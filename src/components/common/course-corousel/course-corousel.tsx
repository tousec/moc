/* |-----------------------------------------
| setting up CourseCarousel for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: moc, June, 2025
| @makeover: AI Assistant
|----------------------------------------- */

'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const CourseCarousel = () => {
  // Array of our course data
  const courses = [
    'IELTS',
    'Spoken English',
    'PTE',
    'GRE',
    'GMAT',
    "Kids' English",
    'Spoken & Phonetics',
    'Creative Writing',
    'Basic to IELTS',
    "Juniors' English",
    'Corporate Training',
    'Business English',
  ]

  return (
    <main className="bg-slate-950 flex flex-col items-center justify-center py-12 md:py-24 w-full">
      <div className="w-full max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-slate-400 md:text-xl">
            Find the perfect course to unlock your potential.
          </p>
        </div>

        {/* The Carousel */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false, // Continue autoplay after manual navigation
              stopOnMouseEnter: true, // This creates the "locking" effect on hover
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {courses.map((courseName, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                {/* The eye-catching card with the hover effect */}
                <div className="group relative flex h-40 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-slate-900 p-4 text-center">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 w-full h-full bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                  
                  {/* The hover glow effect */}
                  <div className="absolute inset-0 w-full h-full bg-slate-900 transition-all duration-500 ease-in-out group-hover:bg-slate-900/50"></div>
                  <div className="absolute inset-[-100%] h-[200%] w-[200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#1e293b_50%,#06b6d4_100%)] transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

                  {/* Card Content */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-lg bg-slate-900 transition-transform duration-300 ease-in-out group-hover:scale-95">
                    <h3 className="text-lg font-semibold text-slate-50">
                      {courseName}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
          <CarouselNext className="hidden sm:flex bg-slate-800 border-slate-700 text-white hover:bg-slate-700 hover:text-white" />
        </Carousel>
      </div>
    </main>
  )
}

export default CourseCarousel