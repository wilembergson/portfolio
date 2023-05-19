import { ReactNode } from "react"

type Props = {
    textColor: string,
    children: ReactNode
}

export default function MainTitle({ textColor, children }: Props) {
    const className = `${textColor} font-principal justify-center z-12 text-center text-3xl sm:text-5xl mt-14 mb-14`
    return (
        <h1 className={className} data-aos="fade-down">
            {children}
        </h1>
    )
}