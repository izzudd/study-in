import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroCourse from "../components/course/CourseHero"
import Progress from "../components/course/Progress"
import ListCourse from "../components/course/ListCourse"

export default function Course({ course }) {
  return (
    <div className="bg-background text-on-background">
      <Navbar isLogin={true}/>
      <HeroCourse/>  
      <Progress/>
      <ListCourse/>
      <Footer/>
    </div>
  )
}