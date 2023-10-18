import { AppProps } from "next/app"

import "@/app/globals.css";

import "swiper/css"

export default function App({Component, ...pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}