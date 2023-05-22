import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function TopicTitle({ children }: Props) {
    return (
        <h2 className="flex text-purple-900 bg-white font-bold p-2 z-12 w-2/3 text-2xl sm:text-4xl mt-20 mb-5" data-aos="fade-left">
            {children}
        </h2>
    )
}