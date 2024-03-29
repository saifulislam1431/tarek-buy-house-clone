import Image from 'next/image';
import React from 'react';
import banner from "../../../../public/assets/banner/banner1.png";
import HouseOwnerVideo from '@/components/HomeComponent/HouseOwners/HouseOwnerVideo';
import thumb1 from "../../../../public/assets/New folder/hqdefault-1.png"

const ProcessBanner = () => {
    return (
        <section className='relative w-full h-[380px] lg:h-[490px] mb-40'>
            <div className='w-full h-full'>
                <Image src={banner} alt='Banner' className='w-full h-full' />
            </div>
            <div className='absolute top-0 w-full h-full flex flex-col items-center justify-center text-center bg-primary/70 px-16 lg:px-0'>
                <div className='lg:max-w-2xl mt-36'>
                    <h1 className='font-semibold text-xl lg:text-5xl text-white'>Sell Your Home In A Few Simple Steps
                    </h1>

                    <p className='mt-6 text-white font-normal text-sm lg:text-xl'>We purchase outdated and distressed homes for cash that are in need of repair. We have helped thousands of homeowners and can provide you with cash in as little as 14 days. When you work with us, there are no agent fees or closing costs. Just a fair cash offer, on your terms.</p>
                </div>

                <div className='mt-10'>
                    <div className='relative border-8 shadow-netural w-full mx-auto'>
                        <Image src={thumb1} alt='Thumb1' />
                        <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                            <HouseOwnerVideo id="5" isOpen={true} url="https://www.youtube-nocookie.com/embed/eLBToOHBpO4?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1&amp;autoplay=1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessBanner;