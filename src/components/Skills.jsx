'use client'
import { useState } from "react";

export default function Skills(){
    const[hidden, setHidden] = useState(true);
    return(
        <div className="z-10">
            <div className="flex justify-between px-10 items-center">
                <h1>My Skills</h1>
                
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[800px] opacity-100 scale-100 translate-y-0"}`}> 
                <div className="flex justify-around px-10 items-center p-1 mb-7">
                    <p className="frontend">Front End</p>
                    <p className="backend">Back End</p>
                    <p className="utility">Generic</p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
                    <h2 className="frontend">HTML</h2>
                    <h2 className="frontend">CSS</h2>
                    <h2 className="frontend">Java Script</h2>                
                    <h2 className="frontend">React</h2>
                    <h2 className="frontend">NextJs</h2>
                    <h2 className="frontend">Tailwind</h2>
                    <h2 className="backend">SQL</h2>
                    <h2 className="backend">Python</h2>
                    <h2 className="backend">Django</h2>                                
                    <h2 className="utility">Figma</h2>
                    <h2 className="utility">Git Hub</h2>
                    <h2 className="utility">VS Code</h2>
                </div>

            </div>
        </div>
    );
}