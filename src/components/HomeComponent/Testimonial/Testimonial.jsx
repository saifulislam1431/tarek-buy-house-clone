'use client'
import Image from "next/image";
import reviewImg from "../../../../public/assets/New folder/locationReview.png"
import { useState } from "react";
import Carousel from "@/components/Carousel/Carousel";

const Testimonial = () => {
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
    return (
        <section className='bg-white py-10'>
            <div className='w-full h-full'>
                <Carousel data={testimonialData} />
            </div>

            <div className="w-full mt-10 flex items-center justify-center">
                <Image src={reviewImg} alt="reviewImg" />
            </div>
        </section>
    );
};

export default Testimonial;