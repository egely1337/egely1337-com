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
            <Link href={props.link} className={`${props.className} p-4 flex flex-col justify-center items-center`}>
                <img width={584} src={props.img} alt="" />
                <span className="text-gray-300 text-center text-sm text-opacity-90 mt-4">{props.title}</span>
            </Link>
        </>
    )
}