import Grid from "@/components/grid";
import KernelPanic from "@/components/kernel-panic";
import { getPosts } from "@/lib/getPosts";
import Head from "next/head";
import Markdown from "react-markdown";

export default function Page(props: {
    post: {
        title: string,
        date: string,
        content: string,
        id: string,
        author: string
    } 
}) {

    if (!props.post) {
        return(
            <KernelPanic/>
        )
    } else {
        return(
            <>
                <Head>
                    {props.post && <title>egely.me | Loading</title>}
                    {props.post && <title>egely.me | {props.post.title}</title>}
                </Head>
                <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
                    
                    <div className="lg:w-1/2 flex flex-col p-4">
                        <div className="header flex flex-col mb-4">
                            <span className="font-mono text-2xl font-bold">{props.post.title}</span>
                            <span className="font-mono text-xs">{`author: ${props.post.author} · ${props.post.date}`}</span>

                            <Markdown className={`markdown font-mono`}>{props.post.content}</Markdown>
                        </div>


                    </div>

                    <Grid/>
                </div>
            </>
        )
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    const paths = posts.map((val) => {
        return {
            params: {
                id: val.id
            }
        }
    })

    return {paths, fallback: true}
}

export async function getStaticProps({ params }: {params: {id: any}}) {
    const posts = await getPosts()
    const post = posts.find((val) => val.id === params.id);


    if(!post) {
        return {
            props: {
                post: null
            }
        }
    }

    return {
        props: {
            post
        }
    }
}