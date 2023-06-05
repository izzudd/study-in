import { Link } from "@inertiajs/react";

const Card = ({ course }) => {
    return (
        <Link 
            href={`/course/${course.id}`}
            className="h-[444px] w-[240px] bg-background rounded-3xl shadow-xl relative flex flex-col items-start py-[26px] px-[28px] gap-5 hover:shadow-lg hover:shadow-prim-container duration-300 active:shadow-secondary-container"> 
            <img src="/assets/images/diamond.png" alt="" className="absolute top-0 left-0 z-0" />
            <img src="/assets/images/language-logo/cpp.png" alt="" className="z-10 relative self-center" />
            <p className="w-full text-2xl font-bold self-center">{ course.title }</p>
            <div className="account flex items-center gap-4">
                <i className="fa-solid fa-user"></i>
                <p>{course.students} siswa</p>
            </div>
            <div className="topic flex items-center gap-4">
                <i className="fa-regular fa-folder"></i>
                <p>{course.material} materi</p>
            </div>
            {course.progress != null && (
            <div className="progress w-full grid grid-cols-2 items-center gap-10">
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: `${course.progress}%`}}></div>
                </div>
                <p className="w-fit justify-self-end">{course.progress}%</p>
            </div>
            )}
        </Link>
    );
}
 
export default Card;