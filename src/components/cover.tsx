export default function Cover() {
    return (
        <div className="relative bg-red-400 w-full h-100">
            <img className="absolute z-11 w-full  h-full" src="/boy.webp" alt="" />
            <div className="flex absolute z-10 p-52 w-full h-full bg-black bg-opacity-70 text-white flex-col items-center">
                <h1 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-cover m-20">Wilembergson Alfredo</h1>
                <h1 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cover">Explore o meu portfólio!</h1>
            </div>
        </div>
    )
}