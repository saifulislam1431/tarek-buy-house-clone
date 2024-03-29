import Accordion from '@/components/Accordion/Accordion';
import React from 'react';

const FAQ = () => {
    const sections = [
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
    ];

    return (
        <section className='my-28 bg-[#E19D4B]'>
            <div className='w-[97%] max-w-5xl mx-auto py-24'>
                <h1 className='text-center font-bold text-2xl lg:text-4xl text-white'>Frequently Asked Questions</h1>

                <div className='mt-16'>
                    <Accordion sections={sections} />
                </div>
            </div>
        </section>
    );
};

export default FAQ;