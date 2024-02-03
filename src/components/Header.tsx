import React from 'react'
import Image from "next/image"

export default function Header() {

    const heads = ["github", "frontend-mentor", "linkedin", "twitter"]

    return (
        <header className='flex justify-between items-center max-w-[1110px] m-auto mt-[39px] w-full absolute top-0 inset-x-0 z-30'>
            <a href='#' className='text-white text-[32px] leading-[32px] tracking-[-0.44px] font-bold'>mykescala</a>
            <ul className='flex gap-8 items-center mr-[29.51px]'>
                {
                    heads.map((head: string, index: number) => (
                        <li key={index}>
                            <Image
                                src={`/icon-${head}.svg`}
                                alt={`${head} icon`}
                                width={25}
                                height={25}
                            />
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}
