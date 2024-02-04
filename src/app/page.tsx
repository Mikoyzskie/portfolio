import Image from "next/image";
import Projects from "@/components/Projects";

interface language {
  lang: string;
  years: number;
}

export default function Home() {

  const langs = [
    { lang: "HTML", years: 2 },
    { lang: "CSS", years: 2 },
    { lang: "Sass", years: 2 },
    { lang: "Javascript", years: 1 },
    { lang: "React", years: 1 },
    { lang: "Typescript", years: 1 },
  ]

  return (
    <main className="max-w-[1110px] w-full m-auto text-white relative">
      <div className="relative md:mb-[60px] mb-[80px] lg:mb-[104px]">
        <div className="flex items-center justify-center mt-[50px] mb-[20px] md:hidden">
          <Image
            src={"/bnwtrans.png"}
            alt="hero"
            width={170}
            height={383}
            className="bg-gradient-to-t from-[#242424] to-[rgba(255,255,255,0) rounded-b-xl"
          />
        </div>
        <div className="md:h-[720px] h-auto flex flex-col justify-center z-20 px-4 md:px-8 lg:px-0 items-center md:items-start">
          <h1 className="text-[40px] leading-10 md:text-[72px] lg:text-[88px] md:leading-[72px] lg:leading-[88px] tracking-[-2.5px] font-bold md:max-w-[410px] lg:max-w-[706px] w-full md:text-start text-center">Nice to meet you! {"I'm"} <span className="underline decoration-[#4EE1A0] md:underline-offset-[9px] z-20 ">Myk Escala</span>.</h1>
          <p className="max-w-[445px] w-full font-medium text-lg leading-[28px] tracking-normal text-[#D9D9D9] mt-6 md:mt-[43px] mb-6 md:mb-[66px] md:text-start text-center">Based in the PH, I’m a Fulllstack developer passionate about building accessible web apps that users love.</p>
          <a href="#footer" className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit hover:text-[#4EE1A0]">CONTACT ME</a>
        </div>
        <div className="absolute right-0 top-0 -z-10 md:visible invisible">
          <div className="relative">
            <Image
              src={"/bnw.jpg"}
              alt="hero"
              width={890}
              height={1440}
              className="h-[720px] w-[445px] rounded-b-2xl"
            />
            <svg className="absolute -left-[64px] bottom-[70px]" xmlns="http://www.w3.org/2000/svg" width="129" height="129"><circle cx="830.5" cy="585.5" r="64" fill="none" stroke="#FFF" transform="translate(-766 -521)" /></svg>
          </div>
        </div>
      </div>
      <Image
        alt=""
        src={"/pattern-rings.svg"}
        width={530}
        height={129}
        className="absolute top-[133px] -left-[261px]"
      />
      <div className="border-t border-[#fff] pt-[40px] md:pt-[56px] lg:pt-[72px] md:mb-[100px] mb-[80px] lg:mb-[140px] lg:px-0 mx-[32px] md:mx-[32px] lg:mx-0 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 md:gap-y-[58px] ">
          {
            langs.map((lang: language, index: number) => (
              <div key={index} className="flex flex-col gap-[14px] items-center justify-center md:items-start md:justify-normal">
                <h1 className="font-bold text-[48px] leading-[56px] tracking-[-1.5px]">{lang.lang}</h1>
                <p className="text-[#D9D9D9] text-lg leading-[28px] tracking-normal font-medium">{lang.years} Years Experience</p>
              </div>
            ))
          }
        </div>
      </div>
      <Projects />
    </main>
  );
}
