"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import profile from '../../assets/profile.png'
import Image from 'next/image'

const Hero = () => {

    return (
        <div className='md:mt-20 mt-10'>
            <div className='md:flex md:flex-row-reverse justify-between items-center'>
                <div className='flex justify-center'>
                    <Image className='w-[30rem]' src={profile} alt='profile' />
                </div>
                <div className='flex flex-col gap-6 md:w-1/2'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='md:text-4xl text-2xl font-semibold tracking-widest text-gray-400'>Hello I'm</h3>
                        <h1 className='md:text-7xl text-4xl font-semibold tracking-wider text-pink-600'>
                            <Typewriter
                                cursor
                                delaySpeed={1000}
                                deleteSpeed={25}
                                loop={0}
                                typeSpeed={75}
                                words={[
                                    'Abu Taher',
                                ]}
                            />
                        </h1>
                    </div>
                    <p className='text-gray-400 text-sm md:text-base'>I’m Abu Taher. I’m in class 12. Recently I finished my web development course in Programming Hero. I learned all my skills very discipline way. I have done some projects which were given to me by Programming Hero. I build those projects with MERN.</p>
                    <div>
                        <a
                            className="inline-flex items-center rounded-full border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring active:text-pink-500"
                            href="https://drive.google.com/file/d/1chhVtIsrpYDgIYB-Ta9C1PjnTHijrBkk/view?usp=sharing" target={'_blank'}
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