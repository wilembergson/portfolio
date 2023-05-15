import Tag from "./tag";

export default function Projects() {
    return (
        <div className='flex relative w-full h-100 flex-col items-center bg-purple-900'>
            <img className="absolute z-11 w-full  h-full" src="/bg-projects.jpg" alt="" />
            <div className="absolute z-10 w-full h-100 bg-white bg-opacity-10">
                <h1 className='font-principal mt-16 text-3xl sm:text-5xl text-center mb-10 text-white justify-center'>Projetos</h1>
                <div className="flex flex-wrap w-full justify-center">
                    <section className="flex absolute flex-col bg-white w-96 p-5 m-5 items-center rounded-lg">
                        <img className="z-11 w-12/12 " src="/bg-projects.jpg" alt="" />
                        <h2 className="font-principal font-black text-4xl mt-5 w-full text-purple-900">Clínicas Dev</h2>
                        <h3 className="font-principal text-2xl w-full text-grey-900 mt-3 leading-5">
                            Sistema para marcação de consultas médicas
                        </h3>
                        <div className="flex flex-wrap justify-start mt-3">
                            <Tag title="ReactJS" />
                            <Tag title="NodeJS" />
                            <Tag title="Prisma" />
                            <Tag title="Postgres" />
                        </div>

                    </section>
                </div>
            </div>

        </div>
    )
}