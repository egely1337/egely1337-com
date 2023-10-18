import { AppProps } from "next/app"

import "@/app/globals.css";

import "swiper/css"

export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps}/>
    
}