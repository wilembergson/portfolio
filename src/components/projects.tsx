import ProjectItem from "./project-item";
import Tag from "./tag";

export default function Projects() {

    return (
        <div className='flex relative w-full h-full flex-col items-center'>
            <img className="absolute z-11 w-full h-full" src="/images/bg-projects.jpg" alt="" />
            <div className="z-10 w-full h-auto pb-12 bg-opacity-30  bg-black">
                <h1 className='font-principal mt-16 text-3xl sm:text-5xl text-center mb-10 text-white justify-center'>
                    Projetos
                </h1>
                <div className="flex flex-wrap w-full justify-center"  data-aos="fade-down">
                    <ProjectItem url='/clinicas-dev' image='/clinicas-dev.png' title='Clínicas Dev' description='Sistema para marcação de consultas médicas'>
                        <Tag title="ReactJS" />
                        <Tag title="NodeJS" />
                        <Tag title="Postgres" />
                        <Tag title="Prisma" />
                        <Tag title="Docker" />
                    </ProjectItem>
                    <ProjectItem url='/libras-translate' image='/libras2.png' title='Libras translate' description='Tradutor da lingua brasileira de sinais'>
                        <Tag title="Typescript" />
                        <Tag title="ReactJS" />
                        <Tag title="Styled-Components" />
                    </ProjectItem>
                </div>
            </div>
        </div>
    )
}