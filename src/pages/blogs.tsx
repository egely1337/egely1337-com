import Grid from "@/components/grid";
import { getPosts } from "@/lib/getPosts";
import getText from "@/lib/getText";
import Head from 'next/head';
import Link from "next/link";
import Markdown from 'react-markdown'

export default function Page(props: {
    posts: {
        title: string,
        date: string,
        content: string,
        id: string,
        author: string
    }[]
}) {
    return(
        <>
        <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
            <Head>
                <title>egely.me | bloglar</title>
            </Head>
            
            <div className="lg:w-1/2 w-full flex flex-col p-4">
                <div className="header flex flex-col">
                    <span className="font-mono text-2xl font-bold">bloglar</span>
                    <span className="font-mono text-xs mt-1">{'tarih' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                    <span className="font-mono text-xs">{'konu: bloglar'}</span>
                </div>
            </div>

            <div className="lg:w-1/2 flex flex-col px-4 gap-5">
                {props.posts.map((val) => {
                    return(
                        <div key={val.title} className="flex flex-col font-mono items-start border-b pb-5">
                            <h1 className="text-2xl font-bold">{val.title}<span className="font-normal text-sm"></span></h1>
                            <span className="text-sm">{'@' +val.author + ' ' + '·' + ' ' + val.date}</span>
                            <Markdown  className={'mt-1 break-words markdown'}>
                                {getText(val.content)}
                            </Markdown>
                            <Link href={`/blog/${val.id}`} className="text-blue-800 underline">daha fazlasını oku...</Link>
                        </div>
                    )
                })}
            </div>

            <Grid/>
        </div>
    </>
    )
}

export async function getStaticProps() {
    const posts = await getPosts();
    return {
        props: {
            posts: posts
        }
    }
}