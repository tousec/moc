import CourseCorousel from "@/components/common/course-corousel/course-corousel";
import CompleteHeroComponent from "@/components/common/home-page-component"; 
import { MainCarousel } from "@/components/common/main-carousel/main-carousel";


 
export default function Home() {
  return  <div className="w-full max-w-7xl mx-auto">
  <div className="z-10">
  <MainCarousel />
    <CourseCorousel />
    <div className="mt-2"/>
<CompleteHeroComponent />
  </div>
</div>
}
