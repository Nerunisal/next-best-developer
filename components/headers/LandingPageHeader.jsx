import Image from 'next/image'
import bannerImage from './../../public/banner.png'

function LandingPageHeader() {  
    return (
        <header className=' p-10 bg-gradient-to-r from-rose-100 to-teal-100'>
        
        <figure className='flex flex-col justify-center items-center
        md:flex-row  gap-8
        '>
            <figcaption >
            <h1 className='font-bold text-4xl text-teal-500 text-center
                md:text-3xl lg:text-5xl xl:text-6xl
            '>
                Next Dev Finding Your Perfect Match
            </h1>
            </figcaption>
            
            <Image
            src={bannerImage}
            alt='next best developer hiring thinng'
            />

        </figure>
        </header>
    );
}

export default LandingPageHeader;
