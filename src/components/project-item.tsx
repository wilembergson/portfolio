import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    url: string,
    image: string,
    title: string,
    description: string,
    children: ReactNode
}

export default function ProjectItem({ url, image, title, description, children }: Props) {
    return (
        <Link href={url} className="flex flex-col bg-white transition-all duration-700 transform hover:scale-105 w-96 p-5 m-5 items-center rounded-lg cursor-pointer shadow-black">
            <img className="z-11 w-12/12 h-1/2" src={`/images/${image}`} alt="" />
            <h2 className="font-principal font-black text-4xl mt-5 w-full text-purple-900">
                {title}
            </h2>
            <h3 className="font-principal text-2xl w-full text-grey-900 mt-3 leading-5">
                {description}
            </h3>
            <div className="flex flex-wrap justify-start mt-3">
                {children}
            </div>
        </Link>
    )
}