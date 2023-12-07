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
            <Link href={props.link} className={`${props.className} p-4 flex flex-col justify-start items-start`}>
                <div className="flex flex-col items-center">
                    <img className="shadow-inset bg-black" src={props.img} alt="" />
                    <span className="lg:w-3/6 lg:h-1/6 text-gray-300 text-center text-sm text-opacity-90 mt-4">{props.title}</span>
                </div>
            </Link>
        </>
    )
}