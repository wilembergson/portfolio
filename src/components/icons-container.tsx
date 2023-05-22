import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function IconsContainer({ children }: Props) {
    return (
        <div className="flex absolute flex-wrap items-center w-auto flex-col mb-10 justify-center bg-black bg-opacity-20 right-0">
            {children}
        </div>
    )
}