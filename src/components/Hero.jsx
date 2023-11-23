import Image from "next/image";

export default function Hero(){
    return(
        <div>
            <div className="sm:text-left sm:flex flex-row-reverse">
                <Image 
                    src="/hero.png"
                    width={200}
                    height={300}
                    alt="My profile picture"
                    className="mx-auto w-1/2 mb-3 max-w-xs sm:mr-9 z-0"
                />
                <div className="mt-10 flex flex-col gap-4">
                    <div>
                        <h1>Nice to meet you!</h1>
                        <h1>I'm <span className="underline decoration-emerald-400 underline-offset-8 decoration-4">Fabio Bauleo</span></h1>
                    </div>
                    <h2>I'm a Front end Developer specialized in React</h2> 
                    <h2>"Maybe I don't know how to do it yet but I will figure it out!"</h2>
                    <button className="dark:text-slate-200 mt-20 sm:self-start sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4">VIEW MY PROJECTS</button>       
                </div>            
            </div>
            
        </div>
    );
}