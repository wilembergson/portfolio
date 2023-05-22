'use client'
import Icon from "@/components/icon";
import Video from "@/components/Video";
import Content from "@/components/content";
import MainTitle from "@/components/main-title";
import TopicTitle from "@/components/TopicTitle";
import ContentLink from "@/components/content-link";
import ProjectPage from "@/components/project-page";
import IconsContainer from "@/components/icons-container";

export default function ClinicasDev() {
    return (
        <ProjectPage>
            <IconsContainer>
                <Icon width="10" smWidth="10" margin="2" imagePath="typescript.svg" />
                <Icon width="14" smWidth="10" margin="2" imagePath="reactjs-icon.svg" />
                <Icon width="10" smWidth="10" margin="2" imagePath="nodejs-icon.svg" />
                <Icon width="16" smWidth="10" margin="2" imagePath="postgres-icon.svg" />
                <Icon width="14" smWidth="10" margin="2" imagePath="prisma-icon.svg" />
                <Icon width="14" smWidth="10" margin="2" imagePath="docker-icon.svg" />
                <Icon width="10" smWidth="10" margin="2" imagePath="jest-icon.svg" />
            </IconsContainer>
            <MainTitle textColor="text-white" textBlack={true}>Clínicas Dev</MainTitle>
            <Video videoId="-EgEtomnzrc">
                Sistema de marcação de consultas médicas onde você deve criar um usuário
                e fazer login para ter acesso às funcionalidades. Depois de fazer login,
                é preciso cadastrar um endereço. Agora você pode marcar suas consultas
                de acordo com a disponibilidade de cada especialidade médica por dia.
                Acompanhe o vídeo de instruções.
            </Video>
            <TopicTitle>Como execultar</TopicTitle>
            <Content>
                Primeiramente, você deve ter o <span className="font-bold">Node</span> e
                o <span className="font-bold">Docker</span> devidamente instalados em seu computador.
                Para isso, acesse os links abaixo e faça as instalações corretamente, caso ainda não
                tenha instalado.
            </Content>
            <Content>
                <span className="font-bold">Node: </span>
                <ContentLink href='https://nodejs.dev/pt/learn/how-to-install-nodejs/'>
                    https://nodejs.dev/pt/learn/how-to-install-nodejs
                </ContentLink>
                <br />
                <span className="font-bold">Docker: </span>
                <ContentLink href='https://docs.docker.com/engine/install/'>
                    https://docs.docker.com/engine/install
                </ContentLink>
            </Content>
            <TopicTitle>Backend</TopicTitle>
            <Content>
                <ul className="list-disc space-y-5 pl-6">
                    <li>
                        Acesse o
                        <ContentLink href="https://github.com/wilembergson/clinicas-dev-backend"> repositório </ContentLink>
                        no Github e clone o projeto na sua máquina.
                    </li>
                    <li>
                        Abra o terminal na pasta do projeto e execulte o comando
                        <span className="font-bold italic"> npm install</span> para baixar as dependências do projeto.
                    </li>
                    <li>
                        Ainda na pasta raís do projeto, crie um arquivo com o nome <span className="font-bold">.env </span>
                        e preencha de acordo com o
                        <ContentLink href="https://github.com/wilembergson/clinicas-dev-backend/blob/main/.env.exemple"> exemplo </ContentLink>
                        do repositório.
                    </li>
                    <li>
                        Execute o comando <span className="font-bold italic"> npm run up</span> para subir o container docker
                        com a aplicação NodeJS e o banco de dados Postgres.
                    </li>
                    <li>
                        Para realizar os testes, execute <span className="font-bold italic"> npm run test:cov</span>
                    </li>
                    <li>
                        Para acessar a aplicação localmente, você deve se atentar para qual porta você configurou no
                        arquivo <span className="font-bold">.env</span>. Se por exemplo você configurou <span className="font-bold">PORT=5000 </span>
                        então você de acessar o endereço <span className="font-bold">http://localhost:5000 </span>
                        para ter acesso à aplicação.
                    </li>
                    <li>
                        Para encerrar a aplicação execulte o comando <span className="font-bold italic"> npm run down</span>
                    </li>
                </ul>
            </Content>
            <Content>
                Para conferir os detalhes de funcionamento das rotas da aplicação, acesse
                o <ContentLink href="https://github.com/wilembergson/clinicas-dev-backend/blob/main/readme.md">
                    readme
                </ContentLink> do projeto.
            </Content>
            <TopicTitle>Frontend</TopicTitle>
            <Content>
                <ul className="list-disc space-y-5 pl-6">
                    <li>
                        Acesse o
                        <ContentLink href="https://github.com/wilembergson/clinicas-dev"> repositório </ContentLink>
                        no Github e clone o projeto na sua máquina.
                    </li>
                    <li>
                        Abra o terminal na pasta do projeto e execulte o comando
                        <span className="font-bold italic"> npm install</span> para baixar as dependências do projeto.
                    </li>
                    <li>
                        Na pasta raís do projeto, crie um arquivo com o nome <span className="font-bold">.env </span>
                        e preencha de acordo com o
                        <ContentLink href="https://github.com/wilembergson/clinicas-dev/blob/main/.env-exemple"> exemplo </ContentLink>
                        do repositório. O dado a ser peenchido dele ser a url local de acesso do backend, no caso do exemplo acima,
                        seria <span className="font-bold">http://localhost:5000 </span>
                    </li>
                    <li>
                        Para rodar o projeto, execute o comando <span className="font-bold italic">npm start </span>, e
                        acesse a url local <span className="font-bold">http://localhost:3000 </span> pelo browser para ver
                        o projeto funcionando.
                    </li>
                </ul>
            </Content>
        </ProjectPage>
    )
}