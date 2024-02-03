import Image from "next/image"

export default function Footer() {
    return (
        <footer className='bg-[#242424] text-white mt-[139px] pt-[84px] pb-[92px]'>
            <div className="max-w-[1440px] w-full m-auto relative">
                <div className='max-w-[1110px] w-full m-auto grid grid-cols-2 gap-[220px] '>
                    <div className='flex flex-col gap-9'>
                        <h1 className="text-[88px] leading-[88px] tracking-[-2.5px] font-bold">Contact</h1>
                        <p className='font-medium text-lg text-[#D9D9D9]'>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <div className='flex flex-col gap-8 items-end'>
                        <input type="text" className='w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px] pb-[17px]' placeholder='NAME' />
                        <input type="email" className='w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px] pb-[17px]' placeholder='EMAIL' />
                        <textarea name="" id="" className='h-[107px] w-full bg-transparent outline-none border-b tracking-[-0.22px] text-base font-medium leading-[26px]' placeholder='MESSAGE'></textarea>
                        <button className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit">SEND MESSAGE</button>
                    </div>

                </div>
                <Image
                    alt=""
                    src={"/pattern-rings.svg"}
                    width={530}
                    height={129}
                    className="absolute -bottom-[40px] -left-[205px]"
                />
            </div>
        </footer>
    )
}
