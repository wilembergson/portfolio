import { RxDoubleArrowDown } from 'react-icons/rx'
import { ImDownload2 } from 'react-icons/im'
import Link from 'next/link';

export default function Cover() {
    return (
        <div className="relative w-full h-100">
            <img className="absolute z-11 w-full  h-full" src="/images/coverbg.jpg" alt="" />
            <div className="flex absolute z-10 max-w-full h-full p-10 bg-white bg-opacity-70 text-purple-800 flex-row space-between" >
                <div className="flex justify-center w-full sm:w-1/2 flex-col items-center" data-aos="fade-right">
                    <h1 className="text-center scale-100 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl max-w-full flex-row space-between font-principal m-14">
                        Wilembergson Alfredo
                    </h1>
                    <h1 className="text-center text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-principal">
                        Desenvolvedor web
                    </h1>
                    <Link href='/curriculo.pdf' target='blank' download>
                        <button className="flex flex-row items-center text-center mt-20 text-1xl sm:text-xl xl:text-xl text-white p-4 sm:p-4 cursor-pointer bg-purple-800 hover:bg-purple-600 duration-700 rounded-full font-principal">
                            <ImDownload2 className='mr-5' /> Baixar curriculo
                        </button>
                    </Link>
                </div>
                <img className="object-contain hidden sm:block z-11 flex w-1/2" src="/images/cover1.png" alt="" data-aos="fade-left" />
            </div>
            <div className="flex absolute z-10 text-purple-900 bottom-10 left-1/2 justify-center">
                <RxDoubleArrowDown className='animate-bounce w-7 sm:w-12 h-auto' />
            </div>
        </div>
    )
}