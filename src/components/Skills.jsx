'use client'
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function Skills() {
    const [hidden, setHidden] = useState(true);
    const { language } = useLanguage();
    return (
        <div>
            <div className="flex justify-between px-10 items-center">
                <h1 className="m-0">Skills</h1>

                <svg onClick={() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 transition ease-in-out delay-150 " + (!hidden ? "rotate-180" : "")} xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={`grid transition-all duration-500 ease-in-out ${hidden ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}>
                <div className="overflow-hidden">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-10 pb-10">
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">HTML</h2>
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">CSS</h2>
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Java Script</h2>
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">React</h2>
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">NextJs</h2>
                    <h2 className="frontend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Tailwind</h2>
                    <h2 className="backend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">SQL</h2>
                    <h2 className="backend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Python</h2>
                    <h2 className="backend bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Django</h2>
                    <h2 className="utility bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Figma</h2>
                    <h2 className="utility bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Git Hub</h2>
                    <h2 className="utility bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">VS Code</h2>
                    <h2 className="utility bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Linux Bash</h2>
                    <h2 className="electronics bg-white dark:bg-stone-900 border border-zinc-100 dark:border-stone-800 p-4 sm:p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center m-0">Arduino</h2>
                </div>
                </div>
            </div>
        </div>
    );
}