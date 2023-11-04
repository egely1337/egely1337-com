import React from "react";

import Link from "next/link";


import Navbar from "@/components/navbar";
import MediaIcon from "@/components/media_icon";

import LinkButton from "@/components/link";

import RECaptcha from 'react-google-recaptcha'

import {
    AiOutlineArrowDown
} from 'react-icons/ai';

import {
    FaInstagram,
    FaTwitter,
    FaGithub,
} from 'react-icons/fa'
import { IconType } from "react-icons";

import {Swiper, SwiperSlide} from "swiper/react";

import Button from "@/components/button";

import Blog from "@/components/blog";

import {
    Pagination,
} from "swiper/modules";

import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface MediaIconProps {
    mediaIcon: IconType,
    href: string,
    tooltipText: string
}

const Links: MediaIconProps[] = [
    {
        href: "https://instagram.com/egely1337",
        mediaIcon: FaInstagram,
        tooltipText: "Instagram"
    },
    {
        href: "https://twitter.com/egely1337",
        mediaIcon: FaTwitter,
        tooltipText: "Twitter"
    },
    {
        href: "https://github.com/egely1337",
        mediaIcon: FaGithub,
        tooltipText: "GitHub"
    }
]

import news from "@/configs/news.json";
import Head from "next/head";

interface PinnedRepos {
    owner: string,
    repo: string,
    link: string,
    description: string,
    image: string,
    language: string,
    languageColor: string,
    stars: string,
    forks: string
}

