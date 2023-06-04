"use client"

import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaQuoteRight } from "react-icons/fa";
import { LOOP } from '@splidejs/splide';

const Testimonial = () => {
    return (
        <div id='testimonial' className='md:my-32 mt-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-4xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-pink-600 before:bottom-1'><span className='relative text-white'>TESTIMONIAL</span></span></h1>
            </div>
            <div>
                <Splide
                    options={{
                        perPage: 1,
                        arrows: false,
                        pagination: false,
                        perMove: 1,
                        rewind: true,
                        autoplay: true,
                        type: LOOP,
                        gap: '4rem'
                    }}
                >
                    {
                        testimonials.map((e, i) => {
                            const { name, text, img, work } = e;
                            return (
                                <SplideSlide className='flex flex-col md:justify-center items-center' key={i}>
                                    <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:w-[60rem] md:p-8 p-4 bg-slate-600 rounded-2xl'>
                                        <div className='md:block hidden'>
                                            <img className='md:w-[40rem]' src={img} alt="testimonial" />
                                        </div>
                                        <div className='flex flex-col justify-between gap-4'>
                                            <div>
                                                <p className='text-gray-200 md:text-2xl text-lg'>{text}</p>
                                            </div>
                                            <div className='flex justify-between items-center pt-4'>
                                                <div className='flex flex-col md:flex-row md:items-center gap-4'>
                                                    <div className='border-pink-600 border-2 md:w-24 w-16'></div>
                                                    <h1 className='md:text-4xl text-2xl text-gray-200'>{name}<br /><span className='md:text-3xl text-xl'>{work}</span></h1>
                                                </div>
                                                <div>
                                                    <FaQuoteRight className='text-pink-600' size={'3rem'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div >
        </div>
    )
}

const testimonials = [
    {
        name: "Asif Sikder",
        text: " I highly recommend Abu Taher for any web development role. Their exceptional skills, dedication, and passion for their work make them a valuable asset to any team.",
        work: "Web Developer",
        img: "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
    },
    {
        name: "Parvez Ahmed",
        text: "I have had the pleasure of working closely with Abu Taher on several web development projects, and I must say, their skills and dedication impression on me.",
        work: "Web Developer",
        img: "https://ouch-cdn2.icons8.com/CLkc_2dBZOEddkT6m6uyMRJnFR5YBkxjm2cMlkToRPE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY5/LzIyYWNhYTcwLTI4/OTAtNGUwZC04ZGFj/LTI2ZmFmZDJjNzY2/YS5wbmc.png",
    },
    {
        name: "Sayed Siam",
        text: "Abu Taher possesses an impressive skill set in both Front-End and Back-End technologies, allowing them to excel in various aspects of web development.",
        work: "Web Developer",
        img: "https://ouch-cdn2.icons8.com/CLkc_2dBZOEddkT6m6uyMRJnFR5YBkxjm2cMlkToRPE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY5/LzIyYWNhYTcwLTI4/OTAtNGUwZC04ZGFj/LTI2ZmFmZDJjNzY2/YS5wbmc.png",
    }
]

export default Testimonial;