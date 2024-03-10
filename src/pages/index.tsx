import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Navbar from "@/components/navbar";
import MediaIcon from "@/components/media_icon";
import LinkButton from "@/components/link";
import Button from "@/components/button";

import RECaptcha from 'react-google-recaptcha'
import { useInView } from "react-intersection-observer";

import {
    AiOutlineArrowDown, AiOutlineMessage
} from 'react-icons/ai';

import {
    FaInstagram,
    FaTwitter,
    FaGithub
} from 'react-icons/fa'
import { SiMyanimelist } from "react-icons/si";

import { IconType } from "react-icons";

import axios from "axios";

type MediaIconProps = {
    mediaIcon: IconType,
    href: string,
    tooltipText: string
}

const Links: MediaIconProps[] = [
    {
        href: "https://instagram.com/egely48",
        mediaIcon: FaInstagram,
        tooltipText: "Instagram"
    },
    {
        href: "https://twitter.com/egely48",
        mediaIcon: FaTwitter,
        tooltipText: "Twitter"
    },
    {
        href: "https://github.com/egely1337",
        mediaIcon: FaGithub,
        tooltipText: "GitHub"
    },
    {
        href: "https://myanimelist.net/profile/egely1337",
        mediaIcon: SiMyanimelist,
        tooltipText: "My Anime List"
    }
]

import TypewriterComponent from "typewriter-effect";
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
    const router = useRouter();

    const [contactEmail, setEmail] = React.useState<string>("");
    const [text, setText] = React.useState<string>("");
    const [captchaToken, setToken] = React.useState<string>("");

    const [callbackText, setCallbackText] = React.useState<string>("");

    const [ref, inView] = useInView();
    const [contactRef, contactInView] = useInView();

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
                setTimeout(() => {
                    router.reload();
                }, 1000);
            }
        } catch(err) {

        }
    }

    return(
        <>
            <Head>
                <title>egely - home</title>
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
                            <span className={`lg:text-6xl text-4xl font-bold font-inter mb-12 tracking-widest`}>about</span>
                            <TypewriterComponent
                                onInit={(typeWriter) => {
                                    typeWriter
                                    .changeDelay(30)
                                    .typeString("hiiiii! my name's ege-chan! i, like, totally got into software stuff when i was just 10 years old, nya! right now, i'm, like, studying at anatolian high school, teehee! i'm 17, born in 2006, uwu! i'm, like, super passionate about gaming and doing smartie-pants research, desu! and, ohh, i'm kinda into politics and, like, world things too, nya! ♡＾▽＾♡ <br/><br/>")
                                    .start()
                                    .typeString("in my past adventures, i totally dived into low-level software shenanigans, and guess what? i actually whipped up an operating system kernel and a game engine, nya! these experiences totally juiced up my grasp of software stuff and were like, major checkpoints in my journey! (*≧ω≦) <br/>")
                                    .start()
                                    .typeString("at the moment, i'm like, totally into creating websites using react libraries, teehee! this specific focus helps me keep up with all the hip and happening trends in modern web development and contribute to tons of online projects, nya! my journey in the software world has been, like, super thrilling, and i can't wait to see what the future's got in store! (*＾▽＾)／ <br/><br/>")
                                    .start()
                                    .typeString("ohh, besides all my techy stuff, i'm, like, a total bookworm and super into thinking about stuff, nya! i love diving into all sorts of topics, from deep philosophy to mind-boggling science, which totally fires up my brain and makes me see things in a whole new way, teehee! this mix-and-match learning style hasn't just helped me in my software quests but also in, like, grokking how different fields dance together, making me a more, like, well-rounded peep! ＼(≧▽≦)／")
                                }}
                            />
                        </div>
                        <div ref={ref} className={`flex flex-col lg:w-1/2 w-full lg:mt-0 mt-6`}>
                            <span 
                                className={`lg:text-7xl z-20 text-4xl font-bold font-inter lg:ml-48 tracking-wider text-opacity-80 duration-[1s] ${inView ? "translate-y-0" : "opacity-0 -translate-y-10"}`}
                            >{`also, i am interested on anime`}</span>
                            <img   
                                src="cutie.png" 
                                className={`w-auto mt-8 self-center duration-[1s] ${inView ? "translate-y-0" : "opacity-0 -translate-y-10"}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="relative">
                <div className="w-full overflow-hidden h-[calc(100vh)] top-[9rem] flex lg:flex-row flex-col">
                    <form ref={contactRef} onSubmit={submitMail} className="w-full lg:w-2/4 flex flex-col lg:p-48 p-8">
                        <span className={`lg:text-6xl text-4xl font-bold font-inter mb-12 tracking-widest duration-[1s] ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"}`}>contact</span>

                        <span className={`text-xl font-bold font-inter mb-2 tracking-widest duration-[1.5s] ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"}`}>email</span>
                        <input 
                            value={contactEmail}
                            onChange={({target}) => setEmail(target.value)}
                            type="text"
                            className={`lg:w-[612px] w-full py-2 px-3 border-[1px] rounded-md focus:outline-none ease-out mb-6 duration-[2s] ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"} `}
                            placeholder="type here weirdo"
                        />

                        <span className={`duration-[2s] ease-in-out ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"} text-xl font-bold font-inter tracking-widest mb-2 mt-2`}>message</span>
                        <textarea name="message" id="message"
                            value={text}
                            onChange={({target}) => setText(target.value)}
                            className={`h-[340px] lg:w-[612px] block w-full focus:outline-none px-2 py-2 rounded-md mb-4 duration-[2.5s] ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"} `}
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
                            className={`duration-[3s] ${contactInView ? "opacity-100 -translate-y-[20px]" : "opacity-0"}`}
                        />
                        <span className="text-gray-300 font-bold mb-4">{callbackText}</span>
                        <Button
                            className={`w-36`} 
                            text="Send"
                            icon={AiOutlineMessage}
                        />
                    </form>
                    <div className="hidden lg:w-2/4 lg:flex items-center justify-center">
                        <img 
                            src="https://i.pinimg.com/originals/29/90/69/299069ebd9915dd74773ef46a65519ae.gif" 
                            alt="" 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}