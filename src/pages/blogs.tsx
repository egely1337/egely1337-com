import Grid from "@/components/grid";
import Layout from "@/components/layout";
import { getPosts } from "@/lib/getPosts";
import getText from "@/lib/getText";
import { useTheme } from "@/util/ThemeProvider";
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
    const theme = useTheme();

    return(
        <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
            <Head>
                <title>egely.me | bloglar</title>
            </Head>
            
            <Layout>
                <div className="header flex flex-col">
                    <span className="font-mono text-3xl font-bold">bloglar</span>
                    <span className="font-mono mt-1">{'tarih' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                    <span className="font-mono">{'konu: bloglar'}</span>
                </div>

                
                {props.posts.map((val) => {
                    return(
                        <div key={val.title} className={"flex flex-col font-mono items-start pb-5 " + `${theme.theme === 'DARK' ? "border-white" : "border-black"}`}>
                            <h1 className="text-2xl font-bold">{val.title}<span className="font-normal text-sm"></span></h1>
                            <span className="text-base">{'@' +val.author + ' ' + '·' + ' ' + (val.date)}</span>
                            <Markdown  className={'mt-1 text-xl break-words markdown'}>
                                {getText(val.content)}
                            </Markdown>
                            <Link href={`/blog/${val.id}`} className="text-blue-500 underline">daha fazlasını oku...</Link>
                        </div>
                    )
                })}
            </Layout>
            <Grid/>
        </div>
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