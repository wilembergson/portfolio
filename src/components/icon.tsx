type Props = {
    width: string,
    imagePath: string
}

export default function Icon({ width, imagePath }: Props) {
    const classname = `object-contain flex w-10 sm:w-${width} m-2`
    return (
        <img className={classname} src={`/images/${imagePath}`} alt="" data-aos="zoom-out" />
    )
}