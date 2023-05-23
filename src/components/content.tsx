import { ReactNode } from "react"

type Props = {
    color: string,
    children: ReactNode
}

export default function Content({ color ,children }: Props) {

    const classname = `font-principal ${color} text-justify w-2/3 mb-10 mt-0 sm:mt-0 text-1xl md:text-1xl xl:text-2xl`
    return (
        <h3 className={classname} data-aos="fade-left">
            {children}
        </h3>
    )
}