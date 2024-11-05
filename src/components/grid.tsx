import { useTheme } from "@/util/ThemeProvider";
import React from "react";


export default function Grid(props: {

}) {
    const theme = useTheme();

    return(
        <div className="w-full h-screen top-0 left-0 fixed -z-10">
            <div className={`
                absolute inset-0 
                -z-10 h-full 
                w-full
                duration-300
                ease-in 
                bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
                linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
                bg-[size:14px_24px]
            `}/>
        </div>
    )
}