'use client'
import Header from "@/components/Header";
import Video from "@/components/Video";

export default function ClinicasDev() {
    return (
        <main className="flex font-principal min-h-screen h-full flex-col items-center">
            <Header/>
            <h1 className="text-3xl sm:text-5xl mb-10" data-aos="fade-down">
                Clinicas Dev
            </h1>
            <Video videoId="-EgEtomnzrc">
                Sistema de marcação de consultas médicas onde você deve criar um usuário
                e fazer login para ter acesso às funcionalidades. Depois de fazer login, 
                é preciso cadastrar um endereço. Agora você pode marcar suas consultas
                de acordo com a disponibilidade de cada especialidade médica por dia. 
                Acompanhe o vídeo de instruções.
            </Video>
        </main>
    )
}