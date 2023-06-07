import { Link } from "@inertiajs/react";
import MaterialList from "../components/material-list/MaterialList";
import Beardcrumbs from "../components/Beardcrumbs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Material({ material, course, next, prev, loggedin }) {
  let beardcrumb = [
    {title: 'Home', link: '/'}, 
    {title: course.title, link: `/course/${course.id}`}, 
    material.title
  ];

  return (
    <div>
      <NavBar isLogin={loggedin} />
      <header className="bg-on-secondary py-4 mb-8">
        <div className="container mx-auto px-6">
          <Beardcrumbs items={beardcrumb} />
          <div className="flex items-center max-h-min">
            <img className="max-h-72 h-full" src={course.image} alt="lang logo" />
            <div>
              <div className="text-5xl font-bold mb-4">{course.title}</div>
              <div>{course.description}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-12 gap-4 mb-8 px-6">
        <div className="col-span-3">
          <aside className="p-4 bg-on-secondary rounded-xl">
            <div className="text-2xl font-bold mb-4">Course</div>
            <MaterialList materials={course.materials} courseId={course.id} />
          </aside>
        </div>
        <article className="col-span-9">
          <div className="prose !prose-invert max-w-none bg-on-secondary rounded-xl p-6 mb-4">
            <h1>{material.title}</h1>
            <div dangerouslySetInnerHTML={{__html: material.content}} />
          </div>
          <nav className="bg-on-secondary rounded-xl p-4 flex justify-between">
            {prev != null && <Link href={prev} className="btn-primary"><i className="fa-solid fa-arrow-left mr-2"></i> PREV</Link>}
            <div></div>
            {next != null && <Link href={next} className="btn-primary">NEXT <i className="fa-solid fa-arrow-right ml-2"></i></Link>}
          </nav>
        </article>
      </div>
      <Footer />
    </div>
  )
}