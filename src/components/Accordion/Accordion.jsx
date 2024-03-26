'use client'

import "./accordion.css"
import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const Accordion = ({ sections }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleSection = index => {
        setOpenIndex(index === openIndex ? -1 : index);
    };
    return (
        <div className="accordion w-full max-w-2xl mx-auto flex flex-col gap-4 bg-[#F5F5F5]">
            {sections?.map((section, index) => (
                <div key={index} className="accordion-section cursor-pointer">
                    <div
                        className={`accordion-header flex items-center justify-between p-7 hover:text-primary font-bold ${openIndex === index ? "text-primary" : ""}`}
                        onClick={() => toggleSection(index)}
                    >
                        {section?.title}
                        {openIndex === index ? (
                            <FaArrowUp className="accordion-icon text-primary font-bold" size={14} />
                        ) : (
                            <FaArrowDown className="accordion-icon font-bold" size={14} />
                        )}
                    </div>
                    {openIndex === index && (


                        <div
                            className={`accordion-content w-full bg-[#ffffff] p-7 text-[15px] transition-all duration-1000`}
                        >
                            {section.content}
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default Accordion;