import React from "react";

export default function Button(props: {
    text: string,
    className?: string,
    onClick?: () => void
}) {
    return(
        <>
            <button 
                onClick={props.onClick}
                className={`
                py-2 flex justify-center px-5 border-[1px] border-gray-300 rounded-full text-gray-300 ${props.className}
                hover:bg-white hover:text-black duration-300 ease-linear
                `}
            >   
                {props.text}
            </button>        
        </>
    )
}