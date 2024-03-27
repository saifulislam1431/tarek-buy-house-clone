import FeaturedMarket from '@/components/HomeComponent/FeaturedMarket/FeaturedMarket';
import Image from 'next/image';
import React from 'react';
import find from "../../../public/assets/Mission/find.png";
import fund from "../../../public/assets/Mission/fund.png";
import buy from "../../../public/assets/Mission/buy.png";
import Accordion from '@/components/Accordion/Accordion';
import banner from "../../../public/assets/banner/banner1.png";
import hero from "../../../public/assets/banner/heroImg.png";

const FAQPage = () => {
    const sections = [
        {
            title: 'Are you listing my house on the MLS or buying it?',
            content: 'We buy houses in your area that fit our buying criteria. From there we may repair the house and resell it to another homeowner or keep it as a rental ourselves. We also have a team of agents so if listing the home is something you are looking to do we can help you with that as well.',
        },
        {
            title: 'Are there any fees or commissions to work with you?',
            content: 'We’ll make you an offer and if it’s a fit, we’ll buy your house and cover all closing costs! No hassle or fees! We make our money after we pay for repairs on the house (if any) to fix it up, market the house, and sell it for a profit (we’re taking all of the risk here on whether we can sell it for a profit or not, once we buy the house from you). The responsibility is ours and you walk away without the burden of the property and its payments. Zero commissions, zero fee’s, that’s our guarantee!',
        },
        {
            title: 'How are you different from a real estate agent?',
            content: 'When working with a real estate agent, you pay between 3-6% of the sales price in commission costs. Suppose a house is selling for $100,000, you’ll pay between $3,000 – $6,000 in commission fees. Agents provide a great service for those that can wait 6-12 months to sell and who have room to pay the commission on the sale. Since we’re the ones buying the house from you, and we pay with all cash. we can make a decision to buy your house within a couple of days (sometimes the same day). Again, we make our living by taking the risk to buy the house with our own cash, repair the house, and market it ourselves to find a buyer.',
        },
        {
            title: 'How do you determine the price to offer on my house?',
            content: 'Our process is rather simple. We look at the location, what repairs are needed, condition, and values of comparable houses sold in the area recently. We take everything into consideration… and come up with a fair price that works for us and works for you too.',
        },
        {
            title: 'Is there any obligation when i submit my info?',
            content: 'We buy houses in your area that fit our buying criteria. From there we may repair the house and resell it to another homeowner or keep it as a rental ourselves. We also have a team of agents so if listing the home is something you are looking to do we can help you with that as well.',
        },
        {
            title: 'What if I still have a loan on my house?',
            content: 'With mortgages ranging from 15 to 30 years, chances are your current loan isn’t fully paid off when it comes time to sell. No worries! Our cash offer includes paying off your existing mortgage so that you can walk away with cash in your pocket!',
        },
        {
            title: 'What are the Tarek Buys Houses Reviews?',
            content: 'Looking for Tarek Buys Houses reviews? Our glowing reviews are a testament to our success. We buy houses in any condition and we’ve worked with thousands of homeowners who want to turn their property into cash in a matter of days. Check out our reviews and see what some of our satisfied clients are saying about our quick, simple and hassle-free homebuying process. Avoid the hassle of listing on the market and get top dollar for your home in as little as 7 days when you sell to us!',
        },
        {
            title: 'Is Tarek Buys Houses Safe?',
            content: 'Tarek Buys Houses is a safe, efficient and hassle-free way to sell your property. To date, thousands of property-owners have sold their homes to us for cash. Our process is different from a traditional sale in the best way possible. Instead of listing your home on the market and waiting for it to sell, only to pay closing costs and agent commissions, we make a cash offer for your home and can close in as little as 7 days. It’s a safe and affordable way to sell your property—no matter its condition.',
        },
        {
            title: 'Is Tarek Buys Houses a Public Company?',
            content: 'As Tarek Buys Houses grows and thrives, there’s plenty of investor interest for the company to go public. That being said, Tarek Buys Houses is not a public company. We’re proud to be a private company buying houses in Southern California. We buy houses with our own capital, allowing us to make all-cash offers and close fast. Unlike other real estate companies that rely on external stakeholders, we have the freedom to operate and make all-cash offers for houses in any condition.',
        },
        {
            title: 'How Does Tarek Buys Houses Work?',
            content: 'When it comes to selling a home, the Tarek Buys Houses process couldn’t be simpler. We pay cash for homes in any condition no matter how distressed, damaged, or outdated. All you have to do is input your contact information and the address of your property into our website and will get back to you within 24 hours with a fair offer. If you accept our offer, we can close in as little as 7 days, and you walk away with cash in hand. You don’t have to lift a finger to repair or clean your property, and you don’t have to deal with appraisals, showings and the stress that comes with the closing process. Our guaranteed offers ensure the price we quote is the price you get for your home — no less.',
        },
        {
            title: 'How Much is My House Worth with Tarek Buys Houses?',
            content: 'At Tarek Buys Houses, we know that every property is unique, which is why we evaluate each individual property to arrive at a fair market price. We consider the location of your property, its current condition and what other comparable properties are selling for in your area. We also factor in any necessary repairs, as well as outstanding loans or mortgages you have on the property. Once we’ve determined a fair price for your home, we provide an all-cash offer. Should you accept, we can close on your home in 7 days or less.',
        },
        {
            title: 'What is Tarek Buys Houses?',
            content: 'Tarek Buys Houses is a real estate firm dedicated to helping homeowners sell their outdated or distressed homes. What makes our approach different from a traditional sale? We buy houses in any condition, regardless of any repairs or cleaning required. When you contact us with details about your property, we provide an all-cash offer within 24 hours and can close escrow in as little as 7 days. At the end of our quick process, you’ll walk away from your property with cash in hand—it couldn’t be easier.',
        },
        {
            title: 'Who Owns Tarek Buys Houses?',
            content: 'Tarek Buys Houses is owned by Tarek El Moussa, real estate expert and host of the popular HGTV show Flip or Flop, and his business partner, Pete De Best. For more than a decade, Tarek has purchased and renovated outdated and distressed properties across Southern California, turning even the most blighted of houses into homes where families can live and thrive. By founding Tarek Buys Houses, Tarek hopes to help homeowners turn their damaged or distressed homes into cash.',
        },
        {
            title: 'How to List on Tarek Buys Houses',
            content: 'Unlike a traditional real estate marketplace, there aren’t any listings through Tarek Buys Houses. Listing your home on the market costs you time and money. Instead, sell your home to us for cash and close in as little as 7 days! The process couldn’t be simpler, and you avoid the hidden fees and agent commissions that can cut into your profits. Contact us today to learn more about our process and get your home sold for cash in a matter of days—no listing required!',
        },
        {
            title: 'Does Tarek Buys Houses Buy Multi-Family Homes?',
            content: 'Yes! We’re buying homes of all types, sizes, and conditions. We evaluate each individual property by location, condition, and market value. Taking this big picture approach allows us to give you a fair cash offer for your home, whether it’s a single-family dwelling or a multi-family property. Reach out to us today for your no-obligation consultation, provide us with the details of your property and we’ll make an all-cash offer for your home based on fair market value.',
        },
        {
            title: 'How to Contact Tarek Buys Houses',
            content: 'Want to sell your property for cash? Need the inside scoop on the real estate market in your area? Want to work with someone who has an in-depth understanding of the local market? Whether you’re ready to sell your home or you want more information about our process, we invite you to contact us today. Reach out at info@tarekbuyshouses.com or visit tarekbuyshouses.com/get-offer today!',
        },
        {
            title: 'How to Unsubscribe from Tarek Buys Houses',
            content: 'Our site has the latest real estate news and tips to help you become better-informed about the market in your area, as well as how to avoid some of the common traps that can come with a traditional sale. Want to unsubscribe from Tarek Buys Houses? While we’re sorry to see you go, reach out to info@tarekbuyshouses.com and we’ll get you unsubscribed.',
        },
        {
            title: 'Can I List a Rental on Tarek Buys Houses?',
            content: 'Currently, you cannot list a rental on Tarek Buys Houses. If you’re interested in listing a rental and receiving incredible exposure for your listing, check back soon or reach out to info@tarekbuyshouses.com for more information. In the meantime, keep in mind that we buy houses for cash. Contact us today for a fair, all-cash offer for your property and say goodbye to the stress and hassle of being a landlord for good!',
        },
        {
            title: 'How Does Tarek Buys Houses Make Money?',
            content: 'Tarek Buys Houses is a real estate firm focused on helping homeowners turn their homes—regardless of condition—into cash in as little as 7 days. We make a profit by purchasing homes that fit our buying criteria. After we buy your home, we either make necessary repairs and renovations to the property and sell it to a new homeowner, or we keep the property as a rental ourselves. If you’re looking to sell, we have a team of agents ready to assist.',
        },
        {
            title: 'How to Use Tarek Buys Houses',
            content: 'Interested in getting a competitive all-cash offer for your home? It’s easy when you work with Tarek Buys Houses. All you have to do is enter your contact information and the address of the property you want to sell, and we take it from there. We consider the location and condition of your property, as well as the fair market value of comparable homes in your area and will make you an offer in less than 24 hours after you contact us. Should you accept our offer, we close on your home within 7 days, and you walk away with cash in hand. It couldn’t be easier!',
        },
        {
            title: 'How to Update a Tarek Buys Houses Listing',
            content: 'Tarek Buys Houses doesn’t have listings like a traditional real estate marketplace, so there’s no need to worry about updating anything. Rather than list your property, you can sell it to us for cash and move on with your life! If you’re looking for more information about how to sell your home or want to explore the possibilities of a cash offer, contact info@tarekbuyshouses.com.',
        },
        {
            title: 'How to Advertise on Tarek Buys Houses',
            content: 'Tarek Buys Houses is growing every day, and our website receives thousands of visitors who are looking to buy and sell homes, or take in the latest real estate news and insights straight from the mind of Tarek El Moussa. Want to learn more about advertising with us? Reach out to us today at info@tarekbuyshouses.com.',
        },
        {
            title: 'How to Stop Getting Emails from Tarek Buys Houses',
            content: 'You’ll find the latest real estate news and tips, as well as the inside scoop on the market from Tarek El Moussa, delivered to your inbox with our frequent e-mails. Want to stop getting emails from Tarek Buys Houses? We hate to see you go, but we’ll get you off our e-mail list right away. Contact us at info@tarekbuyshouses.com and we’ll take you off our email list.',
        },
        {
            title: 'How to Become a Tarek Buys Houses Agent',
            content: 'Looking to become a Tarek Buys Houses agent? We’re expanding every day and are looking for qualified agents who not only understand the real estate market, but also the nuances of buying homes for cash. We have incredible exposure and a reach that most other real estate companies could only dream of. If you’re looking to become part of the team, reach out to us at info@tarekbuyshouses.com for more information.',
        },
        {
            title: 'How Much Does Tarek Buys Houses Cost?',
            content: 'The services rendered by Tarek Buys Houses come at no cost to our clients! Our no-obligation consultations are completely free, and we offer fair market value for your property. Each house is individually evaluated, to ensure you’re getting top dollar for your home. What’s more, we cover all closing costs and we do not work on commission. In many cases, we save our clients thousands of dollars on fees and real estate agent commissions. When we make you an all-cash offer, that’s the price you get for your home—no less. We promise no hidden surprises, ever!',
        },
        {
            title: 'How Does Tarek Buys Houses Estimate Home Values?',
            content: 'Tarek Buys Houses understands that every property is different, which is why we make individualized estimates for every home. There are four factors we look at when estimating the value of a property: the location of your home; its condition; any existing mortgage you have on the property; and the value of comparable homes in the area. Taking this approach allows us to give every client the very best price for their property.',
        },
    ];
    return (
        <section>

            <section className='relative w-full h-96'>
                <div className='w-full h-full'>
                    <Image src={banner} alt='Banner' className='w-full h-full' />
                </div>
                <div className='absolute top-0 w-full h-full flex items-center justify-center text-center bg-primary/70'>
                    <div>
                        <h1 className='font-bold text-4xl lg:text-5xl text-white'>Tarek Buys Houses FAQs
                        </h1>
                    </div>
                    <div className='h-full lg:flex items-end hidden'>
                        <Image src={hero} alt='Hero' className='w-60' />
                    </div>

                </div>
            </section>


            {/* Faq */}
            <div className='mb-16 bg-white py-24'>
                <div className='max-w-5xl mx-auto mb-11'>
                    <h1 className='text-[#3c3838] font-bold text-3xl text-center'>Introduction</h1>

                    <p className='text-lg font-normal text-[#333333] mt-7'>Tarek Buys Houses is a growing real estate firm looking for properties all across Southern California! We pay all cash for homes in any condition. Whether you want to sell because you need cash fast, you can’t afford necessary repairs, you’ve inherited a property you don’t want, or for any other reason we’re prepared to give you the best price possible for your property. We make all-cash offers for even the most distressed or outdated homes. After a no-obligation consultation, we’ll make a fair offer for your home. If you accept, we can close in weeks, and you walk away from your property with cash in hand. Want to learn more about our process? Check out our FAQs to learn everything you need to know.</p>
                </div>
                <Accordion sections={sections} width="max-w-5xl" />
            </div>
            {/* Mission */}

            <div className='my-28 max-w-5xl mx-auto text-center'>

                <h1 className='text-[#3c3838] font-bold text-3xl text-center'>Our Mission</h1>

                <div className='flex flex-col lg:flex-row items-start justify-center gap-14 mt-16'>
                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={buy} alt='buy' className='z-10 w-20 h-20' />

                        <h1 className='font-semibold text-xl mt-8 mb-2'>Buy</h1>
                        <p className='text-lg font-normal max-w-[260px] text-[#333333]'>We locate and buy properties with potential to be unlocked. We buy homes as-is for cash AND if we are unable to meet your needs, we will find a buyer for you in record time that does meet your needs.</p>
                    </div>

                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={fund} alt='fund' className='z-10 w-20 h-20' />

                        <h1 className='font-semibold text-xl mt-8 mb-2'>Fund</h1>
                        <p className='text-lg font-normal max-w-[260px] text-[#333333]'>Using our lending partnership with US Lending, Tarek Buys Houses will assist you through the full process of securing financing for your next home so that your move and your entire selling experience is swift, easy and hassle-free.</p>
                    </div>

                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={find} alt='find' className='z-10 w-20 h-20' />

                        <h1 className='font-semibold text-xl mt-8 mb-2'>Find</h1>
                        <p className='text-lg font-normal max-w-[260px] text-[#333333]'>Our nationwide network of real estate professionals are on deck and waiting to assist you in finding your next home. Our mission is to be your one-stop solution for selling, funding, buying and a full strategy to move you to your forever home. </p>
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

export default FAQPage;