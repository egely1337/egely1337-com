import Link from 'next/link';
import React from 'react';
import { MdAnnouncement } from "react-icons/md";


export default function InfoBox(props: {
    text: string,
    href: string
}) {
    return(
        <Link href={props.href} className='justify-center flex underline gap-2 mt-8 text-center items-center'>
            <span className='font-mono'>{props.text}</span>
        </Link>
    )
}