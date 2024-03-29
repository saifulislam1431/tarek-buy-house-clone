'use client'
import React, { useContext, useEffect, useState } from 'react';
import banner from "../../../../public/assets/banner/banner1.png";
import hero from "../../../../public/assets/banner/heroImg.png";
import Image from 'next/image';
import { ParentContext } from '@/utils/Provider/Provider';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Banner = () => {

    const { setShake, shake, searchOfferValue, setSearchOfferValue } = useContext(ParentContext);

    const router = useRouter()

    const handleNavigate = () => {
        router.push(`/step-2`)
    }

    console.log(searchOfferValue);

    return (
        <section className='relative'>
            <div className='relative 2xl:h-3/4'>
                <Image src={banner} alt='Banner' className='h-full' />
                <div className='absolute bottom-0 right-0 2xl:right-[10%] hidden lg:flex'>
                    <Image src={hero} alt='Hero' className='w-[400px]' />
                </div>
            </div>
            <div className='absolute top-0 lg:top-8 w-full h-full flex items-center justify-center text-center'>
                <div className='w-full flex flex-col items-center justify-center gap-2 lg:gap-10'>
                    <h1 className='max-w-3xl text-xl lg:text-[44px] font-semibold text-white leading-[1.2em]'>Sell Your Home In Any Condition. Close In Weeks.</h1>
                    <p className='text-lg lg:text-[40px] text-white font-light'>No showings, no repairs, no stress.</p>

                    <div className={`w-[95%] max-w-3xl mx-auto relative flex items-center ${shake && "horizontal-shake"}`}>
                        <input type="text" className='bg-white placeholder:text-sm placeholder:font-light px-4 py-4 rounded outline-none border-none focus:border-none w-full' placeholder='Enter your home address' onChange={(e) => setSearchOfferValue(e.target.value)} />
                        <input type="submit" className="text-white bg-primary px-4 py-3 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 rounded-md absolute right-2 cursor-pointer" value="Get My Free Offer" disabled={searchOfferValue === "" ? true : false} onClick={handleNavigate} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;