import Link from 'next/link'
import { ImDownload2 } from 'react-icons/im'
import ButtonHeader from './button-header'

export default function MainHeader() {
    return (
        <header className="flex fixed bg-white w-full py-5 justify-center z-50 shadow-sm" data-aos="fade-down">
            <div className="flex flex-row justify-between w-11/12 sm:w-2/3">
                <h1 className="flex flex-row items-center font-black text-center text-purple-900 font-principal text-1xl sm:text-2xl w-max">
                    Wilembergson Alfredo
                </h1>
                <Link href='/curriculo.pdf' target='blank' download>
                    <ButtonHeader>
                        <ImDownload2 className='mr-2' />curriculo
                    </ButtonHeader>
                </Link>
            </div>
        </header>
    )
}