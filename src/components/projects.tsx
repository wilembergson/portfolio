export default function Projects() {
    return (
        <div className='flex relative w-full h-100 flex-col items-center bg-purple-900'>
            <img className="absolute z-11 w-full  h-full" src="/bg-projects.jpg" alt="" />
            <div className="absolute z-10 w-full h-100 bg-white bg-opacity-10">
                <h1 className='font-principal mt-16 text-3xl sm:text-5xl text-center mb-10 text-white justify-center'>Projetos</h1>
                <div className="flex flex-wrap w-full justify-center">
                    <div className="flex relative flex-col bg-white w-96 h-80 p-5 m-5 items-center rounded-lg">
                        <img className="absolute z-11 w-11/12 " src="/bg-projects.jpg" alt="" />
                        <div className="absolute z-10">
                            <h1>Title 1</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}