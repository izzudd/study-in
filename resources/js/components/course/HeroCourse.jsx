import { useForm } from "@inertiajs/react";
import Beardcrumbs from "../Beardcrumbs";

const HeroCourse = ({title, desciption, id, taken}) => {
    const { data, setData, post, reset } = useForm({
        id: id
    });

    let beardcrumb = ['Home', 'C++'];

    return (
        <div className="py-3 bg-background relative h-[90vh] text-on-background">
            <Beardcrumbs items={beardcrumb}/>
            <img src="/assets/images/hero-wave.svg" alt="" className="absolute top-0 left-0 w-screen h-[90vh] object-cover" />
            <main className="hero-content relative z-10 flex items-center justify-center container mx-auto px-12 gap-14 h-3/4">
                <img src="/assets/images/language-logo/cpp.png" alt="" className="h-[400px]"/>
                <div className="flex flex-col gap-10 pr-12 h-[400px]">
                    <button 
                        className="btn self-end flex gap-4 items-center text-on-primary"
                        onClick={() => post(`/course/${id}`)}>
                            <i className="fa-solid fa-bookmark"></i> Add{taken && 'ed'} to bookmark
                    </button>
                    <h1 className="font-bold text-5xl">{title}</h1>
                    <p className="text-2xl">{desciption}</p>
                </div>
            </main>
        </div>
    );
}
 
export default HeroCourse;