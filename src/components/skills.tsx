"use client"

import MainTitle from "./main-title"

export default function Skills() {
    return (
        <div className='flex w-full p-16 flex-col items-center bg-purple-100'>
            <MainTitle textColor="text-purple-900">
                Tecnologias que domino
            </MainTitle>
            <div className="flex flex-wrap w-full justify-center">
                <img className="object-contain flex w-16 sm:w-20 m-4" src="/images/typescript.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-32 sm:w-64 m-2" src="/images/reactjs2.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/nodejs.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/postgres.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/mongodb.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/prisma.svg" alt="" data-aos="zoom-out" />
            </div>
            <div className="flex flex-wrap w-full justify-center">
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/git.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-24 sm:w-40 m-5" src="/images/jest.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-20 sm:w-28 m-5" src="/images/styled-components.svg" alt="" data-aos="zoom-out" />
                <img className="object-contain flex w-20 sm:w-28 m-5" src="/images/docker.svg" alt="" data-aos="zoom-out" />
            </div>
        </div>
    )
}