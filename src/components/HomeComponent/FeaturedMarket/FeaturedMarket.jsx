'use client'
import "./feature.css"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import img1 from "../../../../public/assets/featureImg/house10.jpg"
import img2 from "../../../../public/assets/featureImg/house23.jpg"
import img3 from "../../../../public/assets/featureImg/house5.jpg"

const FeaturedMarket = () => {
    const [isHovered, setHovered] = useState({
        hover: false,
        id: "0"
    });
    // console.log(isHovered);

    return (
        <section className='my-20'>
            <h1 className='font-bold text-3xl text-[#4C4847] text-center'>Featured Markets</h1>

            <div className='w-[90%]  mx-auto flex items-center justify-center gap-6 flex-col lg:flex-row mt-16'>

                <Link href="/we-buy-houses/orange-county-ca" className={`relative w-full overflow-hidden`}>
                    <div className={`w-full ${isHovered.id === "1" ? "hover-scale" : "hover-scale-normal"}`}>
                        <Image src={img1} alt='Town 1' />
                    </div>

                    <div className='absolute w-full h-full top-0 bg-primary/75 flex items-center justify-center overflow-hidden'
                        onMouseEnter={() => setHovered({ hover: true, id: "1" })}
                        onMouseLeave={() => setHovered({ hover: false, id: "0" })}>
                        <h1 className='font-bold text-3xl text-white'>Orange County</h1>
                    </div>
                </Link>

                <Link href="/we-buy-houses/los-angeles-ca" className={`relative w-full overflow-hidden`}>
                    <div className={`w-full ${isHovered.id === "2" ? "hover-scale" : "hover-scale-normal"}`}>
                        <Image src={img2} alt='Town 1' />
                    </div>

                    <div className='absolute w-full h-full top-0 bg-primary/75 flex items-center justify-center overflow-hidden'
                        onMouseEnter={() => setHovered({ hover: true, id: "2" })}
                        onMouseLeave={() => setHovered({ hover: false, id: "0" })}>
                        <h1 className='font-bold text-3xl text-white'>Los Angeles</h1>
                    </div>
                </Link>

                <Link href="/we-buy-houses/tulsa-ok" className={`relative w-full overflow-hidden`}>
                    <div className={`w-full ${isHovered.id === "3" ? "hover-scale" : "hover-scale-normal"}`}>
                        <Image src={img3} alt='Town 1' />
                    </div>

                    <div className='absolute w-full h-full top-0 bg-primary/75 flex items-center justify-center overflow-hidden'
                        onMouseEnter={() => setHovered({ hover: true, id: "3" })}
                        onMouseLeave={() => setHovered({ hover: false, id: "0" })}>
                        <h1 className='font-bold text-3xl text-white'>Tulsa County</h1>
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default FeaturedMarket;