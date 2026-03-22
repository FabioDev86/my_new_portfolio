'use client'
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import text from "../utils/text.json";

export default function About(){
    const[hidden, setHidden] = useState(true);
    const {language} = useLanguage();
    return(
        <div>
            <div className="flex justify-between px-10 items-center"> 
                <h1 className="m-0">{
                        language === 'english' ? text.about.english_title :
                        language === 'italiano' ? text.about.italian_title :
                        text.about.german_title
                    }</h1>
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className={`grid transition-all duration-500 ease-in-out ${hidden ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}>
                <div className="overflow-hidden">
                    <div className="bg-zinc-50 dark:bg-stone-900/50 rounded-3xl p-6 sm:p-10 mx-4 sm:mx-10 mt-6 shadow-none md:shadow-inner"> 
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[0] :
                        language === 'italiano' ? text.about.italiano[0] :
                        text.about.deutsch[0]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{ 
                    language === 'english' ? text.about.english[1] :
                    language === 'italiano' ? text.about.italiano[1] :
                    text.about.deutsch[1]
                    }
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[2] :
                        language === 'italiano' ? text.about.italiano[2] :
                        text.about.deutsch[2]
                        }
                    </a>{ 
                        language === 'english' ? text.about.english[3] :
                        language === 'italiano' ? text.about.italiano[3] :
                        text.about.deutsch[3]
                    }
                    <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[4] :
                        language === 'italiano' ? text.about.italiano[4] :
                        text.about.deutsch[4]
                        }
                    </a>
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[5] :
                        language === 'italiano' ? text.about.italiano[5] :
                        text.about.deutsch[5]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[6] :
                        language === 'italiano' ? text.about.italiano[6] :
                        text.about.deutsch[6]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[7] :
                        language === 'italiano' ? text.about.italiano[7] :
                        text.about.deutsch[7]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[8] :
                        language === 'italiano' ? text.about.italiano[8] :
                        text.about.deutsch[8]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[9] :
                        language === 'italiano' ? text.about.italiano[9] :
                        text.about.deutsch[9]
                    }
                </p>
                <p className="mx-0 sm:mx-0 text-left text-zinc-700 dark:text-stone-300 mb-4 leading-relaxed text-base sm:text-lg">{
                        language === 'english' ? text.about.english[10] :
                        language === 'italiano' ? text.about.italiano[10] :
                        text.about.deutsch[10]
                    }
                    <a href="mailto:fabio.bauleo.developer@gmail.com" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[11] :
                        language === 'italiano' ? text.about.italiano[11] :
                        text.about.deutsch[11]
                        }
                    </a>{
                        language === 'english' ? text.about.english[12] :
                        language === 'italiano' ? text.about.italiano[12] :
                        text.about.deutsch[12]
                    }
                </p>
                    </div>
                </div>
            </div>
        </div>
    );
}