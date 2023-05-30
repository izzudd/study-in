import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroCourse from "../components/course/HeroCourse"
import Progress from "../components/course/Progress"
import ListCourse from "../components/course/ListCourse"
import Sertif from "../components/modal/Sertif"
import { useState } from "react";

export default function Course({ course }) {
  const [courseCompleted, setCourseCompleted] = useState(false);
  const sertifHandler = ()=> setCourseCompleted(!courseCompleted)
  console.log(course);
  return (
    <div className="bg-background text-on-background">
      <Navbar isLogin={true}/>
      <HeroCourse id={course.id} title={course.title} desciption={course.description} taken={course.taken}/>  
      <Progress progress={course.progress} handler={sertifHandler}/>
      <ListCourse materials={course.materials} courseId={course.id}/>
      <Footer/>
      {courseCompleted && <Sertif handler={sertifHandler}/>}
    </div>
  )
}