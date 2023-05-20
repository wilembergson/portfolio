import { ReactNode } from "react"

type Props = {
    textColor: string,
    children: ReactNode
    textBlack?: boolean
}

export default function MainTitle({ textColor, children, textBlack }: Props) {
    const className = `${textColor} ${textBlack ? 'font-black' : ""} font-principal justify-center z-12 text-center text-3xl sm:text-5xl mt-14 mb-14`
    return (
        <h1 className={className} data-aos="fade-down">
            {children}
        </h1>
    )
}