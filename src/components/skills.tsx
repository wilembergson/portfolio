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
                <Icon width="20" smWidth="16" margin="4" imagePath="typescript.svg" />
                <Icon width="64" smWidth="32" margin="2" imagePath="reactjs2.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="nodejs.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="postgres.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="mongodb.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="prisma.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="git.svg" />
                <Icon width="40" smWidth="24" margin="5" imagePath="jest.svg" />
                <Icon width="28" smWidth="20" margin="5" imagePath="styled-components.svg" />
                <Icon width="28" smWidth="20" margin="5" imagePath="docker.svg" />
            </div>
        </div>
    )
}