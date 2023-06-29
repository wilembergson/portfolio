'use client'
import TopicTitle from "@/components/TopicTitle";
import Content from "@/components/content";
import ContentLink from "@/components/content-link";
import MainTitle from "@/components/main-title";
import ProjectPage from "@/components/project-page";

export default function Greenmarket() {
    return (
        <ProjectPage>
            <MainTitle textColor="text-white" textBlack={true}>Parking - em desenvolvimento</MainTitle>
            <img className="z-11 w-2/3  h-auto" src="/images/parking.png" alt="" />
            <TopicTitle>Descrição</TopicTitle>
            <Content color="text-white">
                Sistema para controle de fluxo de veículos em estacionamento. É possível obter quais vagas
                estão ocupadas ou disponíveis, cadastrar novos clientes, registrar quais veículos entraram
                ou sairam, conferir quando o cliente irá pagar por hora, além de obter relatórios sobre faturamentos.
            </Content>
            <TopicTitle>Tecnologias utilizadas</TopicTitle>
            <Content color="text-white">
                <ul className="list-disc space-y-5 pl-6">
                    <li>
                        Nextjs
                    </li>
                    <li>
                        Tailwind
                    </li>
                    <li>
                        Nestjs
                    </li>
                    <li>
                        Postgres
                    </li>
                    <li>
                        Prisma
                    </li>
                    <li>
                        Docker
                    </li>
                </ul>
            </Content>
            <TopicTitle>Reporitórios</TopicTitle>
            <Content color="text-white">
                <ul className="list-disc space-y-5 pl-6">
                    <li>
                        Frontend: <ContentLink href='https://github.com/wilembergson/dev-parking-frontend'>
                            https://github.com/wilembergson/dev-parking-frontend
                        </ContentLink>
                    </li>
                    <li>
                        Backend:  <ContentLink href='https://github.com/wilembergson/dev-parking-backend'>
                            https://github.com/wilembergson/dev-parking-backend
                        </ContentLink>
                    </li>
                </ul>
            </Content>
        </ProjectPage>
    )
}