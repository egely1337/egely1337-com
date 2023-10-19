import { AppProps } from "next/app"

import "@/app/globals.css";

import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps}/>
    
}