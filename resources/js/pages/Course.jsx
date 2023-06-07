import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import HeroCourse from "../components/course/HeroCourse"
import Progress from "../components/course/Progress"
import ListCourse from "../components/course/ListCourse"
import Sertif from "../components/modal/Sertif"
import { useState } from "react";

export default function Course({ user, course, loggedin }) {
  const [courseCompleted, setCourseCompleted] = useState(false);
  const sertifHandler = ()=> setCourseCompleted(!courseCompleted)
  console.log(course);
  return (
    <div className="bg-background text-on-background">
      <Navbar isLogin={loggedin}/>
      <HeroCourse id={course.id} title={course.title} description={course.description} taken={course.taken} image={course.image}/>
      <Progress progress={course.progress} handler={sertifHandler}/>
      <ListCourse title={course.title} description={course.description} materials={course.materials} courseId={course.id}/>
      <Footer/>
      {courseCompleted && <Sertif handler={sertifHandler} user={user} course={course}/>}
    </div>
  )
}