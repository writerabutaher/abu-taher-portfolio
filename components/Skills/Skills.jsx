import React from 'react'
import { FaShoppingBag, FaTags } from 'react-icons/fa'
import css from '../../assets/css.png'
import firebase from '../../assets/firebase.png'
import html from '../../assets/html.png'
import js from '../../assets/javascript.png'
import mongo from '../../assets/mongoDB.png'
import node from '../../assets/node js.png'
import react from '../../assets/react.png'
import next from '../../assets/next.png'
import typescript from '../../assets/typescript.png'
import Image from 'next/image'

const Skills = () => {
    return (
        <div id='skill' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-teal-500 before:bottom-1'><span className='relative '>SKILL & EDU</span></span></h1>
            </div>
            <div className='md:flex justify-between gap-8'>
                <div className='md:w-1/2'>
                    <div className='flex items-center gap-4 py-8'>
                        <FaShoppingBag size={'2rem'} className='text-teal-500' />
                        <h1 className='md:text-4xl text-2xl '>Skills</h1>
                        <div className='border-teal-500 border-2 w-1/4'></div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 justify-center'>
                        <Image className='w-[6rem] pb-8' src={html} alt='html' />
                        <Image className='w-[6rem] pb-8' src={css} alt='css' />
                        <Image className='w-[6rem] pb-8' src={js} alt='javascript' />
                        <Image className='w-[6rem] pb-8' src={firebase} alt='firebase' />
                        <Image className='w-[6rem] pb-8' src={mongo} alt='mongo' />
                        <Image className='w-[6rem] pb-8' src={typescript} alt='typescript' />
                        <Image className='w-[6rem] pb-8' src={next} alt='next' />
                        <Image className='w-[6rem] pb-8' src={react} alt='react' />
                        <Image className='w-[6.5rem] pb-8' src={node} alt='node' />
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <div className='flex items-center gap-4 py-8'>
                        <FaTags size={'2rem'} className='text-teal-500' />
                        <h1 className='md:text-4xl text-2xl '>Education</h1>
                        <div className='border-teal-500 border-2 w-1/4'></div>
                    </div>
                    <div className='flex flex-col gap-8 text-2xl'>
                        <p>JDC in <span className='text-gray-400'>- Uttar Badda Islamia Kamil Madrasah <br />2018</span></p>
                        <p>Dakhil in <span className='text-gray-400'>- Uttar Badda Islamia Kamil Madrasah <br />2021</span></p>
                        <p>HSC in <span className='text-gray-400'>- Jatir Janak Bangabandhu Gov College <br />2023</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills