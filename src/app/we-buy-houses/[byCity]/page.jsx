'use client'
import "../../../components/HomeComponent/FeaturedMarket/feature.css"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CityBanner from '../CityBanner/CityBanner';
import banner1 from "../../../../public/assets/banner/los.png";
import banner2 from "../../../../public/assets/banner/orange_42d86abdda-3.png";
import banner3 from "../../../../public/assets/banner/tulsa_opt_11f9740d91-1.png";
import banner4 from "../../../../public/assets/banner/banner1.png";
import PartnerContainer from '@/components/HomeComponent/PartnerContainer/PartnerContainer';
import Image from 'next/image';
import sign from "../../../../public/assets/New folder/sign.webp";
import promise from "../../../../public/assets/New folder/tarek-promise.png";
import heroImg from "../../../../public/assets/banner/heroImg.png";
import Carousel from '@/components/Carousel/Carousel';
import HouseOwnerVideo from '@/components/HomeComponent/HouseOwners/HouseOwnerVideo';
import thumb2 from "../../../../public/assets/New folder/hqdefault3.webp";
import sellHouseCash from "../../../../public/assets/banner/Sell_House_Fast_Cash_86980562d1.webp";
import rateImg from "../../../../public/assets/New folder/rateImg.webp";
import reviewImg from "../../../../public/assets/New folder/locationReview.png"
import Specialities from '@/components/HomeComponent/Specialities/Specialities';
import find from "../../../../public/assets/Mission/find.png";
import fund from "../../../../public/assets/Mission/fund.png";
import buy from "../../../../public/assets/Mission/buy.png";
import FAQ from "@/components/HomeComponent/FAQ/FAQ";
import Accordion from "@/components/Accordion/Accordion";
import FeaturedMarket from "@/components/HomeComponent/FeaturedMarket/FeaturedMarket";

