import Image from 'next/image';
import React from 'react';
import hero from "../../../../public/assets/banner/heroImg.png"

const CityBanner = ({ banner, title, subTitle }) => {
    return (
        <section className='relative'>
            <div className='relative'>
                <Image src={banner} alt='Banner' />

            </div>
            <div className='absolute top-0 w-full h-full flex items-center justify-center text-center bg-black/60'>

                <div className='w-full flex flex-col items-center justify-center gap-2 lg:gap-10 z-10'>
                    <h1 className='max-w-4xl text-xl lg:text-5xl font-semibold text-white'>{title}</h1>
                    <p className='text-lg lg:text-4xl text-white font-light'>{subTitle}</p>

                    <div className='w-[95%] lg:w-3/5 mx-auto relative flex items-center '>
                        <input type="text" className='bg-white placeholder:text-sm placeholder:font-light px-4 py-4 rounded outline-none border-none focus:border-none w-full' placeholder='Enter your home address' />
                        <input type="submit" className="text-white bg-primary px-4 py-3 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 rounded-md absolute right-2" value="Get My Free Offer" />
                    </div>
                </div>


                <div className='absolute bottom-0 right-0 hidden lg:flex'>
                    <Image src={hero} alt='Hero' className='w-96' />
                </div>
            </div>
        </section>
    );
};

export default CityBanner;