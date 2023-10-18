import React from "react";

import Link from "next/link";

import nav_config from '@/configs/nav-config.json';

export default function Navbar(props: {

}) {
    return(
        <>
            <nav className="w-full h-36 p-16 flex">
                <div className="w-full h-full flex flex-row sm:justify-start justify-center items-center gap-5">
                    <span className="font-bold sm:text-4xl text-2xl mr-4">egely</span>
                    {nav_config.map((value, index) => 
                        <Link className="nav-text sm:text-base text-xs" key={index} href={value.href}>{value.text}</Link>
                    )}
                </div>
            </nav>
        </>
    )
}