import BackgroundImage from "./background-image";
import Content from "./content";
import Icon from "./icon";
import MainTitle from "./main-title";

export default function LearningSection() {
    return (
        <section className="flex relative w-full h-full flex-col items-center">
            <BackgroundImage path="/images/bg-binary.png" />
            <div className="flex flex-col z-10 w-full h-auto items-center pb-12 bg-opacity-60  bg-purple-100">
                <MainTitle textColor="text-purple-900">O que estou estudando no momento</MainTitle>
                <section className="flex justify-center items-center pl-0 sm:pl-20 mb-20 w-2/3 flex-col sm:flex-row">
                    <Content color="text-black">
                        Atualmente, para aprimorar meus conhecimentos no frontend, estou estudado
                        NextJS e TailwindCSS, seguinto padrões de mercado e desenvolvendo aplicações
                        modernas. Este próprio site, por exemplo, foi desenvolvido com estas tecnologias.
                    </Content>
                    <div className="flex flex-col items-center pb-16 w-2/3" data-aos="fade-right">
                        <img className="w-56" src="/images/nextjs.svg" />
                        <img className="w-64" src="/images/tailwind.svg" />
                    </div>
                </section>
                <section className="flex justify-center items-center pl-0 sm:pl-20 mb-20 w-2/3 flex-col sm:flex-row">
                    <div className="flex flex-col items-center pb-16 w-2/3" data-aos="fade-right">
                        <img className="w-56" src="/images/nestjs.svg" />
                    </div>
                    <Content color="text-black">
                        Para o backend, estou estudando NestJS, que é um framework NodeJS onde são
                        fornecidos padrões e ferramentas que agilizam o processo de desenvolvimento de
                        software, como usar o typescript por padrão, por exemplo. Estou refatorando alguns
                        projetos utilizando esta ferramanta.
                    </Content>
                </section>

                <section className="flex justify-center items-center pl-0 sm:pl-20 w-full flex-col sm:flex-row">
                    <Content color="text-black">
                        Também estou buscando desenvolver minhas aplicações backend utilizando a abordagem 
                        Domain-Driven Design (DDD), que tem como objetivo principal o desenvolvimento 
                        de software que coloca o domínio de negócio no centro do processo de design, visando 
                        criar sistemas mais aderentes às necessidades do negócio e facilitar a evolução e 
                        manutenção do software ao longo do tempo.
                    </Content>
                </section>
            </div>
        </section>
    )
}