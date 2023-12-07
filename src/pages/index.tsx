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
    FaGithub
} from 'react-icons/fa'
import { IconType } from "react-icons";

import Button from "@/components/button";

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
import { IoBook } from "react-icons/io5";

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
                <meta property="og:title" content="hello buddie this is egely!" />
                <meta property="og:description" content="click for learn about me (im not a scammer lol)"/>
            </Head>

            <Navbar />
            <div className="relative">
                <div className="w-full min-h-[calc(100vh-9rem)] top-[9rem]">
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
                            <span className="text-6xl font-bold font-inter mb-4">{`hello buddie 🫂`}</span>
                            <span className="text-3xl font-thin font-inter mb-8">people call me <strong className="font-bold">egely</strong></span>
                            <LinkButton
                                className="lg:w-48 w-36" 
                                href="/#about" 
                                text="learn more"
                                icon={IoBook}
                            />
                        </div>
                        <div className="lg:w-1/2 w-full lg:h-full hidden p-16 lg:flex flex-col justify-end items-end">
                            {/* TODO */}
                        </div>
                    </div>   
                    <img 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f0018a2-8560-4f86-b6ed-ce255489220d/dfta1it-fc942fb7-7288-4c67-8292-5416cb99624b.png/v1/fill/w_806,h_992/makima_from_chainsaw_man___png_render_by_xanccount_dfta1it-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU3NSIsInBhdGgiOiJcL2ZcLzVmMDAxOGEyLTg1NjAtNGY4Ni1iNmVkLWNlMjU1NDg5MjIwZFwvZGZ0YTFpdC1mYzk0MmZiNy03Mjg4LTRjNjctODI5Mi01NDE2Y2I5OTYyNGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GJ0jDRmmtIUCU6SEbvoaCR8a9ufZOP6qawxFw7eNJU4" 
                        className="absolute right-0 bottom-0 lg:w-[512px] w-[240px] text-white"
                    />
                </div>

                <Link href={"/#about"}>
                    <AiOutlineArrowDown className="text-white cursor-pointer absolute bottom-4 left-2/4 animate-bounce" size="24"/>
                </Link>
            </div>

            <div id="about" className="relative">
                <div className="w-full min-h-[calc(100vh)] top-[9rem]">
                    <div className="w-full h-full flex lg:flex-row flex-col lg:p-48 p-8">
                        <div className="flex flex-col lg:w-1/2 w-full">
                            <span className="lg:text-6xl text-4xl font-bold font-inter mb-12 tracking-widest">about</span>
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
                        <div className="flex flex-col lg:w-1/2 w-full lg:mt-0 mt-6">
                            <span 
                                className="lg:text-6xl text-4xl font-bold font-inter lg:ml-48 tracking-wider text-opacity-80"
                            >{`also, i interested on anime`}</span>
                            <img   
                                src="cutie.png" 
                                className="w-[700px] mt-8 lg:self-end self-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="relative">
                <div className="w-full h-[calc(100vh)] top-[9rem]">
                    <form onSubmit={submitMail} className="w-full flex flex-col lg:p-48 p-8">
                        <span className="lg:text-6xl text-4xl font-bold font-inter mb-12 tracking-widest">contact</span>

                        <span className="text-xl font-bold font-inter mb-2 tracking-widest">email</span>
                        <input 
                            value={contactEmail}
                            onChange={({target}) => setEmail(target.value)}
                            type="text"
                            className="lg:w-[612px] w-full py-2 px-3 border-[1px] rounded-md focus:outline-none mb-6"
                            placeholder="type here weirdo"
                        />

                        <span className="text-xl font-bold font-inter tracking-widest mb-2 mt-2">message</span>
                        <textarea name="message" id="message"
                            value={text}
                            onChange={({target}) => setText(target.value)}
                            className="h-[340px] lg:w-[612px] block w-full focus:outline-none px-2 py-2 rounded-md mb-4"
                            placeholder="do not insult me 🙏"
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