import Grid from "@/components/grid";
import KernelPanic from "@/components/kernel-panic";
import { getPosts } from "@/lib/getPosts";
import Head from "next/head";
import Markdown from "react-markdown";
import { NextSeo } from "next-seo";

export default function Page(props: {
    post: {
        title: string,
        date: string,
        content: string,
        id: string,
        author: string
    },
    banner_image: string
}) {

    if (!props.post) {
        return(
            <KernelPanic/>
        )
    } else {
        return(
            <>
                <NextSeo
                    title={`egely.me | ${props.post.title}`}
                    description={props.post.content.slice(0, 120) + '...'}
                    openGraph={{
                        images: (props.banner_image) ? [{
                            url: props.banner_image,
                            width: 1920,
                            height: 1080,
                            alt: "banner"
                        }] : [],
                        title: `egely.me | ${props.post.title}`,
                        description: props.post.content.slice(0, 120) + '...'
                    }}
                    twitter={{
                        handle: '@egely48',
                        site: '@egely.me',
                        cardType: 'summary_large_image',
                    }}
                />
                <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
                    
                    <div className="lg:w-1/2 flex flex-col p-4">
                        <div className="header flex flex-col">
                            <span className="font-mono text-2xl font-bold">{props.post.title}</span>
                            <span className="font-mono text-xs mt-1">{'tarih' + ': ' + props.post.date}</span>
                            <span className="font-mono text-xs">{`yazar: ${props.post.author}`}</span>
                        </div>

                        <Markdown className={`markdown font-mono`}>{props.post.content}</Markdown>
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
    const banner_image = post?.content.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i)?.at(0);

    if(!post) {
        return {
            props: {
                post: null,
            }
        }
    }

    return {
        props: {
            post,
            banner_image
        }
    }
}