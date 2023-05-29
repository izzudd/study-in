import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroCourse from "../components/course/CourseHero"
import Progress from "../components/course/Progress"
import ListCourse from "../components/course/ListCourse"

export default function Course({ course }) {
  console.log(course);
  return (
    <div className="bg-background text-on-background">
      <Navbar isLogin={true}/>
      <HeroCourse id={course.id} title={course.title} desciption={course.description} taken={course.taken}/>  
      <Progress progress={course.progress}/>
      <ListCourse materials={course.materials} courseId={course.id}/>
      <Footer/>
    </div>
  )
}