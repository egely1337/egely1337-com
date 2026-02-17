import Grid from "@/components/grid";
import InfoBox from "@/components/info";
import Head from "next/head";
import Image from 'next/image';

import getMarkdown from "@/lib/getMarkdown";
import { useTheme } from "@/util/ThemeProvider";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Markdown from "react-markdown";
import CustomLink from "@/components/custom_link";
import MyInfo from "@/components/my_info";
import Layout from "@/components/layout";


export default function Page(props: {
        markdown: string
    }
) {
    return( 
        <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
            <Head>
                <title>egely.me | ev</title>
            </Head>

            <Layout>
                <MyInfo/>
                <Markdown className={"markdown font-mono text-xl"}>
                    {props.markdown}
                </Markdown>

                <div className="w-full flex justify-center lg:items-center mt-8">
                    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 underline font-mono gap-12 sm:text-base text-xs">
                        <CustomLink href="mailto:contact@egely.me" text="📧 postalaş"/>
                        <CustomLink href={`https://github.com/egely1337`} text="🐈 github"/>
                        <CustomLink href={`/blogs`} text="📝 bloglar"/>
                    </div>
                </div>

                <InfoBox
                    href="mailto:contact@egely.me"
                    text="Click here to contact me."
                />
            </Layout>
            <Grid/>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    return {
        props: {
            markdown: getMarkdown('me.md')
        }
    }
}