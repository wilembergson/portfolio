import Link from "next/link";
import { ReactNode } from "react";
import { GiSandsOfTime } from 'react-icons/gi'

type Props = {
    url: string,
    image: string,
    title: string,
    description: string,
    inProgress?: string
    children: ReactNode
}

export default function ProjectItem({ url, image, title, description, inProgress, children }: Props) {
    return (
        <Link href={url} className="flex relative flex-col bg-white transition-all duration-700 transform hover:scale-105 w-80 m-5 items-center rounded-lg cursor-pointer shadow-black">
            {inProgress ? <div className="flex absolute flex-col items-center pt-20 w-full h-full rounded-lg bg-opacity-70 text-white bg-black">
                <GiSandsOfTime size={50} />
                <h3 className="font-principal text-2xl mt-2">
                    {inProgress}
                </h3>
            </div> : <></>}
            <section className="flex flex-col h-full p-5">
                <img className="z-11 w-12/12 h-1/2" src={`/images/${image}`} alt="" />
                <h2 className="font-principal font-black text-3xl mt-5 w-full text-purple-900">
                    {title}
                </h2>
                <h3 className="font-principal text-lg w-full text-gray-900 mt-3 leading-5">
                    {description}
                </h3>
                <div className="flex flex-wrap justify-start mt-3">
                    {children}
                </div>
            </section>
        </Link>
    )
}