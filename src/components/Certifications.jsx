'use client'
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function Certifications() {
    const [hidden, setHidden] = useState(true);
    const { language } = useLanguage();
    return (
        <div>
            <div className="flex justify-between px-10 items-center">
                <h1 className="m-0">{
                    language === 'english' ? text.certifications.title.english :
                        language === 'italiano' ? text.certifications.title.italiano :
                            text.certifications.title.deutsch
                }</h1>
                <svg onClick={() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "")} xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={`grid transition-all duration-500 ease-in-out ${hidden ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}>
                <div className="overflow-hidden">
                    <div className="grid md:grid-cols-3 pt-6 pb-10">
                        <Image
                            src="/front_end.png"
                            width={500}
                            height={500}
                            alt="Meta Front End Developer Certification"
                            className="mx-auto my-3 w-10/12 sm:w-3/4 rounded-2xl shadow-md border border-zinc-200 dark:border-stone-700 transition-transform hover:scale-[1.02]"
                        />
                        <Image
                            src="/cyber_security.png"
                            width={500}
                            height={500}
                            alt="Google Cyber Security Certification"
                            className="mx-auto my-3 w-10/12 sm:w-3/4 rounded-2xl shadow-md border border-zinc-200 dark:border-stone-700 transition-transform hover:scale-[1.02]"
                        />
                        <Image
                            src="/backend_placeholder.jpeg"
                            width={500}
                            height={500}
                            alt="Meta Back End Developer Certification"
                            className="mx-auto my-3 w-10/12 sm:w-3/4 rounded-2xl shadow-md border border-zinc-200 dark:border-stone-700 opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100 hover:scale-[1.02]"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}