import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function ButtonHeader({ children }: Props) {
    return (
        <button className="flex flex-row items-center justify-center text-center text-1xl sm:text-2xl text-white px-3 py-2
                     cursor-pointer bg-purple-800 hover:bg-purple-600 duration-700 rounded-full font-principal">
            {children}
        </button>
    )
}