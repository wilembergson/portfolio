export default function ProjectItem({ image, title, description, children }: any) {
    return (
        <section className="flex flex-col bg-white transition-all duration-75 transform hover:scale-105 w-96 p-5 m-5 items-center rounded-lg cursor-pointer shadow-black" data-aos="zoom-in">
            <img className="z-11 w-12/12 h-1/2" src={image} alt="" />
            <h2 className="font-principal font-black text-4xl mt-5 w-full text-purple-900">
                {title}
            </h2>
            <h3 className="font-principal text-2xl w-full text-grey-900 mt-3 leading-5">
                {description}
            </h3>
            <div className="flex flex-wrap justify-start mt-3">
                {children}
            </div>
        </section>
    )
}