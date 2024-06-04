import Head from "next/head";
import Link from "next/link";
import React from "react";




export default function Page() {
    const personality = "Hi, I'm Ege. As a person who doesn't like to talk much, I'll be brief. I'm of legal age, interested in software and politics. I spent most of my life in software. I don't regret it either. I have experience in C, C++, C#, Python, Javascript, Typescript languages and web, OpenGL. In my free time I like to do difficult things from scratch. Sometimes I act toxic and sometimes normal. We are all human after all. Sometimes I watch anime, usually romantic anime. Am I ashamed of it? Yes. Anyway, you can see my social media and internet links below. You can reach me from there. By the way, if you noticed, the site is very simple; Yes, I like simplicity. Have a good day!!!";

    return(
        <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
            <Head>
                <title>egely.me</title>
            </Head>
            
            
            <div className="lg:w-1/2 flex flex-col p-4">
                <div className="header flex flex-col mb-4">
                    <span className="font-mono text-2xl">egely</span>
                    <span className="font-mono text-xs mt-1">{'Date' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                    <span className="font-mono text-xs">{'Subject' + ": " + 'Biography'}</span>
                </div>

                <p className="font-mono">
                    {personality}
                </p>

                <div className="flex justify-between underline font-mono gap-2 mt-8">
                    <Link href={`https://instagram.com/egely48`}>Instagram</Link>
                    <Link href={`https://x.com/egely48`}>Twitter</Link>
                    <Link href={`https://github.com/egely1337`}>Github</Link>
                    <Link href={`https://github.com/egely1337`}>Blog</Link>
                </div>


            </div>
        </div>
    )
}