import Image from "next/image";
import text from "../utils/text.json";

export default function Hero(){     
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
                        <h1>{text.hero.greetings.english}</h1>
                        <h1>{text.hero.im.english} <span className="underline decoration-emerald-400 underline-offset-8 decoration-4">Fabio Bauleo</span></h1>
                    </div>
                    <h2>{text.hero.job.english}</h2> 
                    <h3>"Maybe I don't know how to do it yet but I will figure it out!"</h3>
                    <a 
                        className="dark:text-slate-200 mt-20 sm:self-start sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4" 
                        href="#contact">
                            CONTACT ME
                    </a>       
                </div>            
            </div>
            
        </div>
    );
}