import React from 'react';
import HouseOwnerVideo from './HouseOwnerVideo';
import Image from 'next/image';
import thumb1 from "../../../../public/assets/New folder/hqdefault2.webp";
import thumb2 from "../../../../public/assets/New folder/hqdefault3.webp";
import thumb3 from "../../../../public/assets/New folder/hqdefault.webp";
import { FaPlayCircle } from 'react-icons/fa';

const HouseOwners = () => {
    return (
        <section className='mt-16 bg-white'>
            <div className='relative flex items-center flex-col justify-center'>
                <div className='w-full bg-primary text-center py-10 z-10'>
                    <h1 className='font-bold text-white text-3xl'>Homeowners love working with Tarek Buys Houses!</h1>
                </div>
                <div className='absolute top-28 lg:top-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" x="0" y="0" version="1.1" viewBox="0 0 487.272 487.272" width="50" height="50"><path d="M468.018 196.707 289.885 18.573c-26.341-23.625-66.246-23.625-92.587 0L19.165 196.493c-25.554 25.573-25.554 67.014 0 92.587L197.298 467a63.997 63.997 0 0 0 46.293 19.413 64 64 0 0 0 46.293-18.987l178.133-178.133.267-.267c25.421-25.567 25.302-66.9-.266-92.319z" fill="url(&quot;#SvgjsLinearGradient1063&quot;)"></path><defs><linearGradient id="SvgjsLinearGradient1063"><stop stopColor="#d9821b" offset="0"></stop><stop stopColor="#d9821b" offset="1"></stop></linearGradient></defs></svg>
                </div>
            </div>

            <div className='mt-16 flex flex-col lg:flex-row items-center justify-center gap-7'>
                <div className='relative'>
                    <Image src={thumb1} alt='Thumb1' />
                    <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                        <HouseOwnerVideo id="1" isOpen={true} url="https://www.youtube-nocookie.com/embed/eLBToOHBpO4?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=1&amp;autoplay=1" />
                    </div>
                </div>

                <div className='relative'>
                    <Image src={thumb2} alt='Thumb2' />
                    <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                        <HouseOwnerVideo id="2" isOpen={true} url="https://www.youtube-nocookie.com/embed/vjbp7kMFOT8?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=1&autoplay=1" />
                    </div>
                </div>

                <div className='relative'>
                    <Image src={thumb3} alt='Thumb3' />
                    <div className='absolute top-0 bg-neutral w-full h-full bg-opacity-10 flex items-center justify-center'>
                        <HouseOwnerVideo id="3" isOpen={true} url="https://www.youtube-nocookie.com/embed/Ytr9jLifs4I?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=1&autoplay=1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HouseOwners;