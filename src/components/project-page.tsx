import { ReactNode } from "react"
import Header from "./Header"
import BackgroundImage from "./background-image"
import Footer from "./footer"

type Props = {
    url?: string,
    children: ReactNode
}

export default function ProjectPage({ url, children }: Props) {
    return (
        <main className="flex relative w-full sm:w-full font-principal min-h-screen h-full flex-col items-center">
            <Header url={url} />
            <section className="flex relative justify-center">
                <BackgroundImage path="/images/bg-tech.png" />
                <div className="flex w-full flex-col items-center z-10 h-full bg-opacity-10 bg-white">
                    <div className="flex flex-col items-center z-10 pb-10 w-full sm:w-5/6 h-full bg-white bg-opacity-10 backdrop-blur-lg ">
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}