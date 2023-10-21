import NewsLayout from "@/components/news_layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";


export default function Page(){
    return(
        <>
            <Head>
                <title>Developing Your Operating System - egely1337</title>
            </Head>

            <NewsLayout>
                <span className="news-title">
                    {`How to develop a Operating System Kernel`}
                </span>

                <span className="news-author">
                    {`by egely1337`}
                </span>

                <p className="mt-4">
                    {`
                       I began learning how to develop a kernel when I was 14. I conducted extensive research on kernels and gained a deep understanding of operating systems. Subsequently, I installed a Cross-Compiler on my Linux system and opened my favorite code text editor (VS Code) to get to work. I also watched numerous tutorials and read various documents on the Internet regarding kernel and bootloader development.
                    `}
                </p>

                <img src="https://www.linuxinsider.com/wp-content/uploads/sites/2/2023/06/ai-linux-tux.jpg" className="news-img mt-4"/>

                <p className="mt-4">
                    {`
                        At first, I tried a lot but failed. However, to succeed in something, you need to try a lot, and I certainly did. Finally, I achieved one thing!
                    `}
                </p>

                <span className="font-bold mt-8 text-xl mb-2">Printing to Terminal!</span>
                
                <img src="https://i.imgur.com/9e67avn.png" className="news-img"/>

                <p className="mt-4">
                    {`
                        But that wasn't enough for me. I needed more! I knew what I needed to learn: IDT, GDT, IRQs, PCI, ACPI, system calls, and file systems. So, I got to work again. I started reading and watching tutorials on the internet, and I even wrote IDT, GDT, and IRQs. I even created a file system called 'hyeo-fs.' It was quite basic to use.
                    `}
                </p>

                <p className="mt-4">
                    {`
                        However, The main purpose of this text is you can achieve everyting if you want and study hard. Nothing is hard to do it. Just you need to want it.
                        Throughout history, it has been the same; people have desired something and they have tirelessly worked to achieve it.
                    `}
                </p>

                <span className="text-xl lg:text-2xl font-bold mt-8">If you want to start developing kernel:</span>
                <div className="p-4 flex flex-col">
                    <Link className="text-blue-600 underline" href="https://wiki.osdev.org/Expanded_Main_Page">1. OSDev Wiki</Link>
                    <Link className="text-blue-600 underline" href="https://github.com/egely1337/os-hello-world">2. Hello World by egely1337</Link>
                    <Link className="text-blue-600 underline" href="https://github.com/egely1337/hyeo">3. hyeo by egely1337</Link>
                </div>

                <span className="text-opacity-80 mt-8">{`Edited on: 10/21/2023 1:41 PM UTC+3`}</span>
            </NewsLayout>
        </>
    )
}