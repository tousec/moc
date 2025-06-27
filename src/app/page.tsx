import CourseCorousel from "@/components/common/course-corousel/course-corousel";
import { CarouselComponent } from "@/components/common/main-carousel/main-carousel";


 
export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto"><CarouselComponent />
    <CourseCorousel />
    </div>
  );
}
