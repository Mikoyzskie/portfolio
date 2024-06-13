'use client'

import Image from "next/image"
import Link from "next/link"

import { useForm } from 'react-hook-form'

import { sendMail } from "@/app/actions";

interface links {
    name: string;
    link: string;
}

interface IInitial {
    error: string;
    name: string;
    message: string;
    email: string;
}

const initialValues: IInitial = {
    error: "",
    name: "",
    message: "",
    email: ""
};



export default function Footer() {



    const heads = [
        { name: "github", link: "https://github.com/Mikoyzskie" },

        { name: "linkedin", link: "https://www.linkedin.com/in/mykescala/" },
        { name: "twitter", link: "https://twitter.com/SuspendedMikoy" },
    ]





    return (
        <footer id="footer" className='bg-[#242424] text-white mt-[87px] md:mt-[100px] lg:mt-[139px] py-[60px] md:pt-[84px] md:pb-[92px]'>
            <div className="max-w-[1440px] w-full m-auto relative px-[32px]">
                <div className='max-w-[1110px] w-full m-auto grid md:grid-cols-2 grid-cols-1 gap-12 md:gap-[220px] '>
                    <div className='flex flex-col gap-9'>
                        <h1 className="text-[40px] md:text-7xl lg:text-[88px] lg:leading-[88px] tracking-[-2.5px] font-bold text-center md:text-start">Contact</h1>
                        <p className='font-medium text-lg text-[#D9D9D9] text-center md:text-start md:max-w-none w-full max-w-[445px] mx-auto'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <form className='flex flex-col gap-8 items-end'>
                        <input type="text" name="name" className='required:border-[#FF6F5B] in valid:border-[#4EE1A0] focus:border-[#4EE1A0] w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px] pb-[17px] uppercase' placeholder='NAME' required />
                        <div className="w-full text-right relative">
                            <input type="email" name="email" className='w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px] pb-[17px] invalid:border-[#FF6F5B] peer' placeholder='EMAIL' />
                            <svg className="absolute right-0 top-1 peer-invalid:visible invisible" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                                <rect x="11" y="6" width="2" height="9" rx="1" fill="#FF6F5B" />
                                <rect x="11" y="17" width="2" height="2" rx="1" fill="#FF6F5B" />
                            </svg>

                            <span className="text-[#FF6F5B] text-xs tracking-[-0.17px] peer-invalid:visible invisible">Sorry, invalid format here</span>
                        </div>
                        <textarea name="message" id="" className='h-[107px] w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px]' placeholder='MESSAGE'></textarea>
                        <button type="submit" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">SEND MESSAGE</button>
                    </form>

                </div>
                <Image
                    alt=""
                    src={"/pattern-rings.svg"}
                    width={530}
                    height={129}
                    className="absolute -bottom-[40px] -left-[205px]"
                />
            </div>
            <div className="border-t mt-[87px] md:mt-[91px] mx-4 md:mx-8 lg:mx-auto max-w-[1110px]" >
                <nav className='flex justify-between items-center pt-[39px] md:pt-[47px] w-full lg:px-8 md:flex-row flex-col gap-5'>
                    <a href='#' className='text-white text-2xl md:text-[32px] md:leading-[32px] tracking-[-0.44px] font-bold'>mykescala</a>
                    <ul className='flex gap-8 items-center'>
                        {
                            heads.map((head: links, index: number) => (
                                <li key={index}>
                                    <Link href={head.link}>
                                        <Image
                                            src={`/icon-${head.name}.svg`}
                                            alt={`${head} icon`}
                                            width={25}
                                            height={25}
                                            className="fill-[#4EE1A0]"
                                        />
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
