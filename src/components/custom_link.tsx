import Link from "next/link";
import React
, { ComponentProps } from "react";
export default function CustomLink(props: {
    href: string,
    text: string
}) {
    return(
        <div className="flex lg:items-center lg:justify-center text-xl">
            <Link href={props.href}>{props.text}</Link>
        </div>
    )
}