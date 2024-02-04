import Image from "next/image"

interface projects {
    image: string;
    title: string;
    languages: string[];
    site: string;
    github: string;
}

export default function Projects() {

    const projects = [
        { image: "notedpo.png", title: "noted po", languages: ["nextjs", "Typescript", "openai", "prisma", "mongodb"], site: "thttps://nextjs-ai-note-app-five.vercel.app/", github: "https://github.com/Mikoyzskie/nextjs-ai-note-app" },
        { image: "dictionary.webp", title: "dictionary app", languages: ["Nextjs", "tailwind", "typescript", "api"], site: "https://fm-dictionary-six.vercel.app/", github: "https://github.com/Mikoyzskie/fm-dictionary" },
        { image: "ecom.webp", title: "E-commerce Mockup", languages: ["Nextjs", "tailwind", "typescript"], site: "https://fm-ecommerce-five.vercel.app/", github: "https://github.com/Mikoyzskie/fm-ecommerce" },
        { image: "handy.png", title: "Handy Manong", languages: ["PHP", "Javascript", "css", "html"], site: "http://handymanong.lovestoblog.com/?i=2", github: "https://github.com/Mikoyzskie/handy-manong" },
        { image: "chat.webp", title: "Chat App Landing Page", languages: ["Nextjs", "tailwind", "typescript", "framer-motion"], site: "https://fm-chat-app-chi.vercel.app/", github: "https://github.com/Mikoyzskie/fm-chat-app" },
        { image: "nft.webp", title: "NFT preview", languages: ["Vite", "scss", "Javascript", "netlify"], site: "https://moonlit-heliotrope-57f750.netlify.app/", github: "https://github.com/Mikoyzskie/nft-preview" },
        { image: "zanda.jpg", title: "Zanda Directories", languages: ["nextjs", "shadcn", "typescript", "directus"], site: "https://zanda-draft.vercel.app/", github: "private" },

    ]

    return (
        <div className="lg:px-0 md:px-[32px] px-4">
            <div className="flex items-center justify-between mb-[40px] md:mb-[80px]">
                <h1 className="text-[40px] md:text-7xl lg:text-[88px] lg:leading-[88px] tracking-[-2.5px] font-bold">Projects</h1>
                <a href="#footer" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">CONTACT ME</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[30px]">
                {
                    projects.map((project: projects, index: number) => (
                        <div className="flex flex-col gap-5" key={index}>
                            <div className="relative group overflow-hidden">
                                <Image
                                    src={`/${project.image}`}
                                    alt="Project Thumbnail"
                                    width={540}
                                    height={400}
                                    className="w-full"
                                />
                                <div className="absolute bg-black w-full h-full bg-opacity-75 flex flex-col items-center justify-center gap-12 transition-all duration-200 -bottom-[540px] group-hover:bottom-0">
                                    <a href={project.site} target="_blank" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">PREVIEW PROJECT</a>
                                    {
                                        project.github !== "private" ?
                                            (
                                                <a href={project.github} target="_blank" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">VIEW CODE</a>
                                            ) :
                                            (
                                                ""
                                            )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-[7px]">
                                <h3 className="uppercase font-bold text-2xl leading-8 tracking-normal">{project.title}</h3>
                                <div className="flex flex-wrap gap-[18px] gap-y-1 text-[#D9D9D9] uppercase font-medium text-lg leading-[28px] tracking-normal">
                                    {
                                        project.languages.map((language: string, index: number) => (
                                            <p key={index}>{language}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex gap-[30px] visible lg:invisible">
                                <a href={project.site} target="_blank" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">PREVIEW PROJECT</a>
                                {
                                    project.github !== "private" ?
                                        (
                                            <a href={project.github} target="_blank" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">VIEW CODE</a>
                                        ) :
                                        (
                                            ""
                                        )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
