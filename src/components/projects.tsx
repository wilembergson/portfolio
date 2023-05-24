import BackgroundImage from "./background-image";
import ProjectItem from "./project-item";
import MainTitle from "./main-title";
import Tag from "./tag";
import Content from "./content";
import ContentLink from "./content-link";

export default function Projects() {
    return (
        <div className='flex relative w-full h-full flex-col items-center'>
            <BackgroundImage path="/images/bg-tech.png" />
            <div className="flex relative flex-col z-10 items-center w-full h-auto pb-16 bg-opacity-20 bg-white">
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
                    <ProjectItem url='/greenmarket' image='/greenmarket.png' title='Greenmarket' description='Loja de produtos naturais' inProgress='Em desenvolvimento'>
                        <Tag title="NextJS" />
                        <Tag title="Tailwind" />
                        <Tag title="NestJS" />
                        <Tag title="MongoDB" />
                        <Tag title="Prisma" />
                        <Tag title="Docker" />
                    </ProjectItem>
                </div>
                <div className="flex w-2/3 mt-10 justify-center">
                    <Content color="text-white">
                        Atualmente, estou refatorando meus projetos disponíveis no Github utilizando principios 
                        SOLID, orientação a objejetos e aplicando testes automatizados, além de também está utilizando
                        frameworks mais modernos. Click <ContentLink href="https://github.com/wilembergson">aqui </ContentLink>
                         caso queira conferir.
                    </Content>
                </div>
            </div>
        </div>
    )
}