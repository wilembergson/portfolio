import Link from 'next/link'
import { ImDownload2 } from 'react-icons/im'

export default function MainHeader() {
    return (
        <header className="flex fixed bg-white w-full py-5 justify-center z-50 shadow-sm" data-aos="fade-down">
            <div className="flex flex-row justify-between w-11/12 sm:w-2/3">
                <h1 className="flex flex-row items-center font-black text-center text-purple-900 font-principal text-1xl sm:text-2xl w-max">
                    Wilembergson Alfredo
                </h1>
                <Link href='/curriculo.pdf' target='blank' download>
                    <button className="flex flex-row items-center justify-center text-center text-1xl sm:text-2xl text-white px-3 py-2
                     cursor-pointer bg-purple-800 hover:bg-purple-600 duration-700 rounded-full font-principal">
                        <ImDownload2 className='mr-2' />curriculo
                    </button>
                </Link>
            </div>
        </header>
    )
}