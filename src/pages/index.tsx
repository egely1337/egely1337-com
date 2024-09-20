import Grid from "@/components/grid";
import InfoBox from "@/components/info";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from 'next/image';

import avatar from '../../public/egely-avatar.jpg';




export default function Page() {
    const paragraphs: string[] = 
    ["Hi, I'm Ege. As a person who doesn't like to talk much, I'll be brief. I'm of legal age, interested in software and politics. I spent most of my life in software. I don't regret it either. I have experience in C, C++, C#, Python, Javascript, Typescript languages and Web, OpenGL. In my free time I like to do difficult things from scratch. Sometimes I act toxic and sometimes normal. We are all human after all. Sometimes I watch anime, usually romantic anime. Am I ashamed of it? Yes. Anyway, you can see my social media and internet links below. You can reach me from there. By the way, \
    if you noticed, the site is very simple; Yes, I like simplicity. Have a good day!!!",

    "On the political compass, I see myself as libertarian center-left. I don't usually put it like that, I call myself a direct democrat.  I find laissez-faire, freedom of speech, participatory democracy right. In software, I support and contribute to free software. "
    ];

    return(
        <>
            <div className="lg:p-8 p-2 w-full flex flex-col justify-center items-center">
                <Head>
                    <title>egely.me | Home</title>
        </Head>

        <div className="lg:w-1/2 flex flex-col p-4">
            <div className="header flex flex-col mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <Image
                        src={avatar}
                        width={48}
                        height={48}
                        alt="egely-avatar"
                        blurDataURL="LOE{tY.m%#.S_2S~ozxv9uMxI9R5"
                        placeholder="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCACdAJ0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC5SGlpDQQNNNNPNMNADDTTTzTDSGNooNFAwpwptKKBjhS0gpaAFooooAQ00040hoAYaYaeaaaljGGkpTSVIzTpDTqQ1qZDDTTTzTTQBGaYakNRmkMaaSlNJSKFpRTacKAHClFNFOFMBaKKKAENIadTTQMYaaaeaYalgMNJTjSVIzVpCKdikNamQw0w1IaYaBkRphqRqjakMYabSmm1JQtOFMpwoAeKcKYKcKYDqKKKYBTTTqaaQDTTDTzTDSGNNJSmkpDNekNOpDWhiMNRtUhpjUDImqNqkao2qWUiM000rUw1LKQtOFMzThRcY8U8UwU4UxDhS0gpaYgpppaQ0ANNNNONMNIoaaSlNJSGbFIaWkNaGAw0xqeajagZG1RNUrVE1Sy0RtUZp7VGahloM08Go804GpTBkopwqMU8VoiR4paaKWmIWkNFIaAGmmmnGmGkUhppKU02kUbNIaM0hNaHONNManE0xjQURtUTVI1RNUspEbVGae1RmokWgpwplOFShskFPFRing1aIY8UtNBpc1QhaQ0ZppNAAaYTSk0wmgpCE0maCabmpKNnNITTc0hNaHOBNMY0pNMJoGNY1E1PY1ExpFIY1RmntTDUNFoSnCmU4Ukhkgp4NRinA1RLJAaM03NGaYh2aQmkzTSaAAmmE0pNMJoKQhNJmmk03NSUjazSE0zNITWhzik00mgmmE0DEY1GxpxNRk0DQ00w04000rFXEpRSUopWHceKcDUYpwNMkfmjNNzRmgB2aaTSE00mgAJpjGhjUTNUspAzU3NNJpM07F3NrNJmm5pM1RzjiaYTQTTSaAAmmE0pNMJpjENNNKabQO4UtJS0WC4opc02lpBcdmjNNzSE0CuKTTSaQmmM1ILgzVCzZNKxplCRSYZooopga+aTNFJQZgTTSaU000wENNNKaaaBiGkpTSUwCikpaAFopKKQC00mlppoEITUbGnmo2pMEMbrSUHrRQaBRRRQB//Z"
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="font-mono text-xl font-bold">egely</span>
                        <span className="font-mono text-xs mt-1">{'date' + ': ' + `${new Date().getUTCMonth()}/${new Date().getUTCDate()}/${new Date().getFullYear()}`}</span>
                        <span className="font-mono text-xs">{'subject: biography'}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {paragraphs.map((val, i) =>
                    <p key={i} className="font-mono">
                        {val}
                    </p>
                )}
            </div>

            <div className="w-full flex justify-center lg:items-center mt-8">
                <div className="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-3 underline font-mono gap-12 sm:text-base text-xs">
                    <Link href={`https://x.com/egely48`}>📷 Instagram</Link>
                    <Link href={`https://x.com/egely48`}>🐤 Twitter</Link>
                    <Link href={`https://github.com/egely1337`}>🐈 GitHub</Link>
                    <Link href={`/gallery`}>🖼️ Gallery</Link>
                    <Link href={`/blogs`}>📝 Blogs</Link>
                </div>
            </div>

            <InfoBox
                href="mailto:contact@egely.me"
                text="Click here to contact if you want to work with animeswatch.com project."
            />

            <div className='hello-world'>

            </div>

        </div>

        <Grid/>
        </div>
        </>
    )
}
