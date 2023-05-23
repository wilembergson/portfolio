type Props = {
    path: string
}

export default function BackgroundImage({ path }: Props) {
    return (
        <img className="absolute z-11 w-full h-full" src={path} alt="" />
    )
}