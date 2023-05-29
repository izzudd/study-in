const Card = () => {
    return (
        <div className="h-[444px] w-[240px] bg-background rounded-3xl shadow-xl relative flex flex-col items-start py-[26px] px-[28px] gap-5"> 
            <img src="/assets/images/diamond.png" alt="" className="absolute top-0 left-0 z-0" />
            <img src="/assets/images/language-logo/cpp.png" alt="" className="z-10 relative self-center" />
            <p className="mt- text-3xl font-bold self-center">C++</p>
            <div className="account flex items-center gap-4">
                <i className="fa-solid fa-user"></i>
                <p>14.531</p>
            </div>
            <div className="topic flex items-center gap-4">
                <i className="fa-regular fa-folder"></i>
                <p>10 Topik | 98 Materi</p>
            </div>
            <div className="progress w-full grid grid-cols-2 items-center gap-10">
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: "45%"}}></div>
                </div>
                <p className="w-fit justify-self-end">90%</p>
            </div>
        </div>
    );
}
 
export default Card;