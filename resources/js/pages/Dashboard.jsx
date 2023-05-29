import { useState } from "react";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import DashCard from "../components/dashboard/DashCard";
import Profile from "../components/dashboard/Profile";
import ChangeProfile from "../components/modal/ChangeProfile";
import ChangePassword from "../components/modal/ChangePassword";


const Dashboard = ({user, courses}) => {
    console.log(user, courses);
    const[profileChanged,setProfileChanged] = useState(false);
    const[passwordChanged,setPasswordChanged] = useState(false);
    const profileHandler = ()=>setProfileChanged(!profileChanged)
    const passHandler = ()=>setPasswordChanged(!passwordChanged)

    return (
        <div className="bg-background flex flex-col">
            <Navbar isLogin={true}/>
            <main className="py-16 flex flex-col gap-6 self-center text-on-background">
                <Profile user={user} profile={profileHandler} pass={passHandler}/>
                <p className="text-xl border-b-2 pb-5 border-prim-container">Course overview</p>
                <div className="card-container flex flex-col gap-10">
                    {courses.map(course => <DashCard key={course.id} course={course}/>)}
                </div>
            </main>
            <Footer/>
            {profileChanged && <ChangeProfile handler={profileHandler}/>}
            {passwordChanged && <ChangePassword handler={passHandler}/>}
        </div>
    );
}
 
export default Dashboard;