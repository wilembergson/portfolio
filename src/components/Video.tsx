import YouTube, { YouTubeProps } from "react-youtube";

type Prop = {
    videoId: string
    children: any
}

export default function Video({ videoId, children }: Prop) {
    const opts: YouTubeProps['opts'] = {
        width: '100%'
    }
    return (
        <section className="flex relative w-2/3 flex-col sm:flex-row justify-between" data-aos="fade-right">
            <div className="w-full flex-col justify-center items-center">
                <YouTube opts={opts} videoId={videoId} />
            </div>
            <h1 className="text-justify w-full sm:w-1/2 ml-0 mt-5 sm:ml-10 sm:mt-0 text-1xl md:text-xl xl:text-2xl">
                {children}
            </h1>
        </section>
    )
}