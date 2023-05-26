import { Link } from "@inertiajs/react"

export default function course({ isLogin }) {
  return (
    <div className="h-[72px] py-3 px-[100px] bg-on-primary flex items-center justify-between">
      <Link href="/"><img src="/assets/images/Logo.png" alt="" /></Link>
      {isLogin && 
      (<div className="nav text-on-background flex gap-6 items-center font-semibold">
          <p>Home</p>
          <p>My Course</p>
          <div className="search-nav px-4 py-2 flex gap-3 border rounded-3xl h-[40px] w-[200px]">
            <input type="text" name="" id="" className="bg-on-primary border-primary outline-none w-[80%]" placeholder="Search" />
            <button><i className="fa-solid fa-magnifying-glass text-on-background"></i></button>
          </div>
          <i className="fa-solid fa-circle-user text-3xl"></i>
      </div>
      )}
      {!isLogin && <Link className="btn w-36 font-bold text-lg text-center" href="/login">Login</Link>}
    </div>
  )
}