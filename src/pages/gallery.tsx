import Grid from "@/components/grid";
import Head from "next/head";


export default function Page() {

    const images: string[] = [
        "https://images7.alphacoders.com/959/959381.jpg",
        "https://i.pinimg.com/originals/3d/71/b1/3d71b17404a32bb6a770b67d32735f97.jpg",
        "https://img.goodfon.com/original/1920x1080/a/2e/ju-87d-junker-ju-87-stuka-pikiruiushchii-bombardirovshchik-b.jpg",
        "https://www.worldhistory.org/img/c/p/1600x900/18621.png",
        "https://www.ismetinonu.org.tr/wp-content/uploads/2018/04/anitkabir-ismet-inonu-galerisi-5.jpg",
        "https://i.pinimg.com/originals/d0/15/bc/d015bc59a8b7b7983715dd47b275fb9f.jpg",
        "https://d.newsweek.com/en/full/1157808/gettyimages-494024509.jpg"
    ]
    
    return(
        <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
            <Head>
                <title>egely.me | galeri</title>
            </Head>

            <div className="lg:w-1/2 flex flex-col p-4">
                <div className="header flex flex-col mb-4">
                    <span className="font-mono text-3xl font-bold">galeri</span>
                    <span className="font-mono mt-1">{'tarih' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                    <span className="font-mono">{'konu: galeri'}</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                    {images.map((val, i) => <img src={val} className="w-full h-full object-cover" key={i}/>)}
                </div>
            </div>
            

            <Grid/>
        </div>
    )
}