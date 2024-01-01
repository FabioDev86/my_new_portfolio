import Image from "next/image";
import text from "../utils/text.json";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function Hero(){     
    const {language} = useLanguage(); 
    return(
        <div>
            <div className="sm:text-left sm:flex flex-row-reverse">
                <Image 
                    src="/hero.jpg"
                    width={200}
                    height={300}
                    alt="My profile picture"
                    className="mx-auto w-1/2 mb-3 max-w-xs sm:mr-9 z-0"
                />
                <div className="mt-10 flex flex-col gap-4">
                    <div>
                        <h1>{
                                language === 'english' ? text.hero.greetings.english
                                : language === 'italiano' ? text.hero.greetings.italiano
                                : text.hero.greetings.deutsch
                            }
                        </h1>
                        <h1>{
                                language === 'english' ? text.hero.im.english
                                : language === 'italiano' ? text.hero.im.italiano
                                : text.hero.im.deutsch
                            } <span className="underline decoration-emerald-400 underline-offset-8 decoration-4">Fabio Bauleo</span>
                        </h1>
                    </div>
                    <h2>{
                            language === 'english' ? text.hero.job.english
                            : language === 'italiano' ? text.hero.job.italiano
                            : text.hero.job.deutsch
                        }
                    </h2> 
                    <h3>{
                            language === 'english' ? text.hero.motto.english
                            : language === 'italiano' ? text.hero.motto.italiano
                            : text.hero.motto.deutsch
                        }
                    </h3>
                    <a 
                        className="dark:text-slate-200 mt-20 sm:self-start sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4" 
                        href="#contact">{
                            language === 'english' ? text.hero.button.english
                            : language === 'italiano' ? text.hero.button.italiano
                            : text.hero.button.deutsch
                        }
                    </a>       
                </div>            
            </div>
            
        </div>
    );
}