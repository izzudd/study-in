const Sertif = ({user, handler, course}) => {
    console.log(course)
    return (
        <div className="fixed z-50 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
            <div className="bg-on-secondary w-[50%] z-10 flex flex-col gap-6 items-end rounded-3xl p-6 text-on-secondary-container relative">
                <p className="absolute top-[47%] right-[50%] translate-x-1/2 text-[120%] font-bold text-prim-container">{user.full_name.toUpperCase()}</p>
                <p className="absolute top-[58%] right-[50%] translate-x-1/2 text-[120%] font-bold text-prim-container">{course.title.toUpperCase()}</p>
                <i className="fa-solid fa-x cursor-pointer" onClick={handler}></i>
                <img src="/assets/images/sertif.png" className="bg-red-500 h-[50%] self-center" alt="" height={600}/>
                <button className="btn">Download Sertifikat</button>
            </div>
        </div>
    );
}
 
export default Sertif;