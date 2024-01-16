import { useLanguage } from "@/contexts/LanguageProvider";

export default function LanguageMenu(props){
    const {changeLanguage} = useLanguage();
    return(
        <div className="mb-4">
            <ul className={`transition-all delay-150 ease-in-out duration-300 ${!props.isVisible ? "max-h-0 opacity-1 scale-0" : "max-h-[800px] opacity-100 scale-100"}`}>
                <li className='text-2xl dark:text-slate-200' onClick={() => changeLanguage('english')}>English</li>
                <li className='text-2xl dark:text-slate-200' onClick={() => changeLanguage('italiano')}>Italiano</li>
                <li className='text-2xl dark:text-slate-200' onClick={() => changeLanguage('deutsch')}>Deutsch</li>
            </ul>

        </div>
    );
}