import React from "react";

import {
    IoAlertCircleSharp
} from 'react-icons/io5';

export default function Infobox(props: {
    className?: string,
    text: string
}) {
    return(
        <div className={`p-4 rounded-md bg-opacity-60 bg-green-600 w-3/6 h-full flex flex-row items-center ${props.className}`}>
            <IoAlertCircleSharp size={32} className="text-gray-300 opacity-70 mr-3"/>
            <span className="font-inter text-gray-200 text-opacity-80 text-base">{props.text}</span>
        </div>
    )
}