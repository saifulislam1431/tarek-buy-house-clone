import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import FeaturedMarket from '@/components/HomeComponent/FeaturedMarket/FeaturedMarket';

const AboutPage = () => {
    return (
        <section>
            <AboutBanner />

            <div className='my-24 max-w-3xl mx-auto px-4'>
                <h1 className='text-[#3C3838] font-bold text-3xl text-center'>Introduction</h1>
                <div className='space-y-7 mt-6'>
                    <p className='text-lg font-normal leading-[30px]'>
                        Tarek Buys Houses is a private real estate investment company dedicated to helping property-owners in tough situations sell houses for cash. We pay cash for houses, single-or multi-family, in any condition, helping homeowners achieve the fairest as-is price for their home.
                    </p>
                    <p className='text-lg font-normal leading-[30px]'>

                        We know that selling a house, regardless of your reason for selling, can be a challenging, stressful process in even the most straightforward of situations. We’re dedicated to making the process easy and enjoyable for every client.
                    </p>
                </div>

                <div className='mt-10'>
                    <h3 className='text-2xl font-medium'>Why Work with Tarek Buys Houses?</h3>

                    <div className='space-y-7 mt-4'>
                        <p className='text-lg font-normal leading-[30px]'>
                            As a cash-sale homebuyer, we make things simple, straightforward and transparent for sellers! You don’t need to worry about fixing problems yourself, listing with an agent, holding open houses and waiting for the right offer to come in. Instead, sell your home to us for cash and save time and hassle while getting a fair price for your house—in cash—all within a week.
                        </p>
                        <p className='text-lg font-normal leading-[30px]'>
                            What makes us unique from other cash homebuyers? The difference is in our transparent process—one where you always have full control over the sale of your house. Whether you’ve inherited the house you grew up in and need to sell or you need to sell your current home for quick cash, we provide full-scale support throughout the entire selling process, no matter your personal situation.
                        </p>
                    </div>
                </div>


                <div className='mt-10'>
                    <h3 className='text-2xl font-medium'>Our Services</h3>

                    <div className='mt-4'>
                        <ul className='space-y-1 list-disc pl-10'>
                            <li>
                                <span className='font-bold text-lg'>Buying. </span> <span className='text-lg font-normal leading-[30px]'>We know that properties in any condition have so much potential to be unlocked. We’re buying homes as-is for cash in over 20 markets across the country. We’re here to serve you, which means that even if we can’t buy your property and meet your needs, we’ll make sure to find a buyer for you in record time.</span>
                            </li>

                            <li>
                                <span className='font-bold text-lg'>Finding. </span> <span className='text-lg font-normal leading-[30px]'>If you’re looking for a new home, we have a full team of real estate professionals on deck to help you! We want to make your life easier by becoming your one-stop solution for selling your current property, and funding and buying your future forever home.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Funding. </span> <span className='text-lg font-normal leading-[30px]'> If you’re selling your house to us for cash, you’ll have no problem finding funding for your next home. As a partner with U.S. Lending, we assist every client through the full process of securing financing for your next property, speeding up the entire selling process.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mt-10'>
                    <h3 className='text-2xl font-medium'>About Tarek El Moussa</h3>

                    <div className='space-y-7 mt-4'>
                        <p className='text-lg font-normal leading-[30px]'>Tarek Buys Houses founder and owner, Tarek El Moussa, is a real estate investor and media personality well-known for co-hosting HGTV’s Flip or Flop, a show focused on his successful real estate strategy—flipping houses. For over 10 years, millions of television viewers have seen how Tarek helps homeowners overcome stressful financial situations. He sees the hidden potential in distressed, outdated homes, and how some thoughtful updates can make them perfect for a new family to move into and thrive.
                        </p>
                        <p className='text-lg font-normal leading-[30px]'>In founding Tarek Buys Houses, Tarek hopes to help property-owners in select markets across the country sell their houses the easy, hassle-free way—for cash. After decades of working in the real estate industry, he understands that selling a home can be challenging even in a competitive sellers’ market. Tarek, along with his entire team, are here to help homeowners sell their properties in a way that’s completely transparent and stress-free.
                        </p>
                    </div>
                </div>
            </div>


            <div className='bg-gradient-to-t from-[#DC861F] to-[#FCAF52] py-14 px-5'>
                <div className='flex items-center justify-center flex-col gap-3'>
                    <h1 className='font-bold text-4xl text-white'>Ready To Take The Next Step?</h1>
                    <p className='font-normal text-3xl text-white'>Sell Your Home To Tarek El Moussa Today!</p>
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <button className='w-72 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Get Started</button>
                </div>
            </div>

            <FeaturedMarket />
        </section>
    );
};

export default AboutPage;