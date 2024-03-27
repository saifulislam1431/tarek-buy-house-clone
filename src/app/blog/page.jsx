import Image from 'next/image';
import React from 'react';
import banner from "../../../public/assets/banner/banner3.jpg"
import { Carousel } from 'flowbite-react';
import blogImg from "../../../public/assets/banner/banner2.jpg";
import blogImg1 from "../../../public/assets/banner/orange_42d86abdda3.webp";
import Link from 'next/link';
import FeaturedMarket from '@/components/HomeComponent/FeaturedMarket/FeaturedMarket';

const BlogPage = () => {
    return (
        <section>
            {/* Banner */}
            <section className='relative w-full'>
                <div className='w-full h-full'>
                    <Image src={banner} alt='Banner' className='w-full h-96' />
                </div>
                <div className='absolute top-0 w-full h-full flex items-center justify-center text-center bg-primary/70'>

                    <Carousel leftControl="" rightControl="" className='max-w-4xl'>
                        <div className="w-full flex flex-col items-center justify-center text-center px-3">
                            <div className="flex items-center flex-col">
                                <h1 className="font-bold text-3xl text-white">3 Different Ways To Sell Your Home</h1>
                            </div>

                            <p className="max-w-3xl text-center mt-6 text-white">
                                When it’s time to sell your home, you may find that you automatically gravitate toward the familiarity of a traditional home sale with a real estate agent as
                            </p>

                            <div className='mt-8 flex items-center justify-center'>
                                <button className='w-48 text-center px-5 py-2 bg-base-100 border-2 border-primary rounded-md  font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Read More</button>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center justify-center text-center px-3">
                            <div className="flex items-center flex-col">
                                <h1 className="font-bold text-3xl text-white">Top “We Buy Houses” Scams To Look  Out For</h1>
                            </div>

                            <p className="max-w-3xl text-center mt-6 text-white">
                                When it comes to selling your home, the internet can either be your best friend, or your worst enemy. Unfortunately, the housing crisis of 2008 opened the door for
                            </p>

                            <div className='mt-8 flex items-center justify-center'>
                                <button className='w-48 text-center px-5 py-2 bg-base-100 border-2 border-primary rounded-md  font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Read More</button>
                            </div>
                        </div>


                    </Carousel>
                </div>
            </section>
            <div className='w-full mb-10 py-3 text-center bg-white'>
                <button className='uppercase font-bold text-primary text-sm'>How to sell your home</button>
            </div>

            {/* Blog */}
            <div className='my-20 px-5'>
                <div className='max-w-5xl mx-auto text-center'>
                    <h1 className='text-3xl lg:text-5xl font-bold text-[#333]'>Get A Cash Offer for Your Home Without the Difficulty of Listing On-Market</h1>

                    <p className='text-lg font-normal text-[#333333] mt-8'>Straight from the mind of Tarek El Moussa, the blog is filled with useful tips about real estate, home improvement, finance, and much more. Also learn what’s happening at TBH including upcoming events, plus read testimonials from real customers that used TBH as their go-to cash buyer.</p>
                </div>

                <div className='lg:w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-7 mt-20'>
                    <div className='lg:h-[650px] bg-white shadow-lg p-5 w-full'>

                        <div className="flex items-center flex-col text-center">
                            <h1 className="font-semibold text-2xl text-[#333]">What&apos;s New?</h1>
                            <p className="border-b-2 border-primary w-28 h-2 pb-5"></p>
                        </div>

                        <div className='flex flex-col items-start justify-center gap-5'>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>Top “We Buy Houses” Scams To Look Out For</h3>
                                    <p className='text-sm my-3 font-normal'>When it comes to selling your home, the internet can either be your best friend, or your worst enemy. Unfortunately, the housing crisis of 2008 opened the door for...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg1} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>3 Different Ways To Sell Your Home</h3>
                                    <p className='text-sm my-3 font-normal'>When it’s time to sell your home, you may find that you automatically gravitate toward the familiarity of a traditional home sale with a real estate agent as...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='lg:h-[650px] bg-white shadow-lg p-5 w-full'>

                        <div className="flex items-center flex-col text-center">
                            <h1 className="font-semibold text-2xl text-[#333]">Most Popular</h1>
                            <p className="border-b-2 border-primary w-28 h-2 pb-5"></p>
                        </div>

                        <div className='flex flex-col items-start justify-center gap-5'>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>Top “We Buy Houses” Scams To Look Out For</h3>
                                    <p className='text-sm my-3 font-normal'>When it comes to selling your home, the internet can either be your best friend, or your worst enemy. Unfortunately, the housing crisis of 2008 opened the door for...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg1} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>3 Different Ways To Sell Your Home</h3>
                                    <p className='text-sm my-3 font-normal'>When it’s time to sell your home, you may find that you automatically gravitate toward the familiarity of a traditional home sale with a real estate agent as...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='lg:h-[650px] bg-white shadow-lg p-5 w-full'>

                        <div className="flex items-center flex-col text-center">
                            <h1 className="font-semibold text-2xl text-[#333]">Our Picks</h1>
                            <p className="border-b-2 border-primary w-28 h-2 pb-5"></p>
                        </div>

                        <div className='flex flex-col items-start justify-center gap-5'>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>Top “We Buy Houses” Scams To Look Out For</h3>
                                    <p className='text-sm my-3 font-normal'>When it comes to selling your home, the internet can either be your best friend, or your worst enemy. Unfortunately, the housing crisis of 2008 opened the door for...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                            <div className='flex items-start gap-5 mt-7'>
                                <div>
                                    <Image src={blogImg1} alt='Blog 1' className='w-24 h-[96px] rounded-xl' />
                                </div>
                                <div className='w-full'>
                                    <h3 className='font-semibold text-[#333]'>3 Different Ways To Sell Your Home</h3>
                                    <p className='text-sm my-3 font-normal'>When it’s time to sell your home, you may find that you automatically gravitate toward the familiarity of a traditional home sale with a real estate agent as...</p>
                                    <Link href="/" className='font-medium text-primary'>Read More</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <FeaturedMarket />
        </section>
    );
};

export default BlogPage;