const Progress = () => {
    return (
        <div className="bg-background text-on-background py-10 px-24 gap-6 flex flex-col">
            <h1 className="text-4xl font-bold">Progres & Sertifikat</h1>
            <p className="w-[40%]">Sepertinya kamu belum mulai menyelesaikan topik pada learning path ini,
                ayo mulai mengerjakan dan pantau progres kamu disini.</p>
            <div className="progress w-1/2 grid grid-cols-2 items-center gap-10">
                <div class=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                    <div class="bg-primary h-2.5 rounded-full" style={{width: "90%"}}></div>
                </div>
                <p className="w-fit justify-self-end">90%</p>
            </div>
            <button className="btn self-start bg-sec-container">Download Sertifikat</button>
        </div>
    );
}
 
export default Progress;