import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";


export default function MediaIcon(props: {
    tooltipText: string,
    mediaIcon: IconType,
    href: string,
}) {
    const [onMouseDown, setMouseDown] = React.useState<boolean>(false);

    return(
        <Link 
            onMouseEnter={() => setMouseDown(true)}
            onMouseLeave={() => setMouseDown(false)} 
            href={props.href} 
            className="relative"
        >
            <
                props.mediaIcon
                size={24}
                className="text-gray-400 cursor-pointer hover:-translate-y-0.5 hover:text-gray-300 duration-300 ease-in-out"
            />
            <div className={`absolute -left-[16px] -top-[32px] font-inter hidden text-xs animate-opacity duration-300 bg-white py-1 px-2 rounded-md`}>
                {props.tooltipText}
            </div>
        </Link>
    )
}