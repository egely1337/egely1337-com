import React from "react";
import Head from "next/head";

import Navbar from "@/components/navbar";
import Blog from "@/components/blog";
import news from "@/configs/news.json";

export default function Page(props: {

}) {
    return(
        <>
            <Head>
                <title>egely1337</title>
                <meta property="og:title" content="hello buddie this is egely!" />
                <meta property="og:description" content="click for learn about me (im not a scammer lol)"/>
            </Head>
            <Navbar/>
            <div id="blogs" className="relative">
                <div className="h-min-[100vh-9rem] top-[9rem] flex justify-center">
                    <div className="grid lg:grid-cols-2 grid-rows-1">
                        {news.map((val, index) => {
                            return <Blog
                                title={val.title}
                                img={val.img}    
                                link={val.link}
                                key={index}
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}