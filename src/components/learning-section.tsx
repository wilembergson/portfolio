import BackgroundImage from "./background-image";
import Content from "./content";
import MainTitle from "./main-title";

export default function LearningSection() {
    return (
        <section className="flex relative w-full h-full flex-col items-center">
            <BackgroundImage path="/images/bg-binary.png" />
            <div className="flex flex-col z-10 w-full h-auto items-center pb-12 bg-opacity-60  bg-purple-100">
                <MainTitle textColor="text-purple-900">O que estou estudando no momento</MainTitle>
                <section className="flex justify-center items-center pl-0 sm:pl-20 my-20 w-2/3 flex-col sm:flex-row">
                    <Content color="text-black">
                        Atualmente, estou explorando as possibilidades que o Keycloak traz
                        na hora de autenticar usuários e gerenciar suas permissões de acesso,
                        uma alternativa à forma tradicional de gerenciamento via backend.
                    </Content>
                    <div className="flex flex-col items-center pb-16 w-2/3" data-aos="fade-right">
                        <img className="flex w-4/5" src="/images/svg/keycloak.svg" />
                    </div>
                </section>
                <section className="flex justify-center items-center pl-0 sm:pl-20 mb-20 w-2/3 flex-col sm:flex-row">
                    <div className="flex flex-col items-center pb-16 w-2/3" data-aos="fade-right">
                        <img className="w-96" src="/images/svg/kafka.svg" />
                    </div>
                    <Content color="text-black">
                        Com relação a mensageria, optei por focar meus estudos no kafka por se tratar de uma
                        ferramenta robusta ideal para escalar com sistemas de grande portel. Além disso, é muito
                        utilizada com a stack que trabalho no momento, com Spring boot no backend.
                    </Content>
                </section>
                <section className="flex justify-center items-center pl-0 sm:pl-20 mb-20 w-2/3 flex-col sm:flex-row">
                    <Content color="text-black">
                        Também estou sempre aprofundando meus conhecimentos em SQL, aplicado em cenários
                        de determinada complexidade onde nem sempre o ORM é suficiente para resolver o problema.
                    </Content>
                    <div className="flex flex-col items-center pb-16 pt-8 w-2/3" data-aos="fade-right">
                        <img className="w-56" src="/images/svg/sql.svg" />
                    </div>
                </section>
                <section className="flex justify-center items-center pl-0 sm:pl-20 w-full flex-col sm:flex-row">
                    <Content color="text-black">
                        Também estou buscando aplicar em meus projetos backend a abordagem
                        Domain-Driven Design (DDD), que tem como objetivo principal o desenvolvimento
                        de software que coloca o domínio de negócio no centro do processo de design, visando
                        criar sistemas mais aderentes às necessidades do negócio e facilitar a evolução e
                        manutenção do software ao longo do tempo. Sempre analizando se essa metodologia é
                        ideal para cada cenário
                    </Content>
                </section>
            </div>
        </section>
    )
}
