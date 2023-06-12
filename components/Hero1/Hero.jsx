"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile.png'
import Image from 'next/image'

const Hero = () => {

    return (
        <div className='md:mt-20 mt-10'>
            <div className='flex flex-col md:flex-row-reverse gap-4 justify-between items-center'>
                <div className='flex justify-center'>
                    <Image className='w-[28rem]' src={profile} alt='profile' />
                </div>
                <div className='flex flex-col md:gap-6 gap-4 md:w-1/2'>
                    <div className='flex flex-col md:gap-4 gap-2'>
                        <h3 className='md:text-3xl text-xl font-semibold tracking-widest text-gray-400'>Hello I'm</h3>
                        <h1 className='md:text-5xl text-2xl font-semibold tracking-wider text-teal-500'>
                            <Typewriter
                                cursor
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Abu Taher',
                                    'React Developer',
                                    'Front-End Developer',
                                    'MERN Developer',
                                    'Web Developer',
                                ]}
                            />
                        </h1>
                    </div>
                    <p className='text-gray-400 text-sm md:text-base'>I am equipped to build scalable and efficient web applications. Having successfully completed multiple projects with a focus on team collaboration, project management, and delivering high-quality work.</p>
                    <div>
                        <a
                            className="inline-flex items-center rounded-full border border-teal-500 bg-teal-500 px-8 py-3  hover:bg-transparent hover:text-teal-500 focus:outline-none focus:ring active:text-teal-500"
                            href="https://drive.google.com/file/d/1DwZ66Vk4bN5g_Oj-fVobGA5twpayYbUu/view?usp=drive_link" target={'_blank'}
                        >
                            <span className="text-sm font-medium"> Resume </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero