export default function Skills() {
    return (
        <div className='flex w-full p-16 flex-col items-center bg-purple-100'>
            <h1 className='font-cover text-3xl sm:text-5xl text-center mb-10 text-purple-900 justify-center'>Tecnologias que domino</h1>
            <div className="flex flex-wrap w-full justify-center">
                <img className="object-contain flex w-16 sm:w-20 m-4" src="/typescript.svg" alt="" />
                <img className="object-contain flex w-32 sm:w-64 m-2" src="/reactjs2.svg" alt="" />
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/nodejs.svg" alt="" />
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/postgres.svg" alt="" />
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/mongodb.svg" alt="" />
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/prisma.svg" alt="" />
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/git.svg" alt="" />
                <img className="object-contain flex w-28 sm:w-40 m-5" src="/jest.svg" alt="" />
                <img className="object-contain flex w-20 sm:w-28 m-5" src="/styled-components.svg" alt="" />
            </div>
        </div>
    )
}