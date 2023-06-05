import { useState } from "react";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import DashCard from "../components/dashboard/DashCard";
import Profile from "../components/dashboard/Profile";
import ChangeProfile from "../components/modal/ChangeProfile";
import ChangePassword from "../components/modal/ChangePassword";


const Dashboard = ({user, courses,loggedin}) => {
    const[profileChanged,setProfileChanged] = useState(false);
    const[passwordChanged,setPasswordChanged] = useState(false);
    const[filteredCourse, setFilteredCourse] = useState(courses.data);
    const profileHandler = ()=>setProfileChanged(!profileChanged)
    const passHandler = ()=>setPasswordChanged(!passwordChanged)

    const filterCourse = (title)=> {
        const filter = courses.data.filter(course => course.title == title)
        setFilteredCourse(title == ''? courses.data : filter);
    }

    return (
        <div className="bg-background flex flex-col">
            <Navbar isLogin={loggedin}/>
            <main className="py-16 flex flex-col gap-6 self-center text-on-background">
                <Profile user={user} profile={profileHandler} pass={passHandler}/>
                <p className="text-2xl font-bold border-b-2 pb-5 border-prim-container w-[40%]">Course overview</p>
                <div className="search-bar px-4 py-2 flex gap-3 border rounded-3xl h-[40px] w-[200px] self-end">
                    <input type="text" name="" id="" className=" bg-background border-primary outline-none w-[80%]" placeholder="Search" onChange={e=> filterCourse(e.target.value)} />
                    <button><i className="fa-solid fa-magnifying-glass text-on-background"></i></button>
                </div>
                <div className="card-container flex flex-col gap-10">
                    {filteredCourse.map(course => <DashCard key={course.id} course={course}/>)}
                </div>
            </main>
            <Footer/>
            {profileChanged && <ChangeProfile handler={profileHandler} userData={user}/>}
            {passwordChanged && <ChangePassword handler={passHandler}/>}
        </div>
    );
}
 
export default Dashboard;