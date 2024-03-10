import React from "react";

import Navbar from "./navbar";

interface ChildComponentProps {
    children: React.ReactNode,
    title: string,
    author: string,
    date: string 
}

export default function NewsLayout(ChildComponentProps: ChildComponentProps) {

    return(
        <>
            <Navbar/>
            <div className={`relative`}>
                <div className={` absolute w-full flex flex-col lg:flex-row p-8 lg:p-12 font-inter 
                    duration-1000
                `}>
                    <div className="w-full lg:w-4/6 flex flex-col text-gray-300">
                        <span className="news-title">{ChildComponentProps.title}</span>
                        <span className="news-author">by {ChildComponentProps.author}</span>
                        {ChildComponentProps.children}
                        <span className="text-opacity-80 mt-8">{`Edited on: ${ChildComponentProps.date}`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}