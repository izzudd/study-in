const Progress = ({ progress, handler }) => {

    return (
        <div className="bg-background text-on-background py-10 px-24 gap-6 flex flex-col">
            <h1 className="text-4xl font-bold">Progres & Sertifikat</h1>
            {progress < 100 && (
            <p className="w-[40%]">Sepertinya kamu belum mulai menyelesaikan topik pada learning path ini,
                ayo mulai mengerjakan dan pantau progres kamu disini.
            </p>)}
            {progress === 100 && (
            <p className="w-[40%]">Selamat! kamu telah menyelesaikan course ini. Sebagai bukti pencapaian, kamu bisa download sertifikat dengan menekan tombol di bawah ini.
            </p>)}
            {progress != null && (
            <div className="progress w-1/2 grid grid-cols-2 items-center gap-10">
                <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 w-[190%]">
                    <div className="bg-primary h-2.5 rounded-full" style={{width: `${progress}%`}}></div>
                </div>
                <p className="w-fit justify-self-end">{progress}%</p>
            </div>
            )}
            {progress < 100 && <button className="btn self-start opacity-40 cursor-pointer " disabled>Download Sertifikat</button>}
            {progress === 100 && <button className="btn self-start"onClick={handler}>Download Sertifikat</button>}
           
        </div>
    );
}
 
export default Progress;