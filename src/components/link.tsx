import React from "react";

import Link from "next/link";

export default function LinkButton(props: {
    text: string,
    href: string,
    className?: string
}) {
    return(
        <>
            <Link 
                href={props.href} 
                className={`
                py-2 flex justify-center px-5 border-[1px] border-gray-300 rounded-full text-gray-300 ${props.className}
                hover:bg-white hover:text-black duration-300 ease-linear
                `}
            >   
                {props.text}
            </Link>        
        </>
    )
}