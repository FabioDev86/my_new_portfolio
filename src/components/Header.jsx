import Image from 'next/image';

const icon_size = 30;

export default function Header(){
    return(
        <header className='flex justify-between content-center  m-[1.5rem] sm:m-[4rem]'>
            <h1 className='text-2xl'>fabiobauleo</h1>    
            <div className='flex gap-4 content-center'>
                <Image
                    src="/github.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="GitHub icon"
                />
                <Image
                    src="/linkedin.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="Linkedin icon"
                />
                <Image
                    src="/x.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="X icon"
                />
            </div>    
        </header>
    );
}