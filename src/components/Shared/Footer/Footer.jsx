import React from 'react';
import logo from "../../../../public/assets/logo/TBH-logo-primary.webp"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='px-3 bg-white flex flex-col lg:flex-row items-center justify-between shadow-2xl gap-6 lg:gap-3'>
            <div className='w-full flex flex-col lg:flex-row items-center gap-5'>
                <div>
                    <Image src={logo} alt='logo' className='w-32 lg:28' />
                </div>
                <div className='w-full lg:w-fit iconContainer px-7 py-3 flex items-center justify-center gap-x-5'>
                    <Link href="#" className='bg-white p-2 rounded-md hover:bg-primary text-[#4C4847] hover:text-white transition-all duration-500 icon'>
                        <FaFacebookF className='w-5 h-5' />
                    </Link>
                    <Link href="#" className='bg-white p-2 rounded-md hover:bg-primary text-[#4C4847] hover:text-white transition-all duration-500 icon'>
                        <FaInstagram className='w-5 h-5' />
                    </Link>
                    <Link href="#" className='bg-white p-2 rounded-md hover:bg-primary text-[#4C4847] hover:text-white transition-all duration-500 icon'>
                        <FaYoutube className='w-5 h-5' />
                    </Link>
                    <Link href="#" className='bg-white p-2 rounded-md hover:bg-primary text-[#4C4847] hover:text-white transition-all duration-500 icon'>
                        <FaTwitter className='w-5 h-5' />
                    </Link>
                </div>

                <div className='flex flex-col items-center'>
                    <p className='text-sm font-light text-center'>© Tarek Buys Houses, LLC | 4411 E La Palma Ave, Anaheim, CA 92807</p>
                    <div className='flex gap-3 mt-1'>
                        <Link href="/" className='text-sm font-semibold text-[#4C4847] hover:text-primary transition-all duration-500'>Privacy Policy</Link>
                        <Link href="/" className='text-sm font-semibold text-[#4C4847] hover:text-primary transition-all duration-500'>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end pb-5 lg:pb-0'>
                <input type="submit" className="text-white bg-primary px-4 py-2 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 rounded-md" value="Back to top" />
            </div>

        </footer>
    );
};

export default Footer;