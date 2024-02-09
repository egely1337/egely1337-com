import { AppProps } from "next/app"

import "@/app/globals.css";

import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Head from "next/head";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps}/>
        </>
    )
}