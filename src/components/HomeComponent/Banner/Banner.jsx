import React from 'react';
import banner from "../../../../public/assets/banner/banner1.png";
import hero from "../../../../public/assets/banner/heroImg.png";
import Image from 'next/image';

const Banner = () => {
    return (
        <section className='relative'>
            <div className='relative'>
                <Image src={banner} alt='Banner' />
                <div className='absolute bottom-0 right-0 hidden lg:flex'>
                    <Image src={hero} alt='Hero' className='w-96' />
                </div>
            </div>
            <div className='absolute top-0 lg:top-8 w-full h-full flex items-center justify-center text-center'>
                <div className='w-full flex flex-col items-center justify-center gap-2 lg:gap-10'>
                    <h1 className='max-w-2xl text-xl lg:text-4xl font-bold text-white'>Sell Your Home In Any Condition. Close In Weeks.</h1>
                    <p className='text-lg lg:text-5xl text-white font-light'>No showings, no repairs, no stress.</p>

                    <div className='w-[95%] lg:w-3/5 mx-auto relative flex items-center '>
                        <input type="text" className='bg-white placeholder:text-sm placeholder:font-light px-4 py-4 rounded outline-none border-none focus:border-none w-full' placeholder='Enter your home address' />
                        <input type="submit" className="text-white bg-primary px-4 py-3 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 rounded-md absolute right-2" value="Get My Free Offer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;