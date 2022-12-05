<<<<<<< HEAD
function LandingPageHeader(props) {
    return (
        <header className=' h-screen p-8 bg-gradient-to-r from-rose-100 to-teal-100'>
            <img className='w-[70px] mx-auto pb-10' src="logo.svg" alt="next best developer" />
            <h1 className='font-bold pb-10 text-4xl text-indigo-500 text-center
                md:text-3xl lg:text-5xl xl:text-6xl
            '>
                Next Best Dev
            </h1>

            <h3 className='font-bold text-4xl text-sky-900 text-center
                md:text-2xl lg:text-2xl xl:text-2xl
            '>
                Finding the perfect next best dev for your business
            </h3>

=======
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
>>>>>>> master
        </header>
    );
}

<<<<<<< HEAD
export default LandingPageHeader;

=======
export default LandingPageHeader;
>>>>>>> master
