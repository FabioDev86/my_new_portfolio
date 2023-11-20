'use client'
import { useState } from "react";

export default function Skills(){
    const[hidden, setHidden] = useState(true);
    return(
        <div className="z-10">
            <div className="flex justify-between px-10 items-center">
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">My Skills</h1>
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[500px] opacity-100 scale-100 translate-y-0"}`}> 
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">HTML</h1>
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">CSS</h1>
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">Java Script</h1>
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">React</h1>
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">NextJs</h1>
                <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">Tailwind</h1>
            </div>
        </div>
    );
}