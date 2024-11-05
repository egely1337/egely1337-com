import React from "react";


export default function Layout(props: {
    children: React.ReactNode
}) {
    return(
        <div className={"lg:w-1/2 flex flex-col p-4 gap-4"}>
            {props.children}
        </div>
    )
}