import React from 'react'
import Image from "next/image"
import Link from "next/link"

interface links {
    name: string;
    link: string;
}

export default function Header() {

    const heads = [
        { name: "github", link: "https://github.com/Mikoyzskie" },

        { name: "linkedin", link: "https://www.linkedin.com/in/mykescala/" },
        { name: "twitter", link: "https://twitter.com/SuspendedMikoy" },
    ]

    return (
        <header className='flex justify-between items-center max-w-[1110px] m-auto mt-5 md:mt-[39px] px-4 md:px-8 lg:px-0 w-full absolute top-0 inset-x-0 z-30 md:flex-row flex-col gap-5'>
            <a href='#' className='text-white text-[32px] leading-[32px] tracking-[-0.44px] font-bold'>mykescala</a>
            <ul className='flex gap-8 items-center mr-0 lg:mr-[29.51px]'>
                {
                    heads.map((head: links, index: number) => (
                        <li key={index}>
                            <Link href={head.link}>
                                <Image
                                    src={`/icon-${head.name}.svg`}
                                    alt={`${head} icon`}
                                    width={25}
                                    height={25}
                                />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}
