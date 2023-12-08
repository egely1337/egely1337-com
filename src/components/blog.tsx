import React from "react";

import Link from "next/link";

export default function Blog(props: {
    link: string,
    title: string,
    img?: string,
    className?: string
}) {
    return(
        <>
            <Link href={props.link} className={`${props.className} w-auto p-4 flex flex-col justify-start items-start`}>
                <div className="flex flex-col items-center">
                    <img className="w-[684px] h-[514px] shadow-inset bg-black" src={props.img} alt="" />
                    <span className="text-gray-300 text-center text-sm text-opacity-90 mt-4">{props.title}</span>
                </div>
            </Link>
        </>
    )
}