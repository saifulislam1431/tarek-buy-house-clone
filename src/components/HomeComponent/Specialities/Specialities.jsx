import React from 'react';
import cancel from "../../../../public/assets/icon/cancel.png";
import rightMark from "../../../../public/assets/icon/check.png";
import Image from 'next/image';


const Specialities = () => {
    return (
        <section className='my-14 w-[95%] max-w-5xl mx-auto'>

            <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
                <div className='w-full lg:w-[900px] bg-white rounded opacity-70 shadow-md'>
                    <div className='w-full text-center py-4 bg-[#555555] rounded-t'>
                        <h3 className='text-white font-semibold text-xl'>Property Investor</h3>
                    </div>

                    <div className='p-10 opacity-60'>
                        <ul className='space-y-4'>
                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'> Slow/Inexperienced</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>  Low-Ball Offers</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>   Major Negotiation</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'> Prices Change</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>  Often Backs Out</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>   Needs Financing</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className='w-full bg-white rounded shadow-netural'>
                    <div className='w-full text-center py-4 bg-primary rounded-t'>
                        <h3 className='text-white font-semibold text-xl'>Tarek Buys Houses</h3>
                    </div>

                    <div className='p-10'>
                        <ul className='space-y-8 text-center'>
                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>No Commissions/Fees</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>Guaranteed Offer</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>No Appraisals/Showings</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>Zero Repair Costs</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>Leave Items Behind</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={rightMark} alt='Cancel Mark' className='h-6 w-6' />
                                <span className='font-semibold text-lg'>Close In Weeks</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lg:w-[900px] bg-white rounded opacity-70 shadow-md'>
                    <div className='w-full text-center py-4 bg-[#555555] rounded-t'>
                        <h3 className='text-white font-semibold text-xl'>Traditional Sales</h3>
                    </div>

                    <div className='p-10 opacity-60'>
                        <ul className='space-y-4'>
                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'> +/- 10% Costs/Fees</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'> Financing Contingencies</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>Required Appraisals</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>+/- 91 Days Until Sold</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>Tons of Showings</span>
                            </li>

                            <li className='inline-flex items-center gap-2'>
                                <Image src={cancel} alt='Cancel Mark' className='h-5 w-5 grayscale' />
                                <span className='text-sm font-semibold'>You Pay For Repairs</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className='mt-20 flex items-center justify-center'>
                <button className='w-72 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-netural'>Learn More</button>
            </div>
        </section>
    );
};

export default Specialities;