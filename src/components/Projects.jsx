'use client'
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function Projects(){
    const[hidden, setHidden] = useState(true);
    const {language} = useLanguage();
    return(
        <div>
            <div className="flex justify-between px-10 items-center">
                <h1 className="m-0">{
                        language === 'english' ? text.projects.english_title :
                        language === 'italiano' ? text.projects.italian_title :
                        text.projects.german_title
                    }</h1>                
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[2000px] opacity-100 scale-100 translate-y-0"}`}> 
                <div className="grid md:grid-cols-3">
                    <a href="https://fabio-bauleo.app/" target="_blank">
                        <Image 
                            src="/old-portfolio.png"
                            width={500}
                            height={500}
                            alt="My old portfolio"
                            className="mx-auto my-3 w-3/4 border-4 border-emerald-400"
                        />
                    </a>
                </div>

            </div>
        </div>
    );
}