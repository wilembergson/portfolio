import BackgroundImage from "./background-image";
import ProjectItem from "./project-item";
import MainTitle from "./main-title";
import Tag from "./tag";

export default function Projects() {
    return (
        <div className='flex relative w-full h-full flex-col items-center'>
            <BackgroundImage path="/images/bg-tech.png"/>
            <div className="z-10 w-full h-auto pb-16 bg-opacity-20 bg-white">
                <MainTitle textColor="text-white">Projetos</MainTitle>
                <div className="flex flex-wrap w-full justify-center" data-aos="fade-down">
                    <ProjectItem url='/clinicas-dev' image='/clinicas-dev.png' title='Clínicas Dev' description='Sistema para marcação de consultas médicas'>
                        <Tag title="ReactJS" />
                        <Tag title="NodeJS" />
                        <Tag title="Postgres" />
                        <Tag title="Prisma" />
                        <Tag title="Jest" />
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