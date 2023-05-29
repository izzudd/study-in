import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import DashCard from "../components/DashCard";


const Dashboard = ({user, courses}) => {
    console.log(user, courses);
    return (
        <div className="bg-background flex flex-col">
            <Navbar isLogin={true}/>
            <main className="py-16 flex flex-col gap-6 self-center text-on-background">
                <h1 className="font-bold text-4xl">Welcome back {user.full_name}!</h1>
                <p className="text-xl border-b-2 w-[30%] pb-5 border-prim-container">Course overview</p>
                <div className="card-container flex flex-col gap-10">
                    {courses.map(course => <DashCard key={course.id} course={course}/>)}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Dashboard;