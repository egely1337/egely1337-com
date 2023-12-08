import React
 from "react";


export default function NewsParagraph(props: {
    text: string
}) {
    return(
        <p className="mt-4">
            {props.text}            
        </p>
    )
}