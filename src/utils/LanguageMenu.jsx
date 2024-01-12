import { useLanguage } from "@/contexts/LanguageProvider";
import { useState } from "react";

export default function LanguageMenu(props){
    const {changeLanguage} = useLanguage();
    return(
        <div className={`transition-all delay-150 ease-in-out duration-300 ${!props.isVisible ? " max-h-0 opacity-1 scale-0 -translate-y-[20px]" : "max-h-[800px] opacity-100 scale-100 translate-y-0"}`}>
            <ul>
                <li className='text-2xl m-0 p-0 dark:text-slate-200' onClick={() => changeLanguage('english')}>English</li>
                <li className='text-2xl m-0 p-0 dark:text-slate-200' onClick={() => changeLanguage('italiano')}>Italiano</li>
                <li className='text-2xl m-0 p-0 dark:text-slate-200' onClick={() => changeLanguage('deutsch')}>Deutsch</li>
            </ul>

        </div>
    );
}