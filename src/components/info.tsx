import Link from 'next/link';
import React from 'react';
import { MdAnnouncement } from "react-icons/md";


export default function InfoBox(props: {
    text: string,
    href: string
}) {
    return(
        <Link href={props.href} className='flex gap-2 sm:p-4 p-2 bg-indigo-600 hover:bg-indigo-700 duration-100 mt-2 items-center rounded-md'>
            <MdAnnouncement className='text-white text-gray-200' size={18}/>
            <span className='font-poppins sm:text-sm text-xs font-bold text-gray-200'>{props.text}</span>
            <span className='text-xs text-gray-200 font-poppins'>{"(click to mail me)"}</span>
        </Link>
    )
}