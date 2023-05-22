import Link from "next/link";
import { GoGlobe } from 'react-icons/go'
import { AiOutlineArrowLeft } from 'react-icons/ai'

type Props = {
    url?: string
}

export default function Header({ url }: Props) {
    return (
        <header className="flex bg-white w-full pt-6 pb-6 justify-center">
            <div className="flex flex-row justify-between w-11/12 sm:w-5/6">
                <Link href='/'>
                    <h1 className="flex flex-row items-center font-black text-center text-purple-900 font-principal text-1xl sm:text-2xl w-max">
                        <AiOutlineArrowLeft />
                        Voltar
                    </h1>
                </Link>
                {url ? <Link href={url} target="_blank">
                    <h1 className="flex flex-row items-center font-black text-center text-purple-900 font-principal text-1xl sm:text-2xl w-max">
                        <GoGlobe /> acessar
                    </h1>
                </Link> : <></>}
            </div>
        </header>
    )
}