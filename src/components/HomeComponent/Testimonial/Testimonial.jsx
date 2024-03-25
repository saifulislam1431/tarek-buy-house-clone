import { Carousel } from "flowbite-react";
import Image from "next/image";
import reviewImg from "../../../../public/assets/New folder/locationReview.png"

const Testimonial = () => {
    return (
        <section className='bg-white py-10'>
            <div className="h-[600px] lg:h-[500px]">
                <Carousel leftControl="" rightControl="">
                    <div className="w-full flex flex-col items-center justify-center text-center px-3">
                        <div className="flex items-center flex-col">
                            <h1 className="font-bold text-2xl text-primary">&rdquo;It was a pleasure working with you&rdquo;</h1>
                            <p className="border-b-4 border-primary w-60 h-2 pb-5"></p>
                        </div>

                        <p className="max-w-5xl text-center my-6">
                            It was a pleasure meeting you and I enjoyed talking to you. I wanted to let you know that the whole experience with your organization is the best I have had in a long time. You are a great spokesman for your organization, the people at the escrow were very pleasant and friendly and ready to work with and the whole experience was stress-free. I wish nothing but the best for you and that the house will be everything that you hoped it would be. It was a pleasure working with you and wish you the best.
                        </p>

                        <p className="pb-10 font-bold text-xl">Rudy Vander Upwich - Huntington Beach, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center text-center px-3">
                        <div className="flex items-center flex-col">
                            <h1 className="font-bold text-2xl text-primary">&rdquo;The best service I&apos;ve ever had!&rdquo;</h1>
                            <p className="border-b-4 border-primary w-60 h-2 pb-5"></p>
                        </div>

                        <p className="max-w-5xl text-center my-6">

                            The BEST service I have ever had! The Tarek Buys Houses Team went above and beyond our expectations. From the day we contacted them to the day we closed escrow I knew they were looking out for our best interests. They were professional, knowledgeable, and were available to us whenever we needed them. Two thumbs up!

                        </p>

                        <p className="pb-10 font-bold text-xl">Gina P. - Riverside, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center text-center px-3">
                        <div className="flex items-center flex-col">
                            <h1 className="font-bold text-2xl text-primary">&rdquo;It was a pleasure working with you&rdquo;</h1>
                            <p className="border-b-4 border-primary w-60 h-2 pb-5"></p>
                        </div>

                        <p className="max-w-5xl text-center my-6">


                            It was a pleasure meeting you and I enjoyed talking to you. I wanted to let you know that the whole experience with your organization is the best I have had in a long time. You are a great spokesman for your organization, the people at the escrow were very pleasant and friendly and ready to work with and the whole experience was stress-free. I wish nothing but the best for you and that the house will be everything that you hoped it would be. It was a pleasure working with you and wish you the best.


                        </p>

                        <p className="pb-10 font-bold text-xl">Rudy Vander Upwich - Huntington Beach, CA</p>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center text-center px-3">
                        <div className="flex items-center flex-col">
                            <h1 className="font-bold text-2xl text-primary">&rdquo;I felt comfortable throughout the process!&rdquo;</h1>
                            <p className="border-b-4 border-primary w-60 h-2 pb-5"></p>
                        </div>

                        <p className="max-w-5xl text-center my-6">

                            Usually not big on writing reviews. Just wanted to say I was pretty apprehensive to work with Tarek’s team at first because I wasn’t sure if I would get the most money for the house. Not only did they get me the best price over other quotes I got, but they really educated me on what was what, so I felt comfortable throughout the process.

                        </p>

                        <p className="pb-10 font-bold text-xl">Matt T. - San Bernardino, CA</p>
                    </div>
                </Carousel>
            </div>

            <div className="w-full mt-10 flex items-center justify-center">
                <Image src={reviewImg} alt="reviewImg" />
            </div>
        </section>
    );
};

export default Testimonial;