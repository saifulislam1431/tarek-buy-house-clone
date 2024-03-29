import React from 'react';
import item1 from "../../../../public/assets/when choose/item1.webp";
import item2 from "../../../../public/assets/when choose/item2.webp";
import item3 from "../../../../public/assets/when choose/item3.png";
import item4 from "../../../../public/assets/when choose/item4.webp";
import item5 from "../../../../public/assets/when choose/item5.png";
import item6 from "../../../../public/assets/when choose/item6.webp";
import Image from 'next/image';

const ChooseTarekBuy = ({ description }) => {
    return (
        <section className='my-32 text-center px-3'>
            <div>
                <h1 className='font-bold text-3xl'>When You Should Choose Tarek Buys Houses</h1>
                {
                    description ? <p className='text-lg mt-4 max-w-4xl mx-auto'> {description} </p> : <p className='text-lg mt-4 max-w-4xl mx-auto'>At Tarek Buys Houses, we help homeowners that are having a hard time selling or need to sell fast. If you sell your outdated or distressed home to us, we’ll pay for all of the repairs and your real estate fees. From hassle-free home sales, to <span className='font-bold'>covering up to $10k in moving costs</span>, we’ve got your back.</p>
                }
            </div>

            <div className='my-14 max-w-5xl mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28'>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item1} alt='Item 1' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Do you have an older home in need of repairs?</p>
                </div>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item2} alt='Item 2' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Do you have financial trouble such as foreclosure or medical bills?</p>
                </div>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item3} alt='Item 3' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Did you have a sudden or unanticipated life event?</p>
                </div>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item4} alt='Item 4' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Do you need to relocate or downsize?</p>
                </div>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item5} alt='Item 5' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Do you want to sell an inherited property?</p>
                </div>
                <div className='flex flex-col items-center gap-y-6'>
                    <Image src={item6} alt='Item 6' className='w-20 h-20' />
                    <p className='text-lg text-center font-light'>Do you have structural issues or unpermitted work?</p>
                </div>
            </div>
        </section>
    );
};

export default ChooseTarekBuy;