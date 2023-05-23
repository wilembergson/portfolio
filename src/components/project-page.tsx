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
                <BackgroundImage path="/images/bg-projects.jpg" />
                <div className="flex w-full flex-col items-center z-10 h-full bg-opacity-30 bg-black">
                    <div className="flex flex-col items-center z-10 pb-10 backdrop-blur-lg w-full sm:w-5/6 h-full bg-opacity-30 bg-black">
                        {children}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}