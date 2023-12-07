import React from "react";

import Link from "next/link";
import { IconType } from "react-icons";

export default function LinkButton(props: {
    text: string,
    href: string,
    className?: string,
    icon?: IconType
}) {
    return(
        <>
            <Link 
                href={props.href} 
                className={`
                group py-2 flex justify-center px-5 border-[1px] border-gray-300 rounded-full text-gray-300 ${props.className}
                hover:bg-white hover:text-black duration-300 ease-linear items-center gap-2
                `}
            >   
                {props.text}
                {props.icon && 
                    <props.icon className="text-white group-hover:text-black duration-300 group-hover:translate-x-0.5"/>
                }
            </Link>        
        </>
    )
}