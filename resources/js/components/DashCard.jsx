import { useState } from "react";
import { useForm, Link } from "@inertiajs/react";

const DashCard = ({course}) => {
    const [change,setChange] = useState(false);

    const { post } = useForm({
        id: course.id
    });

    const removeCourse = () => post(`/course/${id}`);

    return (
        <Link href={`/course/${course.id}`} className="flex gap-10 w-[816px] shadow-lg shadow-on-secondary relative items-center rounded-3xl ">
            <i onClick={()=>setChange(!change)} className="fa-solid fa-ellipsis-vertical absolute top-5 right-5 hover:cursor-pointer hover:border hover:border-primary w-6 h-6 text-center hover:rounded-[50%]"></i>
            {change && (
                <div className="bg-on-secondary rounded-xl p-2 absolute top-11 right-10">
                    <p>Star this course</p>
                    <hr className="text-primary"/>
                    <p>Remove this course</p>
                </div>
            )}
            <div className="w-[240px] bg-background rounded-3xl relative py-[26px] px-[28px]"> 
                <img src="/assets/images/diamond.png" alt="" className="absolute top-0 left-0 z-0" />
                <img src="/assets/images/Cplus.png" alt="" className="z-10 relative self-center" />
            </div>
            <div className="word flex-1 pr-8">
                <p className="mt- text-3xl font-bold self-center">{course.title}</p>
                <div className="account flex items-center gap-4">
                    <i className="fa-solid fa-user"></i>
                    <p>{course.students} siswa</p>
                </div>
                <div className="topic flex items-center gap-4">
                    <i className="fa-regular fa-folder"></i>
                    <p>{course.material} materi</p>
                </div>
                <div className="progress w-full grid grid-cols-2 items-center gap-10">
                    <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: `${course.progress}%`}}></div>
                    </div>
                    <p className="w-fit justify-self-end">{course.progress}%</p>
                </div>
            </div>
        </Link>
    );
}
 
export default DashCard;