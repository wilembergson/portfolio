import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Content({ children }: Props) {
    return (
        <h3 className="text-white text-justify w-2/3 mb-10 mt-0 sm:mt-0 text-1xl md:text-xl xl:text-2xl" data-aos="fade-left">
            {children}
        </h3>
    )
}