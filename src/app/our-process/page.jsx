import "./style.css"
import React from 'react';
import ProcessBanner from './ProcessBanner/ProcessBanner';
import Image from 'next/image';
import ad1 from "../../../public/assets/advantage/ad1.webp";
import ad2 from "../../../public/assets/advantage/ad2.webp";
import ad3 from "../../../public/assets/advantage/ad3.png";
import ad4 from "../../../public/assets/advantage/ad4.png";
import heroImg from "../../../public/assets/banner/heroImg.png";
import sign from "../../../public/assets/New folder/sign.webp";
import promise from "../../../public/assets/New folder/tarek-promise.png";
import find from "../../../public/assets/Mission/find.png";
import fund from "../../../public/assets/Mission/fund.png";
import buy from "../../../public/assets/Mission/buy.png";
import reviewImg from "../../../public/assets/New folder/locationReview.png";
import HouseOwnerVideo from '@/components/HomeComponent/HouseOwners/HouseOwnerVideo';
import thumb2 from "../../../public/assets/New folder/hqdefault3.webp"
import rateImg from "../../../public/assets/New folder/rateImg.webp"
import FeaturedMarket from "@/components/HomeComponent/FeaturedMarket/FeaturedMarket";

const OurProcessPage = () => {
    return (
        <section>
            <ProcessBanner />

            {/* Process */}
            <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-14 mb-16 mt-60 max-w-5xl mx-auto'>
                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad1} alt='Process' className='z-10 w-20 h-20' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Schedule A Call</h1>
                    <p className='text-sm max-w-[250px]'>The first step is our free, no-obligation consultation to learn about the home.</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-3 left-[33%] lg:left-[20%]'>1</p>
                </div>

                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad2} alt='Offer' className='z-10 w-20 h-20' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Get A Cash Offer</h1>
                    <p className='text-sm max-w-[250px]'>After the initial consultation, we’ll put together an all-cash offer, typically within 24 hrs.</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-3 left-[33%] lg:left-[16%]'>2</p>
                </div>

                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad3} alt='Close Quickly' className='z-10 w-20 h-20' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Close Quickly</h1>
                    <p className='text-sm max-w-[250px]'>Close in as little as 14 days after you accept our written offer on your home!</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-3 left-[33%] lg:left-[20%]'>3</p>
                </div>

                <div className='flex items-center justify-center text-center w-full flex-col relative'>
                    <Image src={ad4} alt='Move On' className='z-10 w-20 h-20' />

                    <h1 className='font-semibold text-xl mt-10 mb-2'>Move On</h1>
                    <p className='text-sm max-w-[250px]'>That&apos;s it! You&apos;ve sold your home with absolutely no fees or commissions!</p>

                    <p className='px-5 py-3 bg-primary rounded-full font-semibold text-white absolute -top-3 left-[33%] lg:left-[20%]'>4</p>
                </div>
            </div>

            <div className='mt-14 mb-28 flex items-center justify-center'>
                <button className='w-60 text-center px-5 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Learn More</button>
            </div>

            {/* Promise */}
            <div className='px-5 bg-white py-14 my-20'>

                <div className='max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
                    <div className='relative w-full top-14'>
                        <Image src={heroImg} alt='Hero' className='w-96' />
                    </div>

                    <div className='w-full flex flex-col items-center justify-center gap-10'>
                        <p className='text-xl font-semibold italic text-[#3c3838] text-center'>At Tarek Buys Houses, we promise to provide peace of mind and full-scale support throughout your entire sales process. For 10 years, 16M weekly television viewers have watched us help homeowners overcome financially debilitating situations and that’s because we pride ourselves on being the only off-market buyer to offer 100% transparency and the most fair As-is price for your home.</p>

                        <div>
                            <Image src={sign} alt='Sign' />
                        </div>
                        <div>
                            <Image src={promise} alt='promise' />
                        </div>
                    </div>
                </div>

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

            {/* Seller Say */}

            <div className='relative flex items-center flex-col justify-center'>
                <div className='w-full bg-primary text-center py-10 z-10'>
                    <h1 className='font-bold text-white text-3xl'>See what sellers say about Tarek Buys Houses!...</h1>
                </div>
                <div className='absolute top-28 lg:top-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" x="0" y="0" version="1.1" viewBox="0 0 487.272 487.272" width="50" height="50"><path d="M468.018 196.707 289.885 18.573c-26.341-23.625-66.246-23.625-92.587 0L19.165 196.493c-25.554 25.573-25.554 67.014 0 92.587L197.298 467a63.997 63.997 0 0 0 46.293 19.413 64 64 0 0 0 46.293-18.987l178.133-178.133.267-.267c25.421-25.567 25.302-66.9-.266-92.319z" fill="url(&quot;#SvgjsLinearGradient1063&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1063"><stop stop-color="#d9821b" offset="0"></stop><stop stop-color="#d9821b" offset="1"></stop></linearGradient></defs></svg>
                </div>
            </div>

            <div className='mb-14 bg-white py-16 flex items-center justify-center flex-col gap-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12 w-[95%] lg:w-[85%] mx-auto'>
                    <div className="w-full flex flex-col items-center justify-start text-center py-8 px-5 shadow-md h-[550px]">
                        <div className="flex items-center flex-col">
                            <h1 className="font-semibold text-[22px] text-primary">&rdquo;They made it completely stress free!&rdquo;</h1>
                            <p className="border-b border-primary w-48 h-1 pb-5"></p>
                        </div>
                        <p className="max-w-5xl text-center my-6 text-sm font-normal">
                            Working with Tarek’s team was the easiest and most enjoyable experience I have ever had selling a home. I didn’t really have time to deal with fixing it myself and listing it with an agent and having open houses and then waiting for it to sell. I worked with Robert and he was knowledgeable and patient – they made it completely stress free.
                        </p>
                        <p className="pb-10 font-bold text-xl">Carlos S. – San Diego, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-start text-center py-8 px-5 shadow-md h-[550px]">
                        <div className="flex items-center flex-col">
                            <h1 className="font-semibold text-[22px] text-primary">&rdquo;The best service I&apos;ve ever had!&rdquo;</h1>
                            <p className="border-b border-primary w-48 h-1 pb-5"></p>
                        </div>
                        <p className="max-w-5xl text-center my-6 text-sm font-normal">
                            The BEST service I have ever had! The Tarek Buys Houses Team went above and beyond our expectations. From the day we contacted them to the day we closed escrow I knew they were looking out for our best interests. They were professional, knowledgeable, and were available to us whenever we needed them. Two thumbs up!
                        </p>
                        <p className="pb-10 font-bold text-xl">Gina P. – Riverside, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-start text-center py-8 px-5 shadow-md h-[550px]">
                        <div className="flex items-center flex-col">
                            <h1 className="font-semibold text-[22px] text-primary">&rdquo;It was a pleasure working with you&rdquo;</h1>
                            <p className="border-b border-primary w-48 h-1 pb-5"></p>
                        </div>
                        <p className="max-w-5xl text-center my-6 text-sm font-normal">
                            It was a pleasure meeting you and I enjoyed talking to you. I wanted to let you know that the whole experience with your organization is the best I have had in a long time. You are a great spokesman for your organization, the people at the escrow were very pleasant and friendly and ready to work with and the whole experience was stress-free. I wish nothing but the best for you and that the house will be everything that you hoped it would be. It was a pleasure working with you and wish you the best.
                        </p>
                        <p className="pb-10 font-bold text-xl">Rudy Vander Upwich – Huntington Beach, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-start text-center py-8 px-5 shadow-md h-[550px] justify-self-center">
                        <div className="flex items-center flex-col">
                            <h1 className="font-semibold text-[22px] text-primary">&rdquo;I felt comfortable throughout the process!&rdquo;</h1>
                            <p className="border-b border-primary w-48 h-1 pb-5"></p>
                        </div>
                        <p className="max-w-5xl text-center my-6 text-sm font-normal">
                            Usually not big on writing reviews. Just wanted to say I was pretty apprehensive to work with Tarek’s team at first because I wasn’t sure if I would get the most money for the house. Not only did they get me the best price over other quotes I got, but they really educated me on what was what, so I felt comfortable throughout the process.
                        </p>
                        <p className="pb-10 font-bold text-xl">Matt T. – San Bernardino, CA</p>
                    </div>

                </div>


                <div className="w-full mt-10 flex items-center justify-center">
                    <Image src={reviewImg} alt="reviewImg" />
                </div>

            </div>


            {/* Situations */}

            <div className='my-28 max-w-5xl mx-auto text-center'>

                <h1 className='text-[#3c3838] font-bold text-3xl text-center'>We Can Help You In Most Situations</h1>

                <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-10 mt-14'>
                    <div>
                        <div className='relative'>
                            <Image src={thumb2} alt='Thumb2' className='w-full' />

                            <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                                <HouseOwnerVideo id="2" isOpen={true} url="https://www.youtube-nocookie.com/embed/vjbp7kMFOT8?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=1&autoplay=1" />
                            </div>

                        </div>
                        <div className='mt-6'>
                            <h1 className='text-[#3c3838] font-bold text-lg text-center'>Need To Sell Quickly? We Buy Properties In ANY Condition For All Cash. Get An Offer Within 24 Hours!</h1>

                            <div className='mt-6 flex items-center justify-center'>
                                <button className='w-60 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg uppercase'>Get your Offer</button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <ul className='space-y-2 list-disc pl-10 text-start'>
                            <li>
                                <span className='font-bold text-lg'>Can’t Afford Repairs </span><span className='text-lg font-normal leading-[30px]'> - House needs extensive repair and you can no longer afford to keep up the maintenance for the home.</span>
                            </li>

                            <li>
                                <span className='font-bold text-lg'>Behind on Payments </span> <span className='text-lg font-normal leading-[30px]'> - If you are behind on one or more of your mortgage payments, leaving the balance you owe bigger each month.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Facing Foreclosure </span> <span className='text-lg font-normal leading-[30px]'> - Foreclosure proceedings have begun and you need to sell your house quickly.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Relocation  </span> <span className='text-lg font-normal leading-[30px]'> - Moving out of state or out of the country unexpectedly.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Retiring  </span> <span className='text-lg font-normal leading-[30px]'> - Maybe looking to liquidate property for cash to use during retirement.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Tax Liens </span> <span className='text-lg font-normal leading-[30px]'> - A lien in which the government may seize property if you owe delinquent property taxes and the tax payer fails to pay the owed back taxes.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Probate </span> <span className='text-lg font-normal leading-[30px]'> - A home which is part of an estate where someone has passed away and left a property behind.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Vacant House </span> <span className='text-lg font-normal leading-[30px]'> - A property empty without residents or living purposes.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Divorce  </span> <span className='text-lg font-normal leading-[30px]'> - Dissolution of a marriage where both parties may agree to sell the home to settle or it may be awarded to one party.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Inheritance Receiving </span> <span className='text-lg font-normal leading-[30px]'> - property upon the death of someone else, which may include land property, houses or money.</span>
                            </li>


                            <li>
                                <span className='font-bold text-lg'>Denied Loan Modification </span> <span className='text-lg font-normal leading-[30px]'> - Denial of a modification of your loan terms that would have allowed adhering to new loan terms outside of the original contract.</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Costly Repairs */}

            <div className='my-28 max-w-5xl mx-auto text-center w-[96%]'>

                <h1 className='text-[#3c3838] font-bold text-3xl text-center'>We Can Help You In Most Situations</h1>

                <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-20 mt-20'>
                    <div className="w-full">
                        <div className='relative'>
                            <Image src={rateImg} alt='Thumb2' />

                        </div>
                        <div className='mt-6 text-start'>
                            <h1 className='text-[#3c3838] font-bold text-lg'>What are the most expensive home repairs?</h1>

                            <p className='mt-4'>When selling a house in poor condition, homeowners try to take on expensive repairs by themselves, which cuts into the profit on your house sale. With that in mind, here’s what you need to know about the most costly home repairs…</p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <table class="table table-bordered w-full">
                            <thead>
                                <tr>
                                    <th class="text-center repairHeading" scope="col">Typical Home Repairs</th>
                                    <th class="text-center costHeading" scope="col">Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tableLable">HVAC Repairs</td>
                                    <td class="tableValue">$100 – $1,100</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Water Heater Repairs</td>
                                    <td class="tableValue">$100 – $1,400</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Electrical Repairs</td>
                                    <td class="tableValue">$125 – $3,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Driveway Repairs</td>
                                    <td class="tableValue">$300 – $4,500</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Asbestos Removal</td>
                                    <td class="tableValue">$500 – $4,500</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Roof Repairs</td>
                                    <td class="tableValue">$150 – $5,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Septic Tank Repairs</td>
                                    <td class="tableValue">$200 – $5,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Deck Repairs</td>
                                    <td class="tableValue">$250 – $5,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Mold Removal</td>
                                    <td class="tableValue">$400 – $6,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Foundation Repairs</td>
                                    <td class="tableValue">$500 – $12,000</td>
                                </tr>
                                <tr>
                                    <td class="tableLable">Siding Repairs</td>
                                    <td class="tableValue">$100 – $16,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>


            {/* Next step */}
            <div className='bg-gradient-to-t from-[#DC861F] to-[#FCAF52] py-14 px-5'>
                <div className='flex items-center justify-center flex-col gap-3'>
                    <h1 className='font-bold text-4xl text-white'>Ready To Take The Next Step?</h1>
                    <p className='font-normal text-3xl text-white'>Sell Your Home To Tarek El Moussa Today!</p>
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <button className='w-72 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-lg'>Get Started</button>
                </div>
            </div>

            {/* Featured Market */}
            <FeaturedMarket />
        </section>
    );
};

export default OurProcessPage;