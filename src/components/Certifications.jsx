'use client'
import { useState } from "react";
import Image from "next/image";

export default function Certifications(){
    const[hidden, setHidden] = useState(true);
    return(
        <div>
            <div className="flex justify-between px-10 items-center">
                <h1 className="m-0">Certifications</h1>                
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[2000px] opacity-100 scale-100 translate-y-0"}`}> 
                <div className="flex justify-around px-10 items-center p-1 mb-7">
                    <p className="frontend">Completed</p>
                    <p className="backend">In progress</p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
                    <Image 
                        src="/front_end.png"
                        width={500}
                        height={500}
                        alt="Meta Front End Developer Certification"
                        className="mx-auto my-3 w-3/4 border-4 border-emerald-400"
                    />
                     <Image 
                        src="/cyber_security.png"
                        width={500}
                        height={500}
                        alt="Google Cyber Security Certification"
                        className="mx-auto w-3/4 my-3 border-4 border-emerald-400"
                    />
                    <Image 
                        src="/backend_placeholder.jpeg"
                        width={500}
                        height={500}
                        alt="Meta Back End Developer Certification"
                        className="mx-auto my-3 w-3/4 border-4 border-amber-300"
                    />
                </div>

            </div>
        </div>
    );
}