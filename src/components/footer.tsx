import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import ContentLink from './content-link'

export default function Footer() {
    return (
        <footer className="font-principal text-1xl sm:text-1xl flex flex-row justify-center w-full p-20 text-white bg-footer">
            <section className='flex flex-col sm:flex-row w-2/3 justify-center sm:justify-between items-center'>
                <h3 className=' flex flex-wrap italic max-w-max text-center'>© Desenvolvido por Wilembergson Alfredo</h3>
                <div className='flex relative flex-row mt-6 w-28 justify-between'>
                    <ContentLink href='https://github.com/wilembergson'>
                        <BsGithub size={40} />
                    </ContentLink>
                    <ContentLink href='https://www.linkedin.com/in/wilembergson'>
                        <BsLinkedin size={40} />
                    </ContentLink>
                </div>
            </section>
        </footer>
    )
}