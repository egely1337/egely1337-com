import React from "react";
import { IconType } from "react-icons";

export default function Button(props: {
    text: string,
    className?: string,
    onClick?: () => void,
    icon?: IconType
}) {
    return(
        <>
            <button 
                onClick={props.onClick}
                className={`
                py-2 flex justify-center px-5 border-[1px] border-gray-300 rounded-full text-gray-300 ${props.className}
                group hover:bg-white hover:text-black duration-300 ease-linear
                `}
            >   
                <div className="flex flex-row gap-2 items-center">
                {props.text}
                {props.icon &&
                    <props.icon className="group-hover:text-black duration-300 text-white"/>
                }
                </div>
            </button>        
        </>
    )
}