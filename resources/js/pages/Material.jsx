import { Link } from "@inertiajs/react";

export default function Material({ material }) {
  let materialList = [
    ['C++ Function', true],
    ['C++ Function Parameters', false],
    ['C++ Function Overloading', true],
    ['C++ Function Recursion', false]
  ];

  let beardcrumb = ['Home', 'C++', 'C++ Function'];

  return (
    <div>
      <header className="bg-on-secondary py-4 mb-8">
        <div className="container mx-auto">
          <ul className="beardcrumbs">
            {beardcrumb.map(item => 
              <li>{ item }</li>
            )}
          </ul>
          <div className="flex items-center max-h-min">
            <img className="h-full" src="/assets/images/language-logo/cpp.png" alt="lang logo" />
            <div>
              <div className="text-5xl font-bold mb-4">C++</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam esse, hic recusandae consectetur id quidem laboriosam vel, voluptates ipsum dolores et animi, itaque officia sapiente dicta temporibus? Porro, ea ipsam.</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <aside className="p-4 bg-on-secondary rounded-xl">
            <div className="text-2xl font-bold mb-4">Course</div>
            <ol>
              {materialList.map(material =>
                <li className="mb-2 flex gap-4">
                  <span className="w-5 h-5 p-[2px] border border-primary inline-block rounded-full shrink-0">
                    {material[1] && <div className="w-full h-full bg-primary rounded-full"></div>}
                  </span>{material[0]}
                </li>
              )}
            </ol>
          </aside>
        </div>
        <article className="col-span-9">
          <div className="prose !prose-invert max-w-none bg-on-secondary rounded-xl p-4 mb-8">
            <h1>Create a Function</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
            <h2>This is Section One</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt officia sed natus ipsam nam, soluta dolorem atque quam nulla eveniet illum dicta. Excepturi sit soluta dolor officiis nulla amet quo!</p>
          </div>
          <nav className="bg-on-secondary rounded-xl p-4 flex justify-between">
            <Link className="btn-primary">HOME</Link>
            <Link className="btn-primary">NEXT</Link>
          </nav>
        </article>
      </div>
    </div>
  )
}