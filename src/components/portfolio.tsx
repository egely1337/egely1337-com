import React from "react";


export default function PortfolioItem(props: {
    className?: string
}) {
    return( 
        <>
            <div className={`${props.className} p-8 rounded-md border-[1px] border-gray-300`}>
                <span className="text-gray-300 text-2xl font-inter">hyeo</span>
            </div>
        </>
    )
}