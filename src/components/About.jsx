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
                <h1 className="m-0">About me</h1>
                <svg onClick = {() => setHidden(!hidden)} width="80px" height="80px" viewBox="0 0 24 24" className={"dark:fill-slate-200 " + (!hidden ? "rotate-180" : "") } xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.5L12 14.5L7 9.5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={`transition-all delay-150 ease-in-out duration-300 ${hidden ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[2000px] opacity-100 scale-100 translate-y-0"}`}> 
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[0] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{ 
                    language === 'english' ? text.about.english[1] :
                    language === 'italiano' ? text.about.italiano :
                    text.about.deutsch
                    }
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[2] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                        }
                    </a>{ 
                        language === 'english' ? text.about.english[3] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                    <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer?" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[4] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                        }
                    </a>
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[5] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[6] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[7] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[8] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[9] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
                <p className="mx-10 text-left">{
                        language === 'english' ? text.about.english[10] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                    <a href="mailto:fabio.bauleo.developer@gmail.com" className="underline decoration-emerald-400 underline-offset-4 decoration-2">{ 
                        language === 'english' ? text.about.english[11] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                        }
                    </a>{
                        language === 'english' ? text.about.english[12] :
                        language === 'italiano' ? text.about.italiano :
                        text.about.deutsch
                    }
                </p>
            </div>
        </div>
    );
}