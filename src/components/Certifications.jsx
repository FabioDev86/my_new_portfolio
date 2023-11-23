'use client'
import { useState } from "react";
import Image from "next/image";

export default function Certifications(){
    const[hidden, setHidden] = useState(true);
    return(
        <div>
            <div className="flex justify-between px-10 items-center">
                <h1>Certifications</h1>                
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[800px] opacity-100 scale-100 translate-y-0"}`}> 
                <div className="flex justify-around px-10 items-center p-1 mb-7">
                    <p className="frontend">Completed</p>
                    <p className="backend">In progress</p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
                    <Image 
                        src="/front_end.png"
                        width={50}
                        height={50}
                        alt="Meta Front End Developer Certification"
                        className="mx-auto w-1/2 mb-3 max-w-xs z-0 border-4 border-emerald-400"
                    />
                     <Image 
                        src="/cyber_security.png"
                        width={50}
                        height={50}
                        alt="Google Cyber Security Certification"
                        className="mx-auto w-1/2 mb-3 max-w-xs z-0 border-4 border-emerald-400"
                    />
                    <p className="backend">Meta Back End Developer</p>
                </div>

            </div>
        </div>
    );
}