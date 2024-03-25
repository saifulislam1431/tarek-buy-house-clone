import React from 'react';
import ad1 from "../../../../public/assets/advantage/ad1.webp";
import ad2 from "../../../../public/assets/advantage/ad2.webp";
import ad3 from "../../../../public/assets/advantage/ad3.png";
import Image from 'next/image';

const Advantage = () => {
    return (
        <section className='my-16 max-w-7xl mx-auto'>

            <div className='text-center px-3'>
                <h1 className='text-2xl lg:text-3xl font-bold'>The Tarek Buys Houses <span className='text-primary'>Advantage</span></h1>
                <p className='font-normal mt-3 max-w-[80%] mx-auto text-center leading-[28px] text-lg'>When you sell your home as-is to Tarek Buys Houses, we are committed to getting you the best offer possible. We have helped homeowners from all across America with distressed homes sell fast, making the transition seamless and hassle-free.  We will provide you with an all-cash offer in less than 24 hours and even close escrow in weeks.</p>
            </div>

            <div className='my-6'>
                <p className='font-normal mt-3 max-w-[80%] mx-auto text-center leading-[28px] text-lg'>When you work with us, the entire process happens on your terms. Zero fees, zero repairs, and zero closing costs.</p>
            </div>

            <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-y-14 mb-11 mt-14'>
                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad1} alt='Process' className='z-10' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Start Your Process Now</h1>
                    <p className='text-sm max-w-[285px]'>Submit your property address and your contact information to begin your free, no-obligation consultation process.</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute top-0 left-[32%]'>1</p>
                </div>

                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad2} alt='Process' className='z-10' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Get An Offer Within 24 Hours</h1>
                    <p className='text-sm max-w-[285px]'>After we consider the market conditions, location, and condition of your property, we will make you an all-cash offer in less than 24 hours after you submit.</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-5 left-[30%]'>2</p>
                </div>

                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad3} alt='Process' className='z-10' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Close Quickly & With Certainty</h1>
                    <p className='text-sm max-w-[285px]'>Should you accept our offer, we can close on your house in as little as a few weeks. When it&apos;s time to finalize the purchase, we&apos;ll work with you to complete the paperwork and wire the funds.</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute top-0 left-[30%]'>3</p>
                </div>
            </div>

            <div className='mt-14 flex items-center justify-center'>
                <button className='w-60 text-center px-5 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Learn More</button>
            </div>

        </section>
    );
};

export default Advantage;