const ByCity = () => {
    const [areas, setAreas] = useState([
        {
            city: "los-angeles-ca",
            name: "Los Angeles",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Bevery_Hills_1b32b047692.jpg"
        },
        {
            city: "los-angeles-ca",
            name: "Burbank",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Burbank_7240542e43.webp"
        },
        {
            city: "los-angeles-ca",
            name: "Long Beach",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Long_Beach_49bc0f213a2.jpg"
        },
        {
            city: "los-angeles-ca",
            name: "Compton",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Compton_a1ebdfb1e8.webp"
        },
        {
            city: "los-angeles-ca",
            name: "Santa Monica",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Santa_Monica_d45d4a001b.webp"
        },
        {
            city: "los-angeles-ca",
            name: "Palmdale",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Palmdale_ba59818c79.webp"
        },
        {
            city: "los-angeles-ca",
            name: "Culver City",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Culver_City_1ecff00949.webp"
        },
        {
            city: "los-angeles-ca",
            name: "Diamond Bar",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/diamond_c325a35a6a.webp"
        },
        {
            city: "orange-county-ca",
            name: "Anaheim",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_Anaheim_44d0a1b999.webp"
        },
        {
            city: "orange-county-ca",
            name: "Santa Ana",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_santa_ana_f1416a01d12.jpg"
        },
        {
            city: "orange-county-ca",
            name: "Irvine",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_Irvine_3e8dfbbeda.webp"
        },
        {
            city: "orange-county-ca",
            name: "Huntington Beach",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_Huntington_beach_f4657ec2f02.jpg"
        },
        {
            city: "orange-county-ca",
            name: "Garden Grove",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_Garden_grove_93a20f613d2.jpg"
        },
        {
            city: "orange-county-ca",
            name: "Fullerton",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_Fullerton_157ecc6c33.webp"
        },
        {
            city: "orange-county-ca",
            name: "Orange",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Optimized_orange_9485f9357a2.jpg"
        },
        {
            city: "orange-county-ca",
            name: "Costa Mesa",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:768/h:510/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Costa_mesa_dbd3564484.webp"
        },
        {
            city: "tulsa-ok",
            name: "Bixby",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Bixby_54adf32205.webp"
        },
        {
            city: "tulsa-ok",
            name: "Broken Arrow",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Broken_Arrow_9be1d66c13.webp"
        },
        {
            city: "tulsa-ok",
            name: "Collinsville",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Collinsville_92902e704c.webp"
        },
        {
            city: "tulsa-ok",
            name: "Glenpool",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Glenpool_e464206d6a.webp"
        },
        {
            city: "tulsa-ok",
            name: "Jenks",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Jenks_09da2ba7c2.webp"
        },
        {
            city: "tulsa-ok",
            name: "Sand Springs",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Sand_Springs_04a5d7cd78.webp"
        },
        {
            city: "tulsa-ok",
            name: "Sapulpa",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Sapulpa_c71277b919.webp"
        },
        {
            city: "tulsa-ok",
            name: "Tulsa",
            img: "https://ml58lemqnh9a.i.optimole.com/cb:0RuO.4e50/w:auto/h:auto/q:90/f:best/https://tarekbuyshouses.com/wp-content/uploads/2023/09/Tulsa_ab2f69653f.webp"
        },
    ])
    const [cityAreas, setCityAreas] = useState([])
    const [descriptions, setDescriptions] = useState([
        {
            city: "tulsa-ok",
            title: "We Buy Houses In Tulsa - In Any Condition!",
            content: "We buy outdated and distressed homes in Tulsa, Broken Arrow, Owasso, Jenks, and all of Tulsa County, for cash. We buy old houses and houses in need of repair. No matter how bad the condition, we can buy your fixer in as little as 7 days… or on your schedule. And when you work with TBH we pay all the real estate fees so you can keep more cash in your pocket!"
        },
        {
            city: "los-angeles-ca",
            title: "We Buy Houses In Any Condition",
            content: "Selling your home in Los Angeles can be a time-consuming and stressful process. Our goal is to remove the stress by offering you cash for your home and closing within weeks or on your schedule. No repairs, no commissions, no hidden fees. Work with Tarek and his team, and you’ll get dedicated support everyday of the week, from the moment you request a cash offer to month’s after your move."
        },
        {
            city: "orange-county-ca",
            title: "We Buy Houses In Any Condition",
            content: "Selling your home in Orange County can be a time-consuming and stressful process. Our goal is to remove the stress by offering you cash for your home and closing within weeks or on your schedule. No repairs, no commissions, no hidden fees. Work with Tarek and his team, and you’ll get dedicated support everyday of the week, from the moment you request a cash offer to month’s after your move."
        }
    ])
    const [testimonialData, setTestimonialData] = useState([
        {
            title: "I felt comfortable throughout the process!",
            content: "Usually not big on writing reviews. Just wanted to say I was pretty apprehensive to work with Tarek’s team at first because I wasn’t sure if I would get the most money for the house. Not only did they get me the best price over other quotes I got, but they really educated me on what was what, so I felt comfortable throughout the process.",
            author: "Matt T. - San Bernardino, CA"
        },
        {
            title: "They made it completely stress free!",
            content: "Working with Tarek’s team was the easiest and most enjoyable experience I have ever had selling a home. I didn’t really have time to deal with fixing it myself and listing it with an agent and having open houses and then waiting for it to sell. I worked with Robert and he was knowledgeable and patient – they made it completely stress free.",
            author: "Carlos S. - San Diego, CA"
        },
        {
            title: "The best service I've ever had!",
            content: "The BEST service I have ever had! The Tarek Buys Houses Team went above and beyond our expectations. From the day we contacted them to the day we closed escrow I knew they were looking out for our best interests. They were professional, knowledgeable, and were available to us whenever we needed them. Two thumbs up!",
            author: "Gina P. - Riverside, CA"
        },
        {
            title: "It was a pleasure working with you",
            content: "It was a pleasure meeting you and I enjoyed talking to you. I wanted to let you know that the whole experience with your organization is the best I have had in a long time. You are a great spokesman for your organization, the people at the escrow were very pleasant and friendly and ready to work with and the whole experience was stress-free. I wish nothing but the best for you and that the house will be everything that you hoped it would be. It was a pleasure working with you and wish you the best.",
            author: "Rudy Vander Upwich - Huntington Beach, CA"
        },
        {
            title: "I felt comfortable throughout the process!",
            content: "Usually not big on writing reviews. Just wanted to say I was pretty apprehensive to work with Tarek’s team at first because I wasn’t sure if I would get the most money for the house. Not only did they get me the best price over other quotes I got, but they really educated me on what was what, so I felt comfortable throughout the process.",
            author: "Matt T. - San Bernardino, CA"
        },
        {
            title: "They made it completely stress free!",
            content: "Working with Tarek’s team was the easiest and most enjoyable experience I have ever had selling a home. I didn’t really have time to deal with fixing it myself and listing it with an agent and having open houses and then waiting for it to sell. I worked with Robert and he was knowledgeable and patient – they made it completely stress free.",
            author: "Carlos S. - San Diego, CA"
        }
    ])
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
    const [isHovered, setHovered] = useState({
        hover: false,
        id: ""
    });
    const [city, setCity] = useState("");
    const [description, setDescription] = useState(null);
    const params = useParams();
    const cityName = params?.byCity;



    useEffect(() => {
        const des = descriptions?.find((description) => description.city === cityName);
        const area = areas?.filter((ar) => ar.city === cityName);

        const city = cityName === "tulsa-ok" ? "Tulsa" : cityName === "los-angeles-ca" ? "Los Angeles" : "Orange County"
        setCity(city)
        setDescription(des)
        setCityAreas(area);

    }, [cityName])

    console.log(isHovered);

    return (
        <section>
            <CityBanner
                banner={cityName === "orange-county-ca" ? banner2 : cityName === "tulsa-ok" ? banner3 : banner1}

                title={cityName === "orange-county-ca" ? "Sell your house in Orange County" : cityName === "tulsa-ok" ? "Sell your house in Tulsa County" : "Sell your house in Los Angeles"}

                subTitle={cityName === "orange-county-ca" ? "We've helped over 237 Homeowners in OC" : cityName === "tulsa-ok" ? "We've helped over 456 Homeowners in TC" : "We've helped over 745 Homeowners in LA"}
            />
            <PartnerContainer />

            {/* Description */}
            <div className='mt-28 mb-20 px-5 text-center'>
                <h1 className='text-3xl font-bold text-[#333]'>{description?.title}</h1>
                <p className='max-w-2xl mx-auto my-5 text-lg font-normal'>{description?.content}</p>
            </div>


            {/* Sell My House Fast */}
            <div className='my-16 px-5'>

                <div className='w-full max-w-5xl mx-auto text-center'>
                    <h1 className='text-3xl font-bold text-[#333]'>How Do I Sell My House Fast?</h1>

                    <div className='flex items-center lg:items-start justify-center flex-col lg:flex-row gap-10 mt-14'>

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='bg-white p-[25px] rounded-full'>
                                <svg aria-hidden="true" fill='#d9821b' height="40" width="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                            </div>

                            <h3 className='text-[22px] font-medium text-[#333] mt-2'>1. Schedule A Call</h3>
                            <p className='text-base max-w-[232px] font-light'>The first step is to speak with a Orange County Specialst to learn more about the home.</p>
                        </div>


                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='bg-white p-[25px] rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke="#d9821b" fill="#d9821b" stroke-width="0" viewBox="0 0 24 24" height="40" width="40"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"></path></g></svg>
                            </div>

                            <h3 className='text-[22px] font-medium text-[#333] mt-2'>2. Get A Cash Offer</h3>
                            <p className='text-base max-w-[232px] font-light'>After the initial consultation, we’ll put together an all-cash offer within 24 hrs.</p>
                        </div>


                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='bg-white p-[25px] rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke="#d9821b" fill="#d9821b" stroke-width="0" viewBox="0 0 512 512" height="40" width="40"><path d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"></path></svg>
                            </div>

                            <h3 className='text-[22px] font-medium text-[#333] mt-2'>3. Close Quickly</h3>
                            <p className='text-base max-w-[232px] font-light'>Close in as little as 7 days after you accept our written offer on your home!</p>
                        </div>


                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='bg-white p-[25px] rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" stroke="#d9821b" fill="#d9821b" stroke-width="0" viewBox="0 0 640 512" height="40" width="40"><path d="M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z"></path></svg>
                            </div>

                            <h3 className='text-[22px] font-medium text-[#333] mt-2'>4. Move On</h3>
                            <p className='text-base max-w-[232px] font-light'>That&apos;s it! You&apos;ve sold your home with absolutely no fees or commissions!</p>
                        </div>

                    </div>

                    <div className='mt-20 flex items-center justify-center'>
                        <button className='w-72 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-netural'>Learn More</button>
                    </div>
                </div>

            </div>

            {/* Promise */}

            <div className='px-5 py-14 mt-20'>

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

            {/* Testimonial */}
            <div className='mb-10 bg-white py-16'>
                <div className='relative flex items-center flex-col justify-center'>
                    <div className='w-full bg-primary text-center py-10 z-10'>
                        <h1 className='font-bold text-white text-3xl'>{city} loves working with Tarek Buys Houses</h1>
                    </div>
                    <div className='absolute top-28 lg:top-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" x="0" y="0" version="1.1" viewBox="0 0 487.272 487.272" width="50" height="50"><path d="M468.018 196.707 289.885 18.573c-26.341-23.625-66.246-23.625-92.587 0L19.165 196.493c-25.554 25.573-25.554 67.014 0 92.587L197.298 467a63.997 63.997 0 0 0 46.293 19.413 64 64 0 0 0 46.293-18.987l178.133-178.133.267-.267c25.421-25.567 25.302-66.9-.266-92.319z" fill="url(&quot;#SvgjsLinearGradient1063&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1063"><stop stopColor="#d9821b" offset="0"></stop><stop stopColor="#d9821b" offset="1"></stop></linearGradient></defs></svg>
                    </div>
                </div>

                <div className='my-14 flex max-w-6xl mx-auto flex-col lg:flex-row items-center justify-center gap-16'>

                    <div className='relative w-3/4'>
                        <Image src={thumb2} alt='Thumb2' className='w-full' />
                        <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                            <HouseOwnerVideo id="2" isOpen={true} url="https://www.youtube-nocookie.com/embed/vjbp7kMFOT8?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=1&autoplay=1" />
                        </div>
                    </div>

                    <div className='w-full h-full'>
                        <Carousel data={testimonialData} />
                    </div>
                </div>

                <div className="w-full mt-20 flex flex-col items-center justify-center gap-y-7">

                    <button className='w-72 text-center px-10 py-2 bg-primary border-2 border-primary rounded text-lg font-bold
                    text-white transition-all duration-500 shadow-netural'>GET MY FREE OFFER</button>

                    <Image src={reviewImg} alt="reviewImg" />
                </div>
            </div>

            {/* Specialities */}

            <div className='my-20 px-5'>
                <h1 className='text-3xl font-bold text-[#333] text-center'>Why {city} Homeowners are Requesting Offers</h1>
                <p className='max-w-5xl mx-auto text-center text-lg text-[#333] font-light mb-10 mt-5'>Our philosophy at Tarek Buys Houses is that we don’t need to win every opportunity–but we want to earn your respect and trust. Our job, first and foremost, is to educate and consult with you on the difference between available options and then help guide you to the option that best suits your goals and needs.</p>
                <Specialities />
            </div>

            {/* Time to sell */}


            <div className='mt-28 bg-[#FFEDD9] py-16'>
                <div className='max-w-6xl mx-auto flex flex-col items-center justify-center'>
                    <div className="px-5">
                        <h1 className='text-3xl font-bold text-[rgb(217,130,27)] text-center'>Right Now is a Great Time to Sell in {city} </h1>
                        <p className='max-w-5xl mx-auto text-center text-lg text-[#333] font-light mb-10 mt-5'>As investors we provide the ease and hassel free option of selling without walk-throughs, without repairs, without staging, without appraisals and without fees.</p>
                    </div>

                    <div className='w-full flex items-center lg:items-start justify-evenly flex-col lg:flex-row mt-6 mb-11 gap-6'>

                        <div className='text-center'>
                            <h1 className='text-[#4C4847] font-bold text-6xl'>774K</h1>
                            <p className='text-lg font-normal text-[#333] mt-3 max-w-[350px]'>Number Of Houses Sold Monthly (US)</p>
                        </div>

                        <div className='text-center'>
                            <h1 className='text-[#4C4847] font-bold text-6xl'>402
                                K</h1>
                            <p className='text-lg font-normal text-[#333] mt-3 max-w-[280px]'>Number of homes for sale (US)</p>
                        </div>


                        <div className='text-center'>
                            <h1 className='text-[#4C4847] font-bold text-6xl'>$
                                416
                                K</h1>
                            <p className='text-lg font-normal text-[#333] mt-3 max-w-[280px]'>Average Home Price After Rehab Condition (US)</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Areas */}

            <div className='my-28'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-[#333]'>Sell Your Home To {city}’ #1 Home Cash Buyer</h1>
                    <p className='my-[10px] font-normal text-[#333]'>Tarek Buys Houses operates in the following cities and surrounding areas:</p>
                </div>


                <div className='w-[95%] max-w-5xl mx-auto mt-11 grid grid-cols-12 gap-7'>
                    {
                        cityAreas?.map((area, index) => <div className={`relative w-full overflow-hidden col-span-12 md:col-span-6 lg:col-span-3`} key={index}>
                            <div className={`w-full ${isHovered.id === index?.toString() ? "hover-scale" : "hover-scale-normal"}`}>
                                <img src={area?.img} alt={area?.name} className="h-[170px] w-full" />
                            </div>

                            <div className='absolute w-full h-full top-0 bg-black/40 flex items-center justify-center overflow-hidden'
                                onMouseEnter={() => setHovered({ hover: true, id: index?.toString() })}
                                onMouseLeave={() => setHovered({ hover: false, id: "" })}>
                                <h1 className='font-bold text-2xl text-white'>{area?.name}</h1>
                            </div>
                        </div>)
                    }
                </div>

                <div className="w-[95%] max-w-4xl mx-auto mt-11">
                    <p className="text-center text-lg font-normal">We are glad to answer your questions, help you better understand your options in Los Angeles County, and walk you through how our hassle-free “home buying” process works…where we’ll make you a fair no-obligation, as-is offer. It’s simple, straightforward, and just may be perfect for you.</p>
                </div>
            </div>


            {/* Situations and  Costly Repairs*/}
            <div className="bg-white py-14">
                {/* Situations */}
                <div className='my-12 max-w-5xl mx-auto text-center'>

                    <h1 className='text-[#3c3838] font-bold text-3xl text-center'>We Can Help You In Most Situations</h1>

                    <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-10 mt-14'>
                        <div>
                            <div className='relative'>
                                <Image src={sellHouseCash} alt='Hero' className='w-full' />

                            </div>
                            <div className='mt-6'>
                                <h1 className='text-[#3c3838] font-bold text-lg text-center'>Need To Sell Quickly? We Buy Properties In ANY Condition For All Cash. Get An Offer Within 24 Hours!</h1>

                                <div className='mt-6 flex items-center justify-center'>
                                    <button className='w-60 text-center px-10 py-2 bg-base-100 border-2 border-primary rounded-md text-lg font-bold text-primary hover:bg-primary hover:text-white transition-all duration-500 shadow-netural uppercase'>Get your Offer</button>
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

                <div className='mt-28 mb-12 max-w-5xl mx-auto text-center w-[96%]'>

                    <h1 className='text-[#3c3838] font-bold text-3xl text-center'>We Can Help You In Most Situations</h1>

                    <div className='w-full flex flex-col lg:flex-row items-start justify-center gap-20 mt-20'>
                        <div className="w-full">
                            <div className='relative'>
                                <Image src={rateImg} alt='rateImg' />

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
            </div>

            {/* Mission */}

            <div className='my-28 max-w-5xl mx-auto text-center'>

                <h1 className='text-[#3c3838] font-bold text-3xl text-center'>Our Mission</h1>

                <div className="font-normal text-base max-w-4xl mx-auto text-center mt-6 space-y-4">
                    <p>At Tarek Buys Houses, our mission is to be America’s most trusted One-Stop-Solution for helping homeowners get the best outcome when it’s time to sell your house and move on. For too long, the process for selling outdated and damaged houses has been terrible for sellers. Local property investors capitalize on homeowner distress to purchase houses cheap and resell them for huge profits.</p>
                    <p>Tarek Buys Houses is putting more of those profits back in the hands of the Orange County homeowner. We’ve developed a model to predict when sellers will need our help, a best-in-class sales and marketing team to reach them, and a trusted brand that allows us to grow through word of mouth and referrals. With heart and efficiency, we’re able to deliver the most competitive price to sellers. We work for you, and pay all the fees so that you don’t have to.</p>
                </div>

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

export default ByCity;