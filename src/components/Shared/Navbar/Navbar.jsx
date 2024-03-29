'use client'

import { FaPhoneAlt } from "react-icons/fa";
import React, { useContext, useEffect, useState } from 'react';
import logo from "../../../../public/assets/logo/TBH-logo-primary.webp"
import rating from "../../../../public/assets/logo/header-cert.webp"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import useShake from "@/hooks/useShake";
import { ParentContext } from "@/utils/Provider/Provider";

const Navbar = () => {
    const { setShake, shake } = useContext(ParentContext);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            const scrolled = window.scrollY > 200;
            setIsScrolled(scrolled)
            if (!scrolled) {
                setMenuOpen(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuToggle = () => {
        setMenuOpen(!isMenuOpen);
    }

    const menuIcon = <div className={`menu-icon ${isMenuOpen && "open"}`} onClick={menuToggle}>
        <span></span>
        <span></span>
        <span></span>
    </div>


    const handleShake = () => {
        setShake(!shake)
    }


    return (
        <nav className='bg-base-100 px-2 relative flex items-center justify-between lg:items-start gap-10 py-3 lg:py-0 h-[75px]'>
            {/* logo */}
            <Link href="/" className="2xl:w-[250px]">
                <Image src={logo} alt='logo' className='      w-28 lg:w-40' />
            </Link>

            {/* Larger menu */}
            <div className='w-full hidden lg:flex h-full'>
                {
                    isScrolled ? <ul className='w-full flex items-center justify-between py-3'>
                        <div className="flex gap-3 w-full max-w-5xl justify-end">
                            <input type="text" placeholder="Enter your home address" className="px-3 py-2 rounded-md outline-none border border-neutral w-full max-w-lg focus:outline-none focus:border-none" />
                            <input type="submit" className="text-white bg-primary px-14 py-2 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 rounded-md" value="Get My Free Offer" onSubmit={handleShake} />
                        </div>

                        <div className="w-full max-w-[500px] flex items-center justify-between px-20">
                            <div>
                                {menuIcon}
                            </div>


                            <div className="flex">
                                <Image src={rating} alt='Rating' className='w-12' />
                            </div>
                        </div>
                    </ul> : <ul className='w-full flex items-center justify-center h-full'>
                        <li className="navBorder h-full w-1/2 xl:w-full">
                            <Link href="#" className="flex items-center gap-2 h-full justify-center nav-text lg:text-sm 2xl:text-2xl">
                                <FaPhoneAlt className="text-[#d9821b]" /> <span className="font-extrabold">(866) 419-4117</span>
                            </Link>
                        </li>
                        <li className={`navBorder h-full w-2/4 ${path === "/about-us" && "active"}`}>
                            <Link href="/about-us" className="flex items-center gap-2 h-full justify-center nav-text">
                                About Us
                            </Link>
                        </li>
                        <li className={`navBorder h-full w-2/4 ${path === "/our-process" && "active"}`}>
                            <Link href="/our-process" className="flex items-center gap-2 h-full justify-center nav-text">
                                Our Process
                            </Link>
                        </li>
                        <li className={`navBorder h-full w-2/4 ${path === "/blog" && "active"}`}>
                            <Link href="/blog" className="flex items-center gap-2 h-full justify-center nav-text">
                                Blog
                            </Link>
                        </li>
                        <li className={`navBorder h-full w-2/4 ${path === "/faq" && "active"}`}>
                            <Link href="/faq" className="flex items-center gap-2 h-full justify-center nav-text">
                                FAQ
                            </Link>
                        </li>
                        <li className='inline-flex items-center gap-8 pl-8 w-full justify-center cursor-pointer' onClick={handleShake}>
                            <div className="text-white bg-primary px-4 py-2 font-semibold text-sm hover:bg-[#9b5d12] transition-all duration-300 w-full text-center">
                                Get My Free Offer
                            </div>

                            <div className="w-20 2xl:w-full">
                                <Image src={rating} alt='Rating' className='w-16' />
                            </div>
                        </li>
                    </ul>
                }
            </div>

            {/* Small Menu */}
            <div className={`absolute left-0 w-full bg-white flex items-center justify-center ${isMenuOpen ? "top-16" : "-top-[500px]"} transition-all duration-500`}>
                <ul className='w-full flex flex-col items-center justify-center py-10 gap-5 uppercase text-base font-semibold text-[#4C4847]'>
                    <li className={`w-full text-center py-6 ${path === "/about-us" && "bg-primary text-white"}`}>
                        <Link href="/about-us">
                            About Us
                        </Link>
                    </li>
                    <li className={`w-full text-center py-6 ${path === "/our-process" && "bg-primary text-white"}`}>
                        <Link href="/our-process">
                            Our Process
                        </Link>
                    </li>
                    <li className={`w-full text-center py-6 ${path === "/blog" && "bg-primary text-white"}`}>
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className={`w-full text-center py-6 ${path === "/faq" && "bg-primary text-white"}`}>
                        <Link href="/faq">
                            FAQ
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="lg:hidden">
                <Link href="#" className="inline-flex items-center gap-1 bg-[#d9821b] text-white px-4 py-1 rounded">
                    <FaPhoneAlt /> <span className="font-extrabold text-sm text-nowrap">(866) 419-4117</span>
                </Link>
            </div>
            <div className="lg:hidden">
                {menuIcon}
            </div>
        </nav>
    );
};

export default Navbar;