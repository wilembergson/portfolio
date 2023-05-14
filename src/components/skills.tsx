export default function Skills() {
    return (
        <div className='flex w-full p-16 flex-col items-center bg-purple-100'>
            <h1 className='text-5xl mb-10 text-purple-900 justify-center'>Tecnologias que domino</h1>
            <div className="flex w-full justify-center">
                <img className="object-contain flex w-20 m-4" src="/typescript.svg" alt="" />
                <img className="object-contain flex w-64 m-2" src="/reactjs2.svg" alt="" />
                <img className="object-contain flex w-1/12 m-5" src="/nodejs.svg" alt="" />
                <img className="object-contain flex w-1/12 m-5" src="/postgres.svg" alt="" />
                <img className="object-contain flex w-1/12 m-5" src="/mongodb.svg" alt="" />
                <img className="object-contain flex w-1/12 m-5" src="/prisma.svg" alt="" />
            </div>
            <div className="flex w-full justify-center">
                <img className="object-contain flex w-1/12 m-5" src="/git.svg" alt="" />
                <img className="object-contain flex w-1/12 m-5" src="/jest.svg" alt="" />
                <img className="object-contain flex w-28 m-5" src="/styled-components.svg" alt="" />
            </div>
        </div>
    )
}