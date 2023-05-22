type Props = {
    width: string,
    smWidth:string,
    margin: string,
    imagePath: string
}

export default function Icon({ width, smWidth, margin, imagePath }: Props) {
    const classname = `object-contain flex w-${smWidth} sm:w-${width} m-${margin}`
    return (
        <img className={classname} src={`/images/${imagePath}`} alt="" data-aos="zoom-out" />
    )
}