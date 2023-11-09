import Image from "next/image";

export default function Hero(){
    return(
        <div className="sm:text-left">
            <Image 
                src="/hero.png"
                width={200}
                height={300}
                alt="My profile picture"
                className="mx-auto w-1/2 mb-3"
            />
            <h1 className="dark:text-slate-200 text-3xl font-bold py-2 ">Nice to meet you!</h1>
            <h1 className="dark:text-slate-200 text-3xl font-bold py-2">I'm <span className="underline decoration-emerald-400 underline-offset-8 decoration-4">Fabio Bauleo</span></h1>
            <p className="dark:text-slate-200 p-4 text-sm">Based in Italy, but ready to move at any time. I'm a Front end Developer specialized in React</p>
            <button className="dark:text-slate-200 underline decoration-emerald-400 underline-offset-4 decoration-4">CONTACT ME</button>
        </div>
    );
}