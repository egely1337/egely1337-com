import { AppProps } from "next/app"

import "@/app/globals.css";
import Head from "next/head";
import ThemeProvider from "@/util/ThemeProvider";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <>  
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <ThemeProvider>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    )
}