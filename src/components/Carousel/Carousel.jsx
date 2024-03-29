"use client"
import "./carousel.css"
import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // const carouselRef = useRef(null);
    // const grabRef = useRef(null);
    // const dragStartX = useRef(null);
    // const dragStartIndex = useRef(null);

    // const handleGrab = (e) => {
    //     dragStartX.current = e.clientX;
    //     dragStartIndex.current = activeIndex;
    //     document.addEventListener('mousemove', handleDrag);
    //     document.addEventListener('mouseup', handleRelease);
    //     grabRef.current.classList.add('grabbing');
    // };

    // const handleDrag = (e) => {
    //     const offsetX = e.clientX - dragStartX.current;
    //     const slidesLength = data.length;
    //     const indexOffset = Math.round(offsetX / 10);

    //     setActiveIndex((dragStartIndex.current - indexOffset + slidesLength) % slidesLength);
    // };

    // const handleRelease = () => {
    //     document.removeEventListener('mousemove', handleDrag);
    //     document.removeEventListener('mouseup', handleRelease);
    //     grabRef.current.classList.remove('grabbing');
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data?.length]);

    const goToSlide = index => {
        setActiveIndex(index);
    };

    return (
        <div className="carousel min-h-[650px] lg:min-h-[550px]">
            {data.map((data, index) => (

                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''} flex flex-col items-center justify-center text-center px-3 h-full cursor-grab grab`}>
                    <div className="flex items-center flex-col">
                        <h1 className="font-bold text-2xl text-primary">&rdquo;{data?.title}&rdquo;</h1>
                        <p className="border-b-4 border-primary w-60 h-2 pb-5"></p>
                    </div>

                    <p className="max-w-5xl text-center my-6 text-[20px] text-[#333]">
                        {data?.content}
                    </p>

                    <p className="pb-10 font-bold text-xl">{data?.author}</p>
                </div>
            ))}

            <div className="dots">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? 'dot active' : 'dot'}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;