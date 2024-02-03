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
      <div className="relative mb-[104px]">
        <div className="h-[720px] flex flex-col justify-center z-20">
          <h1 className="text-[88px] leading-[88px] tracking-[-2.5px] font-bold max-w-[706px] w-full">Nice to meet you! {"I'm"} <span className="underline decoration-[#4EE1A0] underline-offset-[9px] z-20">Myk Escala</span>.</h1>
          <p className="max-w-[445px] w-full font-medium text-lg leading-[28px] tracking-normal text-[#D9D9D9] mt-[43px] mb-[66px]">Based in the PH, I’m a Fulllstack developer passionate about building accessible web apps that users love.</p>
          <button className="text-[16px] leading-[26px] tracking-[2.29px] font-bold pb-[10px] border-b-2 border-[#4EE1A0] w-fit">CONTACT ME</button>
        </div>
        <div className="absolute right-0 top-0 -z-10">
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
      <div className="border-t border-[#fff] pt-[72px] mb-[140px]">
        <div className="grid grid-cols-3 gap-y-[58px]">
          {
            langs.map((lang: language, index: number) => (
              <div key={index} className="flex flex-col gap-[14px] ">
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
