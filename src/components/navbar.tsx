import React from "react";

import Link from "next/link";

import nav_config from '@/configs/nav-config.json';

export default function Navbar(props: {

}) {
    return(
        <>
            <nav className="w-full h-36 p-16 flex">
                <div className="w-full h-full flex relative flex-row sm:justify-start justify-center items-center gap-5">
                    <Link href={"/"} className="font-bold text-gray-300 font-inter sm:text-4xl text-2xl mr-4">egely</Link>
                    <div className="flex items-center lg:ml-20 gap-8">
                        {nav_config.map((value, index) => 
                            <Link className="nav-text tracking-widest font-bold sm:text-base text-xs font-poppins" key={index} href={value.href}>{value.text}</Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}