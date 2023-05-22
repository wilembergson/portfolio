'use client'
import TopicTitle from "@/components/TopicTitle";
import Video from "@/components/Video";
import Content from "@/components/content";
import ContentLink from "@/components/content-link";
import Icon from "@/components/icon";
import IconsContainer from "@/components/icons-container";
import MainTitle from "@/components/main-title";
import ProjectPage from "@/components/project-page";

export default function LibrasTranslate() {
    return (
        <ProjectPage url="https://libras-translate.vercel.app/">
            <IconsContainer>
                <Icon width="10" imagePath="typescript.svg" />
                <Icon width="14" imagePath="reactjs-icon.svg" />
                <Icon width="12" imagePath="styled-components-icon.png" />
            </IconsContainer>
            <MainTitle textColor="text-white" textBlack={true}>Libras Translate</MainTitle>
            <Video videoId="HGFZgnwrof4">
                Trata-se de um tradutor da língua brasileira de sinais, onde a
                tradução é realizada conforme a palavra vai sendo digitada. Existem
                sinais especificos para cada palavra, mas a tradução também pode ser
                realizada através de letra por letra, que é o objetivo deste projeto.
                Click <ContentLink href='https://libras-translate.vercel.app/'>
                    aqui
                </ContentLink> para acessar a aplicação.
            </Video>
            <TopicTitle>Inspiração</TopicTitle>
            <Content>
                Quando estava pagando a disciplina de Libras I na faculdade, tive
                muita dificuldade em decorar as letras do alfabeto e os números, o
                que sempre dificultou a minha participação em sala de aula. Criei
                este projeto para me auxiliar nos estudos, o que eu não esperava era
                ver colegas de turma também usando e me dando feedback super positivos
                a respeito.
            </Content>
            <TopicTitle>Como execultar</TopicTitle>
            <Content>
                Primeiramente, você deve ter o <span className="font-bold">Node</span> devidamente
                instalado em seu computador. Para isso, click <ContentLink href='https://nodejs.dev/pt/learn/how-to-install-nodejs/'>
                    aqui
                </ContentLink> e faça as instalações corretamente, caso ainda não tenha instalado.
            </Content>
            <Content>
                <ul className="list-disc space-y-5 pl-6">
                    <li>
                        Acesse o
                        <ContentLink href="https://github.com/wilembergson/libras-translate"> repositório </ContentLink>
                        no Github e clone o projeto na sua máquina.
                    </li>
                    <li>
                        Abra o terminal na pasta do projeto e execulte o comando
                        <span className="font-bold italic"> npm install</span> para baixar as dependências do projeto.
                    </li>
                    <li>
                        Para rodar o projeto, execute o comando <span className="font-bold italic">npm start </span>, e
                        acesse a url local <ContentLink href="http://localhost:3000">
                            http://localhost:3000
                        </ContentLink> pelo browser para ver
                        o projeto funcionando.
                    </li>
                </ul>
            </Content>
        </ProjectPage>
    )
}