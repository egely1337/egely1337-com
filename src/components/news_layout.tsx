import React from "react";

import Navbar from "./navbar";

interface ChildComponentProps {
    children: React.ReactNode;
  }

export default function NewsLayout(ChildComponentProps: ChildComponentProps) {
    return(
        <>
            <Navbar/>
            <div className="relative">
                <div className="absolute w-full flex flex-col lg:flex-row p-8 lg:p-12 font-inter">
                    <div className="w-full lg:w-4/6 flex flex-col text-gray-300">
                        {ChildComponentProps.children}
                    </div>
                    <div className="w-full lg:w-1/6 flex flex-col">
                        
                    </div>
                </div>
            </div>
        </>
    )
}