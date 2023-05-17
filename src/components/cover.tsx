export default function Cover() {
    return (
        <div className="relative w-full h-100">
            <img className="absolute z-11 w-full  h-full" src="/images/coverbg.jpg" alt=""/>
            <div className="flex absolute z-10 max-w-full h-full p-10 bg-white bg-opacity-70 text-purple-800 flex-row space-between">
                <div className="flex justify-center w-full sm:w-1/2 flex-col items-center">
                    <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-full flex-row space-between font-principal m-20" data-aos="fade-right">
                        Wilembergson Alfredo
                    </h1>
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-principal" data-aos="fade-right">
                        Desenvolvedor web
                    </h1>
                    {/*<button className="text-center mt-20 text-2xl sm:text-2xl xl:text-3xl text-white p-5 cursor-pointer bg-purple-800 hover:bg-purple-500 duration-700 rounded-full font-principal">
                        Baixe meu curriculo
                    </button>*/}
                </div>
                <img className="object-contain hidden sm:block z-11 flex w-1/2" src="/images/cover1.png" alt="" data-aos="fade-left"/>
            </div>
        </div>
    )
}