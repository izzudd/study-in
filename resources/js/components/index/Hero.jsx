const Hero = () => {
    return (
        <div className="py-3 bg-background relative h-[90vh] text-on-background">
            <img src="/assets/images/hero-wave.svg" alt="" className="absolute top-0 left-0 w-screen h-[90vh] object-cover" />
            <main className="hero-content relative z-10 flex items-center justify-center container mx-auto px-12 gap-14 h-3/4">
                <img src="/assets/images/girl-laptop.png" alt=""/>
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-6xl">Learn to Code</h1>
                    <h3 className="font-bold text-2xl">With the world's largest web developer site.</h3>
                    <div className="search rounded-3xl bg-secondary text-on-primary flex gap-3 items-stretch justify-stretch overflow-hidden">
                        <input type="text" name="" id="" className="bg-secondary outline-none w-[90%] px-3 py-2" />
                        <button type="submit" className="bg-on-secondary h-full w-[20%] block p-2"><i className="fa-solid fa-magnifying-glass text-on-background"></i></button>
                    </div>
                </div>
            </main>
        </div>
    );
}
 
export default Hero;