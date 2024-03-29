'use client'
import { ParentContext } from '@/utils/Provider/Provider';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import hero from "../../../public/assets/banner/heroImg.png";
import Link from 'next/link';
import PartnerContainer from '@/components/HomeComponent/PartnerContainer/PartnerContainer';

import ad1 from "../../../public/assets/advantage/ad1.webp";
import ad2 from "../../../public/assets/advantage/ad2.webp";
import ad3 from "../../../public/assets/advantage/ad3.png";
import promise from "../../../public/assets/New folder/tarek-promise.png";
import HouseOwners from '@/components/HomeComponent/HouseOwners/HouseOwners';
import Testimonial from '@/components/HomeComponent/Testimonial/Testimonial';
import ChooseTarekBuy from '@/components/HomeComponent/ChooseTarekBuy/ChooseTarekBuy';
import Specialities from '@/components/HomeComponent/Specialities/Specialities';
import FeaturedMarket from '@/components/HomeComponent/FeaturedMarket/FeaturedMarket';
import Accordion from '@/components/Accordion/Accordion';

const StepTwo = () => {
    const { searchOfferValue, setSearchOfferValue } = useContext(ParentContext);
    const [sections, setSections] = useState([
        {
            title: 'Are you listing my house on the MLS or buying it? ',
            content: 'We buy houses in your area that fit our buying criteria. From there we may repair the house and resell it to another homeowner or keep it as a rental ourselves.',
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
            content: 'We buy houses in your area that fit our buying criteria. From there we may repair the house and resell it to another homeowner or keep it as a rental ourselves.',
        },
        {
            title: 'What if I still have a loan on my house?',
            content: 'With mortgages ranging from 15 to 30 years, chances are your current loan isn’t fully paid off when it comes time to sell. No worries! Our cash offer includes paying off your existing mortgage so that you can walk away with cash in your pocket!',
        },
    ])
    const [error, setError] = useState("")
    const [propertyType, setPropertyType] = useState("");

    useEffect(() => {
        if (propertyType === "Mobile/Manufactured" || propertyType === "Raw Land") {
            alert("Sorry, we do not buy mobile/manufactured homes or raw land at this time.");
            setError("Sorry, we do not buy mobile/manufactured homes or raw land at this time.");
        }
    }, [propertyType]);

    return (
        <section>
            {/* banner */}

            <section style={{
                backgroundImage: `url("https://i.ibb.co/Tq6XB6t/banner1.png")`,
                objectFit: "cover"
            }}>

                <div className="w-full h-full flex items-center justify-center bg-black/50 relative pt-20 pb-5">
                    <div className='z-10'>
                        <div className='my-4 space-y-5'>
                            <p className='text-[24px] text-primary font-medium'>{searchOfferValue}</p>
                            <p className='text-3xl lg:text-[45px] font-bold text-white'>Almost There!</p>
                            <p className='text-lg lg:text-[25px] font-medium text-white'>Where should we send your cash offer?</p>
                        </div>

                        {
                            error && <p className='text-[#ff4a4a] font-bold my-4'>{error}</p>
                        }

                        <div className='max-w-[582px] mx-auto px-2 grid grid-cols-12 gap-3'>

                            <div className='col-span-full grid grid-cols-12 gap-4'>
                                <div className='col-span-full lg:col-span-6'>
                                    <input type="text" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full  lg:w-[280px]
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]' placeholder='First Name' />
                                </div>

                                <div className='col-span-full lg:col-span-6'>
                                    <input type="text" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full  lg:w-[280px]
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]' placeholder='Last Name' />
                                </div>

                            </div>

                            <div className='col-span-full grid grid-cols-12 gap-4'>
                                <div className='col-span-full lg:col-span-6'>
                                    <input type="text" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full  lg:w-[280px]
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]' placeholder='Phone Number' />
                                </div>

                                <div className='col-span-full lg:col-span-6'>
                                    <input type="text" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full  lg:w-[280px]
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]' placeholder='Email' />
                                </div>

                            </div>

                            <div className='col-span-full grid grid-cols-12 gap-4'>
                                <div className='col-span-full lg:col-span-6'>
                                    <select name="property" id="" className={`bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none w-full lg:w-[280px] focus:border-none placeholder:text-[#1f2124] ${propertyType === "Mobile/Manufactured" || propertyType === "Raw Land" ? "text-red-600 border-red-600" : "border-[#69727d] text-[#1f2124]"}`} onChange={(e) => setPropertyType(e.target.value)}>
                                        <option value="">Select Property Type</option>
                                        <option value="Single Family">Single Family</option>
                                        <option value="Multi Family">Multi Family</option>
                                        <option value="Condo/Townhome">Condo/Townhome</option>
                                        <option value="Mobile/Manufactured">Mobile/Manufactured</option>
                                        <option value="Raw Land">Raw Land</option>
                                    </select>
                                </div>

                                <div className='col-span-full lg:col-span-6'>
                                    <select name="property" id="" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full  lg:w-[280px]
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]'>
                                        <option value="">Is Property Listed?</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>

                            </div>

                            <div className='col-span-full grid grid-cols-12 gap-4'>
                                <div className='col-span-full'>
                                    <select name="property" id="" className='bg-white placeholder:text-base placeholder:font-light px-4 py-[10px] rounded outline-none border-[#69727d] 
                                   w-full 
                                    focus:border-none placeholder:text-[#1f2124] text-[#1f2124]'>
                                        <option value="">Where&apos;d you hear about us?</option>
                                        <option value="Google Search">Google Search</option>
                                        <option value="Bing Search">Bing Search</option>
                                        <option value="Facebook Ad">Facebook Ad</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="TV Commercial">TV Commercial</option>
                                        <option value="TV Show (Flip or flop)">TV Show (Flip or flop)</option>
                                        <option value="Tiktok">Tiktok</option>
                                        <option value="Snapchat">Snapchat</option>
                                        <option value="Radio">Radio</option>
                                        <option value="Instagram">Instagram</option>
                                    </select>
                                </div>

                            </div>

                            <div className='col-span-full grid grid-cols-12 gap-4'>
                                <div className='col-span-full'>
                                    <input type="submit" className="text-white bg-primary px-4 py-3 font-bold hover:bg-[#9b5d12] transition-all duration-300 rounded-md cursor-pointer w-full disabled:bg-[#cbcbcb] disabled:cursor-not-allowed disabled:text-[#999999] uppercase" value="Get A Cash Offer" disabled={propertyType === "Mobile/Manufactured" || propertyType === "Raw Land" ? true : false} />
                                </div>

                            </div>



                        </div>

                        <div className='mt-9 text-white font-normal text-xs italic max-w-[582px] mx-auto'>
                            <p>* By submitting the form, you are providing expressed consent for Tarek Buys Houses to contact you by telephone, SMS/MMS, (including automated SMS/dialing systems) and/or email even if you are on a Do Not Call list. Should you have questions or wish to opt-out of communication at any time, please contact us at <Link href="/" className='text-blue-500 hover:underline'>info@tarekbuyshouses.com</Link>, call (866) 916-3710, or text “STOP”. Text “HELP” for help or assistance. SMS messaging rates may apply. Message frequency may vary.Please review our <Link href="/" className='text-blue-500 hover:underline'>Privacy Policy</Link> and <Link href="/" className='text-blue-500 hover:underline'>Terms and Conditions</Link> to learn more.</p>
                        </div>
                    </div>
                    <div className='absolute bottom-0 right-[5%] 2xl:right-[15%] hidden lg:flex'>
                        <Image src={hero} alt='Hero' className='w-[400px]' />
                    </div>
                </div>
            </section>
            {/* Partner */}
            <PartnerContainer />


            {/* Promise */}

            <section className='mt-20 max-w-6xl mx-auto px-5'>
                <h1 className='text-xl lg:text-[32px] font-bold text-[#3c3838] text-center'>The Tarek Buys Houses <span className='text-primary'>Promise</span></h1>

                <p className='text-lg text-center font-normal text-[#333333] mt-8 mb-5'>
                    Tarek Buys Houses vows to get you the best offer for your home ‘as-is’. We help homeowners across America that need fast help selling their outdated or distressed homes. We will provide you with a cash offer within 24 hours and can close escrow in as little as 7 days.
                </p>
                <p className='text-lg text-center font-normal text-[#333333]'>
                    When you work with TBH there are zero fees or closing costs. Just a fair cash offer, on your terms.
                </p>

                <p className='text-lg font-bold text-[#333333] text-center mt-2'>Here’s how it works…</p>

                <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-y-14 mb-11 mt-14'>
                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={ad1} alt='Process' className='z-10' />

                        <h1 className='font-semibold text-[22px] mt-10 mb-2'>Start Your Process Now</h1>
                        <p className='text-base max-w-[285px]'>Submit your property address and your contact information to begin your free, no-obligation consultation process.</p>

                        <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute top-0 left-[32%]'>1</p>
                    </div>

                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={ad2} alt='Process' className='z-10' />

                        <h1 className='font-semibold text-[22px] mt-10 mb-2'>Get An Offer Within 24 Hours</h1>
                        <p className='text-base max-w-[285px]'>After we consider the market conditions, location, and condition of your property, we will make you an all-cash offer in less than 24 hours after you submit.</p>

                        <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-5 left-[30%]'>2</p>
                    </div>

                    <div className='flex items-center justify-center text-center w-full flex-col relative'>
                        <Image src={ad3} alt='Process' className='z-10' />

                        <h1 className='font-semibold text-[22px] mt-10 mb-2'>Close Quickly & With Certainty</h1>
                        <p className='text-base max-w-[285px]'>Should you accept our offer, we can close on your house in as little as a few weeks. When it&apos;s time to finalize the purchase, we&apos;ll work with you to complete the paperwork and wire the funds.</p>

                        <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute top-0 left-[30%]'>3</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image src={promise} alt='promise' className='w-[180px]' />
                </div>

                <div className='mt-8 flex items-center justify-center'>
                    <button className='w-60 text-center px-5 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-netural'>Learn More</button>
                </div>
            </section>

            {/* House Owner */}
            <HouseOwners />

            {/* Testimonial */}
            <Testimonial />

            {/* Why Choose */}
            <ChooseTarekBuy description="We help homeowners that are having a hard time selling or need to sell fast. We purchase outdated and distressed homes ‘as-is’ and we pay for all the repairs and for all your real estate fees. We have helped thousands of homeowners to have a happy, seamless and hassel-free escrow. We can provide you with cash in as little as 7 days and we can even help you with your moving expenses." />

            {/* Specialities */}
            <Specialities />

            {/* FAQ */}
            <section className='my-28 relative' style={{
                backgroundImage: `url("https://i.ibb.co/Tq6XB6t/banner1.png")`,
                objectFit: "cover"
            }}>

                <div className="w-full h-full  bg-[#E19D4B]/75">
                    <div className='w-[97%] max-w-5xl mx-auto py-24'>
                        <h1 className='text-center font-bold text-2xl lg:text-4xl text-white'>Frequently Asked Questions</h1>

                        <div className='mt-16'>
                            <Accordion sections={sections} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature market */}
            <FeaturedMarket />

        </section>
    );
};

export default StepTwo;