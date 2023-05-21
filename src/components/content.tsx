import { ReactNode } from "react"
import TopicTitle from "./TopicTitle"

type Props = {
    title?: string,
    children: ReactNode
}

export default function Content({ title, children }: Props) {
    return (
        <div className="flex flex-col w-full items-center" data-aos="fade-left">
            {title ? <TopicTitle>{title}</TopicTitle> : <></>}
            <h3 className="text-white text-justify w-2/3 mb-10 mt-0 sm:mt-0 text-1xl md:text-xl xl:text-2xl">
                {children}
            </h3>
        </div>
    )
}