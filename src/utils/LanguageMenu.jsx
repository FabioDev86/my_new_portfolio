import { useLanguage } from "@/contexts/LanguageProvider";

export default function LanguageMenu(props){
    const {changeLanguage} = useLanguage();
    return(
        <div>
            <ul className={`transition-all delay-150 ease-in-out duration-300 ${!props.isVisible ? "max-h-0 opacity-1 scale-0" : "max-h-[800px] opacity-100 scale-100"}`}>
                <li className='text-2xl dark:text-slate-200 cursor-pointer' onClick={() => {changeLanguage('english'); props.setClicked(false)}}>English</li>
                <li className='text-2xl dark:text-slate-200 cursor-pointer' onClick={() => {changeLanguage('italiano'); props.setClicked(false)}}>Italiano</li>
                <li className='text-2xl dark:text-slate-200 cursor-pointer' onClick={() => {changeLanguage('deutsch'); props.setClicked(false)}}>Deutsch</li>
            </ul>
        </div>
    );
}