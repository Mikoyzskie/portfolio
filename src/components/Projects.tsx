import Image from "next/image"

interface projects {
    image: string;
    title: string;
    languages: string[];
}

export default function Projects() {

    const projects = [
        { image: "thumbnail-project-1-large", title: "project-1", languages: ["HTML", "CSS"] },
        { image: "thumbnail-project-2-large", title: "project-2", languages: ["HTML", "CSS", "Javascript"] },
    ]

    return (
        <div>
            <div className="flex items-center justify-between mb-[80px]">
                <h1 className="text-[88px] leading-[88px] tracking-[-2.5px] font-bold">Projects</h1>
                <button className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit">CONTACT ME</button>
            </div>
            <div className="grid grid-cols-2 gap-[30px]">
                {
                    projects.map((project: projects, index: number) => (
                        <div className="flex flex-col gap-5" key={index}>
                            <Image
                                src={`/${project.image}.webp`}
                                alt="Project Thumbnail"
                                width={540}
                                height={400}
                            />
                            <div className="flex flex-col gap-[7px]">
                                <h3 className="uppercase font-bold text-2xl leading-8 tracking-normal">{project.title}</h3>
                                <p className="flex gap-[18px] text-[#D9D9D9] uppercase font-medium text-lg leading-[28px] tracking-normal">
                                    {
                                        project.languages.map((language: string, index: number) => (
                                            <span key={index}>{language}</span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
