import React from 'react';
import cnn from "../../../../public/assets/partner/cnn.webp";
import forbes from "../../../../public/assets/partner/forbes.webp";
import fox from "../../../../public/assets/partner/foxi.webp";
import people from "../../../../public/assets/partner/people.webp";
import usetoday from "../../../../public/assets/partner/usa.webp";
import hgtv from "../../../../public/assets/partner/hgtv.webp";
import Image from 'next/image';

const PartnerContainer = () => {
    return (
        <section className='px-4 w-full flex items-center justify-evenly bg-base-100'>
            <div>
                <Image src={cnn} alt='CNN' className='w-12 lg:w-24' />
            </div>
            <div>
                <Image src={forbes} alt='Forbes' className='w-12 lg:w-24' />
            </div>
            <div>
                <Image src={fox} alt='Fox' className='w-12 lg:w-24' />
            </div>
            <div>
                <Image src={people} alt='People' className='w-12 lg:w-24' />
            </div>
            <div>
                <Image src={usetoday} alt='USA Today' className='w-12 lg:w-24' />
            </div>
            <div>
                <Image src={hgtv} alt='HGTV' className='w-12 lg:w-24' />
            </div>

        </section>
    );
};

export default PartnerContainer;