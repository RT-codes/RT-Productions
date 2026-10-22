"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import { contactData } from '@/lib/data'
import { FaEnvelope } from 'react-icons/fa';



export default function Footer() {
    const { ref } = useSectionInView("Contact");
    const email = contactData[0].email;
    const emailLink = `mailto:${email}?subject=MailFromRTProductions`;
    const tagline = contactData[0].tagline;
    return (
        <div id='contact' ref={ref} className='flex flex-col pt-16 pb-2 justify-center items-center gap-2 relative bottom-0 h-[15rem] w-[100%] bg-gray-200 bg-opacity-50 dark:bg-white/[0.03] border-t-black/[0.03] dark:border-white/[0.06] border-2 mt-8 scroll-mt-28 mb-0'>
            <div className='flex justify-center items-center gap-2'>
                <a href={ emailLink } className='flex justify-center items-center gap-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 '>
                    <div className='flex justify-center items-center  text-2xl bg-white dark:bg-gray-800 dark:border-gray-700 w-[4rem] h-[4rem] rounded-[100%] border-4 box-border'>
                        <FaEnvelope /> 
                    </div>
                    <div className='block bg-slate-200 dark:bg-gray-800 hover:bg-slate-600/[0.1] dark:hover:bg-gray-700 transition-all duration-300  p-[1rem] hover:font-bold  text-slate-400 dark:text-slate-300'>
                            <p>Email now</p>
                    </div>
                </a>
            </div>
            
            <div className='mt-auto text-black/[0.48] dark:text-white/50 p-6 sm:p-0 text-center'>
                <p>{ tagline }</p>
            </div>

        </div>
    );
}
