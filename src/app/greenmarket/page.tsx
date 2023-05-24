'use client'
import TopicTitle from "@/components/TopicTitle";
import Content from "@/components/content";
import ContentLink from "@/components/content-link";
import MainTitle from "@/components/main-title";
import ProjectPage from "@/components/project-page";

export default function Greenmarket() {
    return (
        <ProjectPage>
            <MainTitle textColor="text-white" textBlack={true}>Greenmarket - em desenvolvimento</MainTitle>
            <img className="z-11 w-2/3  h-auto" src="/images/greenmarket.png" alt="" />
            <TopicTitle>Descrição</TopicTitle>
            <Content color="text-white">
                Loja de produtos naturais onde é possível criar um usuário, fazer login, selecionar
                produtos do catálogo e realizar a compra, sempre tendo o valor total exibido na tela
                conforme os produtos selecionados. Você também poderá ver o seu histórico de compras.
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
                        MongoDB
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