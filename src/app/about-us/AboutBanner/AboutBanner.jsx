import Image from 'next/image';
import React from 'react';
import banner from "../../../../public/assets/banner/banner1.png";
import hero from "../../../../public/assets/banner/heroImg.png";

const AboutBanner = () => {
    return (
        <section className='relative w-full h-96'>
            <div className='w-full h-full'>
                <Image src={banner} alt='Banner' className='w-full h-full' />
            </div>
            <div className='absolute top-0 w-full h-full flex items-center justify-center text-center bg-primary/70'>
                <div>
                    <h1 className='font-bold text-4xl text-white'>About Tarek Buys Houses
                    </h1>
                </div>
                <div className='h-full lg:flex items-end hidden'>
                    <Image src={hero} alt='Hero' className='w-60' />
                </div>

            </div>
        </section>
    );
};

export default AboutBanner;