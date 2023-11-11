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
                    className="mx-auto w-1/2 mb-3 max-w-xs sm: z-0"
                />
                <div className="mt-10">
                    <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl py-1 font-bold sm:mx-10 z-10">Nice to meet you!</h1>
                    <h1 className="dark:text-slate-200 text-3xl md:text-4xl lg:text-5xl  py-1 font-bold sm:mx-10 z-10">I'm <span className="underline decoration-emerald-400 underline-offset-8 decoration-4">Fabio Bauleo</span></h1>
                    <p className="dark:text-slate-200  text-sm md:text-lg lg:text-xl sm:mx-10 mt-10 z-10">Based in Italy, but ready to move at any time. <br/> I'm a Front end Developer specialized in React</p>
                    <button className="dark:text-slate-200 mt-20 sm:text-xl sm:mx-10 underline decoration-emerald-400 underline-offset-4 decoration-4">CONTACT ME</button>       
                </div>            
            </div>
            
        </div>
    );
}