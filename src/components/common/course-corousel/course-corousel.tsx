/*
|-----------------------------------------
| setting up CourseCorousel for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: moc, June, 2025
|-----------------------------------------
*/

'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const CourseCorousel= () => {
return <main>  <Carousel plugins={[
    Autoplay({
      delay: 2000,
    }),
  ]}
 className="w-full">
<CarouselContent>
        {["IELTS","Spoken English","PTC","GRE","GMAT","Kids' English","Spoken & Phonetics","Writing","Basic to IELTS","Juniors' English"].map((courseName, index) => (
    <CarouselItem key={index} className="basis-1/4">
                <div className="p-2 border-1 text-center rounded-lg">{ courseName}</div>
      </CarouselItem>
      


  ))}
</CarouselContent>
<CarouselPrevious />
<CarouselNext />
</Carousel></main>;
}
export default CourseCorousel

 