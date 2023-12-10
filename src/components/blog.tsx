import React from "react";

import Link from "next/link";

import { useInView } from "react-intersection-observer";

export default function Blog(props: {
    link: string,
    title: string,
    img?: string,
    className?: string
}) {
    const [ref, inView] = useInView();

    return(
        <>
            <Link ref={ref} href={props.link} className={`${props.className} w-auto p-4 flex flex-col justify-start items-start ease-in-out duration-[1s] ${inView ? "" : "translate-y-[20px] opacity-0"}`}>
                <div className="flex flex-col items-center">
                    <img className="sm:w-[684px] sm:h-[514px] w-[384px] h-[280px] shadow-inset bg-black" src={props.img} alt="" />
                    <span className="text-gray-300 text-center text-sm text-opacity-90 mt-4">{props.title}</span>
                </div>
            </Link>
        </>
    )
}