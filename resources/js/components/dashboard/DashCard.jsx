import { useState } from "react";
import { useForm, Link } from "@inertiajs/react";

const DashCard = ({course}) => {
    const [change,setChange] = useState(false);

    const { post } = useForm({
        id: course.id
    });

    const removeCourse = () => post(`/course/${course.id}`);

    return (
        <div className="w-[816px] shadow-lg shadow-on-secondary relative rounded-3xl">
            <button className="z-50 btn flex gap-3 items-center absolute top-6 right-10" onClick={removeCourse}>
                <i class="fas fa-trash"></i>
            </button>
            <Link href={`/course/${course.id}`} className="flex gap-10 items-center">
                <div className="w-[240px] bg-background rounded-3xl relative py-[26px] px-[28px]"> 
                    <img src="/assets/images/diamond.png" alt="" className="absolute top-0 left-0 z-0" />
                    <img src="/assets/images/language-logo/cpp.png" alt="" className="z-10 relative self-center" />
                </div>
                <div className="word flex-1 flex flex-col items-start justify-center gap-2 pr-8">
                    <p className="text-3xl font-bold">{course.title}</p>
                    <div className="account flex items-center gap-4">
                        <i className="fa-solid fa-user"></i>
                        <p>{course.students} siswa</p>
                    </div>
                    <div className="topic flex items-center gap-4">
                        <i className="fa-regular fa-folder"></i>
                        <p>{course.material} materi</p>
                    </div>
                    <div className="progress w-3/6 grid grid-cols-2 items-center gap-10">
                        <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                            <div className="bg-primary h-2.5 rounded-full" style={{width: `${course.progress}%`}}></div>
                        </div>
                        <p className="w-fit justify-self-end">{course.progress}%</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default DashCard;