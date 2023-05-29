import { Link, router } from "@inertiajs/react"
import { useState } from "react"

export default function course({ isLogin }) {

  const [isClicked,setIsClicked] = useState(false)
  return (
    <div className="h-[72px] py-3 px-[100px] bg-on-primary flex items-center justify-between relative">
      {isClicked && <button onClick={() => router.post('logout')} className="absolute top-20 right-20 btn z-40">Logout <i class="fa-solid fa-arrow-right-from-bracket"></i></button>}
      <Link href="/"><img src="/assets/images/Logo.png" alt="" /></Link>
      {isLogin && 
      (<div className="nav text-on-background flex gap-6 items-center font-semibold">
          <Link href="/"><p>Home</p></Link>
          <Link href="/dashboard"><p>My Course</p></Link>
          <div className="search-nav px-4 py-2 flex gap-3 border rounded-3xl h-[40px] w-[200px]">
            <input type="text" name="" id="" className="bg-on-primary border-primary outline-none w-[80%]" placeholder="Search" />
            <button><i className="fa-solid fa-magnifying-glass text-on-background"></i></button>
          </div>
          <i onClick={()=>setIsClicked(!isClicked)} className="fa-solid fa-circle-user text-3xl cursor-pointer"></i>
      </div>
      )}
      {!isLogin && <Link className="btn w-36 font-bold text-lg text-center hover:btn-hover" href="/login">Login</Link>}
    </div>
  )
}