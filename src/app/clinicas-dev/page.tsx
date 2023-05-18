'use client'
import Header from "@/components/Header";
import Video from "@/components/Video";

export default function ClinicasDev() {
    return (
        <main className="flex font-principal min-h-screen h-full flex-col items-center">
            <Header />
            <section className="flex relative ">
                <img className="absolute z-11 w-full h-full" src="/images/bg-projects.jpg" alt="" />
                <div className="flex w-full flex-col items-center z-10 h-full bg-opacity-30 bg-black">
                    <h1 className="text-white z-12 max-w-max text-3xl sm:text-5xl mt-14 mb-14" data-aos="fade-down">
                        Clinicas Dev
                    </h1>
                    <Video videoId="-EgEtomnzrc">
                        Sistema de marcação de consultas médicas onde você deve criar um usuário
                        e fazer login para ter acesso às funcionalidades. Depois de fazer login,
                        é preciso cadastrar um endereço. Agora você pode marcar suas consultas
                        de acordo com a disponibilidade de cada especialidade médica por dia.
                        Acompanhe o vídeo de instruções.
                    </Video>
                    <h2 className="text-purple-900 bg-white font-bold p-2 z-12 w-2/3 text-2xl sm:text-4xl mt-20 mb-5" data-aos="fade-left">
                        Como execultar
                    </h2>
                    <h2 className="text-white  p-2 z-12 w-2/3 text-2xl sm:text-4xl" data-aos="fade-left">
                        - Backend
                    </h2>
                    
                </div>
            </section>
        </main>
    )
}