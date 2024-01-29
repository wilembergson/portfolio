'use client'
import TopicTitle from "@/components/TopicTitle";
import Video from "@/components/Video";
import Content from "@/components/content";
import ContentLink from "@/components/content-link";
import Icon from "@/components/icon";
import IconsContainer from "@/components/icons-container";
import MainTitle from "@/components/main-title";
import ProjectPage from "@/components/project-page";

export default function Greenmarket() {
    return (
        <ProjectPage>
            <IconsContainer>
                <Icon width="10" imagePath="typescript.svg" />
                <Icon width="14" imagePath="next-js-icon.svg" />
                <Icon width="14" imagePath="tailwind-icon.svg" />
                <Icon width="10" imagePath="nestjs.svg" />
                <Icon width="16" imagePath="postgres-icon.svg" />
                <Icon width="14" imagePath="prisma-icon.svg" />
                <Icon width="14" imagePath="docker-icon.svg" />
            </IconsContainer>
            <MainTitle textColor="text-white" textBlack={true}>Parking - controle de estacionamento</MainTitle>
            <Video videoId="-uBox0MQ4aA">
            Sistema para controle de fluxo de veículos em estacionamento. É possível obter quais vagas
                estão ocupadas ou disponíveis, cadastrar novos clientes, registrar quais veículos entraram
                ou sairam, conferir quando o cliente irá pagar por hora, além de obter relatórios sobre faturamentos.
            </Video>
            <TopicTitle>Pré-requisitos</TopicTitle>
            <Content color="text-white"> 
                Primeiramente, você deve ter o <span className="font-bold">Node</span> e
                o <span className="font-bold">Docker</span> devidamente instalados em seu computador.
                Para isso, acesse os links abaixo e faça as instalações corretamente, caso ainda não
                tenha instalado.<br/>
                O passo a passo de como executar localmente o projeto está detalhado no readme dos repositórios.
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
        </ProjectPage>
    )
}