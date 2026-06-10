"use client"

import Icon from "./icon"
import MainTitle from "./main-title"

export default function Skills() {
    return (
        <div className='flex w-full pl-16 pr-16 pb-16 flex-col items-center bg-purple-100'>
            <MainTitle textColor="text-purple-900">
                Tecnologias que domino
            </MainTitle>
            <div className="flex flex-wrap w-full sm:w-2/3 justify-center">
                <img className='object-contain flex w-20 sm:w-24 m-5' src='/images/svg/java.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-24 sm:w-52 m-5' src='/images/svg/spring-boot.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-16 sm:w-16 m-4' src='/images/svg/typescript.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-32 sm:w-56 m-2' src='/images/svg/reactjs2.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-24 sm:w-40 m-5' src='/images/svg/nextjs.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-20 sm:w-52 m-5' src='/images/svg/tailwind.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-24 sm:w-36 m-5' src='/images/svg/nodejs.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-24 sm:w-36 m-5' src='/images/svg/postgres.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-24 sm:w-40 m-5' src='/images/svg/git.svg' alt="" data-aos="zoom-out" />
                <img className='object-contain flex w-20 sm:w-28 m-6' src='/images/svg/docker.svg' alt="" data-aos="zoom-out" />
            </div>
        </div>
    )
}