export default function LandingPage(props: {
    pinnedRepos: PinnedRepos[]
}) {
    const [contactEmail, setEmail] = React.useState<string>("");
    const [text, setText] = React.useState<string>("");
    const [captchaToken, setToken] = React.useState<string>("");

    const [callbackText, setCallbackText] = React.useState<string>("");


    async function submitMail(e: any) {
        try{
            e.preventDefault();

            const res = await axios.post("/api/sendMail", {
                email: contactEmail,
                text: text,
                captcha: captchaToken
            }).then(res => res.data);

            //@ts-ignore
            if(res.status) {
                setCallbackText(res.message);
            } else {
                setCallbackText(res.message);
            }
        } catch(err) {

        }
    }

    return(
        <>
            <Head>
                <title>egely1337</title>
                <meta property="og:title" content="Hello! That's me, egely1337!" />
                <meta property="og:description" content="You can read my blogs and learn about my biography."/>
            </Head>

            <Navbar />
            <div className="relative">
                <div className="w-full h-[calc(100vh-9rem)] top-[9rem]">
                    <div className="w-full h-full flex lg:flex-row flex-col relative">
                        <div className="lg:w-1/2 w-full h-full lg:p-48 p-12 flex flex-col">
                            <div className="flex flex-row items-center mb-4 gap-4">
                                {Links.map((value, index) => 
                                    <MediaIcon
                                        key={index} 
                                        href={value.href} 
                                        mediaIcon={value.mediaIcon}
                                        tooltipText={value.tooltipText}
                                    />
                                )}
                            </div>  
                            <span className="text-6xl font-bold font-inter mb-4">Hi there, I am</span>
                            <span className="text-4xl font-thin font-inter mb-8">egely</span>
                            <LinkButton className="lg:w-48 w-36" href="/#about" text="Read More"/>
                        </div>
                        <div className="lg:w-1/2 w-full lg:h-full hidden p-16 lg:flex flex-col justify-end items-end">
                            {/* TODO */}
                        </div>
                    </div>   
                </div>

                <Link href={"/#about"}>
                    <AiOutlineArrowDown className="text-white cursor-pointer absolute bottom-4 left-2/4 animate-bounce" size="24"/>
                </Link>
            </div>

            <div id="about" className="relative">
                <div className="w-full h-[calc(100vh)] top-[9rem]">
                    <div className="w-full h-full flex flex-col lg:p-48 p-8">
                            <span className="lg:text-6xl text-4xl font-bold font-inter mb-12">About Me</span>
                            <p className="font-inter text-gray-300 mb-4 lg:text-base text-xs">
                            {`My name is Ege. I've been involved in software development since I was 10 years old. I'm currently studying at Sağmalcılar Anatolian High School, and I'm 17 years old, born in 2006. I have a passion for both playing video games and conducting intellectual research. I'm also quite interested in politics and world affairs.`}
                            </p>
                            <p className="font-inter text-gray-300 mb-2 lg:text-base text-xs">
                            {`Throughout my past, I've delved into low-level software, and I even managed to develop an operating system kernel and a game engine. These experiences have enriched my understanding of software development and have been significant milestones in my journey.`}
                            </p>
                            <p className="font-inter text-gray-300 mb-2 lg:text-base text-xs">
                            {`At the moment, I'm actively engaged in creating websites using React libraries. This particular focus allows me to stay current with modern web development trends and contribute to various online projects. My journey in the software world has been an exciting one so far, and I look forward to what the future holds.`}
                            </p>
                            <p className="font-inter text-gray-300 mb-2 lg:text-base text-xs">
                            {`My journey into the world of software development began at a young age when I discovered my fascination with coding. Over the years, I've honed my skills and deepened my knowledge in various programming languages. This passion has not only been a personal interest but has also driven me to create practical solutions to everyday problems. I'm a firm believer in the power of technology to transform the way we live and work, and I'm excited to be a part of this transformative process.`}
                            </p>
                            <p className="font-inter text-gray-300 mb-2 lg:text-base text-xs">
                            {`In addition to my technical pursuits, I'm an avid reader and a critical thinker. I enjoy exploring a wide range of topics, from philosophy to science, which fuels my intellectual curiosity and broadens my perspective. This interdisciplinary approach to learning has not only helped me in my software development endeavors but also in understanding the intricate interplay of various fields, making me a more well-rounded individual.`}
                            </p>
                    </div>
                </div>
            </div>

            <div id="blogs" className="relative">
                <div className="w-full h-[calc(100vh)] top-[9rem]">
                    <div className="w-full h-full flex flex-col lg:p-36 p-4">
                        <span className="lg:text-6xl text-4xl font-bold font-inter mb-12">Blogs</span>
                        <Swiper
                            className="w-96 h-96 lg:h-full lg:w-full"
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                        >
                            {news.map((value, index) => 
                                <SwiperSlide key={index} className="w-full h-full">
                                    <Blog className="w-full h-full" key={index} link={value.link} title={value.title} img={value.img}/>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div id="contact" className="relative">
                <div className="w-full h-[calc(100vh)] top-[9rem]">
                    <form onSubmit={submitMail} className="w-full flex flex-col lg:p-48 p-8">
                        <span className="lg:text-6xl text-4xl font-bold font-inter mb-12">Contact Me</span>

                        <span className="text-xl font-bold font-inter mb-2">Your E-Mail</span>
                        <input 
                            value={contactEmail}
                            onChange={({target}) => setEmail(target.value)}
                            type="text"
                            className="lg:w-1/4 w-full py-1.5 px-3 border-[1px] rounded-md focus:outline-none mb-6"
                            placeholder="Your E-mail"
                        />

                        <span className="text-xl font-bold font-inter mb-2">Message</span>
                        <textarea name="message" id="message" cols={10} rows={30}
                            value={text}
                            onChange={({target}) => setText(target.value)}
                            className="lg:w-2/4 h-1/6 block w-full focus:outline-none px-2 py-2 rounded-md mb-4"
                            placeholder="Message"
                            onKeyDown={async (e) => {
                                if(e.key == "Enter" && !e.shiftKey) {
                                    await submitMail(e);
                                }
                            }}
                        />

                        <RECaptcha
                            sitekey="6LerPbsoAAAAAAvCuSIIuBj6ArHjUHiCTaQ23lIH"
                            onChange={(token) => setToken(token ?? "fuck you")}
                        />
                        <span className="text-gray-300 font-bold mb-4">{callbackText}</span>
                        <Button className="w-36" text="Send"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx: GetServerSidePropsContext) => {
    return {
        props: {

        }
    }

    // fuck you.
}