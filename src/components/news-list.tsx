import React from "react";

export default function NewsList(props: {
    children: React.ReactNode
}) {
    return(
        <div className="flex flex-col p-4">
            {props.children}
        </div> 
    )
}