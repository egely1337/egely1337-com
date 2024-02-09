import React from "react";

import Navbar from "./navbar";

interface ChildComponentProps {
    children: React.ReactNode,
    title: string,
    author: string,
    date: string 
}

export default function NewsLayout(ChildComponentProps: ChildComponentProps) {
    const [srcLoaded, setLoaded] = React.useState<boolean>(false);

    React.useEffect(() => {
        const elements = document.querySelectorAll("img");
        const len = elements.length;
        let loaded = 0;

        const onLoad = () => {
            loaded = loaded + 1;
            console.log(loaded);
            if(loaded === len) {
                setLoaded(true);
                console.log(srcLoaded);
            }
        }

        elements.forEach(element => {
            element.addEventListener('load', onLoad);
        })

        return () => {
            elements.forEach(element => {
                element.removeEventListener('load', onLoad);
            })
        }
    }, []);

    return(
        <>
            <Navbar/>
            <div className={`relative`}>
                <div className={` absolute w-full flex flex-col lg:flex-row p-8 lg:p-12 font-inter 
                    ${srcLoaded ? "opacity-100" : "opacity-0"} duration-1000
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