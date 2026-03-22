import { useLanguage } from "@/contexts/LanguageProvider";

export default function LanguageMenu(props){
    const {changeLanguage} = useLanguage();
    return(
        <div className={`absolute left-0 w-full z-50 flex flex-col sm:items-start items-center transition-all duration-300 ease-in-out ${!props.isVisible ? "opacity-0 invisible -translate-y-4" : "opacity-100 visible translate-y-0"}`}>
            <ul className="flex flex-col items-center sm:items-start px-10 py-6 gap-3 bg-white/90 dark:bg-stone-950/90 backdrop-blur-md w-full border-b border-zinc-200 dark:border-stone-800 shadow-xl">
                <li className='text-xl sm:text-2xl font-medium text-slate-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer transition-colors' onClick={() => {changeLanguage('english'); props.setClicked(false)}}>English</li>
                <li className='text-xl sm:text-2xl font-medium text-slate-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer transition-colors' onClick={() => {changeLanguage('italiano'); props.setClicked(false)}}>Italiano</li>
                <li className='text-xl sm:text-2xl font-medium text-slate-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 cursor-pointer transition-colors' onClick={() => {changeLanguage('deutsch'); props.setClicked(false)}}>Deutsch</li>
            </ul>
        </div>
    );
}