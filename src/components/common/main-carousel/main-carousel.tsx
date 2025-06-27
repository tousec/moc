/*
|-----------------------------------------
| setting up MainCarousel for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: moc, June, 2025
|-----------------------------------------
*/
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselComponent() {
  return (
    <Carousel  plugins={[
        Autoplay({
          delay: 2900,
        }),
      ]} className="w-full p-2 min-h-[400px]">
      <CarouselContent>
              {["/main-slider/1.png","/main-slider/2.png","/main-slider/3.png","/main-slider/4.png","/main-slider/5.png","/main-slider/6.png","/main-slider/7.png","/main-slider/8.png",].map((url, index) => (
          <CarouselItem key={index} className="border relative">
             <Image
                  src={url}
                  alt="Images from the gallery"
                          width={1200}
                          height={400}
                  className={`w-full h-[400px] object-cover`}
                />
            </CarouselItem>
            


        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
