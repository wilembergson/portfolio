export default function Cover() {
    return (
        <div className="relative bg-red-400 w-full h-100">
            <img className="absolute z-11 w-full  h-full" src="/coverbg.jpg" alt="" />
            <div className="flex absolute z-10 max-w-full h-full p-10 bg-white bg-opacity-70 text-purple-800 flex-row space-between">
                <div className="flex justify-center w-full sm:w-1/2 flex-col items-center">
                    <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-full flex-row space-between font-cover m-20">
                        Wilembergson Alfredo
                    </h1>
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cover">
                        Explore o meu portfólio!
                    </h1>
                </div>
                <img className="object-contain hidden sm:block z-11 flex w-1/2" src="/cover1.png" alt="" />
            </div>
        </div>
    )
}