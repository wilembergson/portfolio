'use client'
import Header from "@/components/Header";
import TopicTitle from "@/components/TopicTitle";
import Video from "@/components/Video";
import BackgroundImage from "@/components/background-image";
import MainTitle from "@/components/main-title";
import Link from "next/link";

export default function ClinicasDev() {
    return (
        <main className="flex font-principal min-h-screen h-full flex-col items-center">
            <Header />
            <section className="flex relative ">
                <BackgroundImage />
                <div className="flex w-full flex-col items-center z-10 h-full bg-opacity-30 bg-black">
                    <MainTitle textColor="text-white">Clínicas Dev</MainTitle>
                    <Video videoId="-EgEtomnzrc">
                        Sistema de marcação de consultas médicas onde você deve criar um usuário
                        e fazer login para ter acesso às funcionalidades. Depois de fazer login,
                        é preciso cadastrar um endereço. Agora você pode marcar suas consultas
                        de acordo com a disponibilidade de cada especialidade médica por dia.
                        Acompanhe o vídeo de instruções.
                    </Video>
                    <TopicTitle>Como execultar</TopicTitle>
                    <h3 className="text-white text-justify w-2/3 mb-10 mt-0 sm:mt-0 text-1xl md:text-xl xl:text-2xl" data-aos="fade-left">
                        Primeiramente, você deve ter o <span className="font-bold">Node</span> e
                        o <span className="font-bold">Docker</span> devidamente instalados em seu computador.
                        Para isso, siga os links abaixo para fazer as instalações corretamente.
                    </h3>
                    <h3 className="text-white text-justify w-2/3 mb-10 mt-0 sm:mt-0 text-1xl md:text-xl xl:text-2xl" data-aos="fade-left">
                        <span className="font-bold">Node: </span>
                        <Link href='https://nodejs.dev/pt/learn/how-to-install-nodejs/' target="_blank">
                            https://nodejs.dev/pt/learn/how-to-install-nodejs
                        </Link>
                        <br />
                        <span className="font-bold">Docker: </span>
                        <Link href='https://docs.docker.com/engine/install/' target="_blank">
                            https://docs.docker.com/engine/install
                        </Link>
                    </h3>
                    <TopicTitle>Backend</TopicTitle>

                </div>
            </section>
        </main>
    )
}