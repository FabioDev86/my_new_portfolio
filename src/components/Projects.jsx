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
                <div className="flex flex-col content-center sm:flex-row sm:justify-left mx-10 mb-10">
                    <a href="https://todo-list-theta-tawny.vercel.app/" target="_blank" className="shrink-0">    
                        <Image 
                            src="/to-do-list.png"
                            width={300}
                            height={300}
                            alt="My TODO list project"
                            className="border-4 border-emerald-400 shadow-lg dark:shadow-stone-500 block mx-auto w-4/5"
                        />
                    </a> 
                    <div className="sm:text-left">
                        <h2 className="mt-5 sm:mt-0">TODO List</h2>
                        <a href="https://github.com/FabioDev86/front-end-mentor/tree/master/todo-list" target="_blank"><svg alt="My TODO list project repository" className="dark:fill-slate-200 w-8 my-2 mx-auto sm:mx-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <p>{
                            language === 'english' ? text.projects.to_do_list.english :
                            language === 'italiano' ? text.projects.to_do_list.italian :
                            text.projects.to_do_list.german
                         }</p>
                        <p>{
                            language === 'english' ? text.projects.english_cta :
                            language === 'italiano' ? text.projects.italian_cta :
                            text.projects.german_cta
                         }</p>
                    </div>                   
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-left mx-10 mb-10">
                    <a href="https://password-generator-silk-chi.vercel.app/" target="_blank" className="shrink-0">    
                        <Image 
                            src="/password-generator.png"
                            width={300}
                            height={300}
                            alt="My password generator project"
                            className="border-4 border-emerald-400 shadow-lg dark:shadow-stone-500 block mx-auto w-4/5"
                        />
                    </a> 
                    <div className="sm:text-left">
                        <h2 className="mt-5 sm:mt-0">Password Generator</h2>
                        <a href="https://github.com/FabioDev86/front-end-mentor/tree/master/password-generator" target="_blank"><svg alt="My password generator project repository" className="dark:fill-slate-200 w-8 my-2 mx-auto sm:mx-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                        <p>{
                            language === 'english' ? text.projects.password_generator.english :
                            language === 'italiano' ? text.projects.password_generator.italian :
                            text.projects.password_generator.german
                         }</p>
                        <p>{
                            language === 'english' ? text.projects.english_cta :
                            language === 'italiano' ? text.projects.italian_cta :
                            text.projects.german_cta
                         }</p>
                    </div>                   
                </div>                
            </div>
        </div>
    );
}