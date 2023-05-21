
import Link from "next/link";
import { AiOutlineArrowLeft } from 'react-icons/ai'
export default function Header() {
    return (
        <header className="flex bg-white w-full pt-6 pb-6 justify-center">
            <div className="w-11/12 sm:w-5/6">
                <Link href='/'>
                    <h1 className="flex flex-row items-center font-black text-center text-purple-900 font-principal text-1xl sm:text-2xl w-max">
                        <AiOutlineArrowLeft/>
                        Voltar
                    </h1>
                </Link>
            </div>
        </header>
    )
}