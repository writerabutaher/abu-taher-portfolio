import React from 'react'
import Image from 'next/image'
import programming from '../../assets/programming.png'

const About = () => {
    return (
        <div id='about' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-4xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-pink-600 before:bottom-1'><span className='relative text-white'>ABOUT ME</span></span></h1>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center'>
                <div className='md:w-1/2'>
                    <Image className='w-[30rem]' src={programming} alt="programming" />
                </div>
                <div className='md:w-1/2'>
                    <div>
                        <h1 className='text-pink-600 text-4xl mb-4'>Hi There!</h1>
                        <p className='text-gray-400 text-sm md:text-base'>I am eager to contribute my skills to a dynamic and innovative company. I am committed to continuous learning and staying updated with the latest technologies in order to drive growth and deliver exceptional results. Seeking an opportunity to join a supportive team where I can further enhance my skills, contribute to meaningful projects, and advance my career in web development.</p>
                    </div>
                    <div className='w-full border-b-2 border-white my-4'></div>
                    <div>
                        <h1 className='text-pink-600 text-2xl mb-4'>PERSONAL INFO</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <p className='text-white'><span className='text-gray-400'>Name: <br className='md:hidden' /> </span>Abu Taher</p>
                            <p className='text-white'><span className='text-gray-400'>Address: <br className='md:hidden' /> </span>Uttar Badda, Dhaka</p>
                            <p className='text-white'><span className='text-gray-400'>Phone: <br className='md:hidden' /> </span>+8801905043478</p>
                            <p className='text-white'><span className='text-gray-400'>Nationality: <br className='md:hidden' /> </span>Bangladeshi</p>
                            <p className='text-white'><span className='text-gray-400'>Language: <br className='md:hidden' /> </span>English, Bangla</p>
                            <p className='text-white'><span className='text-gray-400'>Gender: <br className='md:hidden' /> </span>Male</p>
                            <p className='col-span-2 text-white'><span className='text-gray-400'>Email: <br className='md:hidden' /> </span>writerabutaher@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About