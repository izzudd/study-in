import { Link } from "@inertiajs/react";
import MaterialList from "../components/material-list/MaterialList";
import Beardcrumbs from "../components/Beardcrumbs";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Material({ material }) {
  let materialList = [
    ['C++ Function', true],
    ['C++ Function Parameters', false],
    ['C++ Function Overloading', true],
    ['C++ Function Recursion', false]
  ].map(material => ({title: material[0], done: material[1]}));

  let beardcrumb = ['Home', 'C++', 'C++ Function'];

  return (
    <div>
      <NavBar login={true} />
      <header className="bg-on-secondary py-4 mb-8">
        <div className="container mx-auto">
          <Beardcrumbs items={beardcrumb} />
          <div className="flex items-center max-h-min">
            <img className="h-full" src="/assets/images/language-logo/cpp.png" alt="lang logo" />
            <div>
              <div className="text-5xl font-bold mb-4">C++</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse, hic recusandae consectetur id quidem laboriosam vel, voluptates ipsum dolores et animi, itaque officia sapiente dicta temporibus? Porro, ea ipsam.</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-12 gap-4 mb-8">
        <div className="col-span-3">
          <aside className="p-4 bg-on-secondary rounded-xl">
            <div className="text-2xl font-bold mb-4">Course</div>
            <MaterialList materials={materialList} />
          </aside>
        </div>
        <article className="col-span-9">
          <div className="prose !prose-invert max-w-none bg-on-secondary rounded-xl p-4 mb-4">
            <h1>Create a Function</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
            <h2>This is Section One</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
          </div>
          <nav className="bg-on-secondary rounded-xl p-4 flex justify-between">
            <Link className="btn-primary"><i className="fa-solid fa-arrow-left mr-2"></i> HOME</Link>
            <Link className="btn-primary">NEXT <i className="fa-solid fa-arrow-right ml-2"></i></Link>
          </nav>
        </article>
      </div>
      <Footer />
    </div>
  )
}