import React from 'react'

const About = () => {
    return (
        <div id='about' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-4xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-indigo-600 before:bottom-1'><span className='relative'>ABOUT ME</span></span></h1>
            </div>
            <div className='md:flex justify-between items-center'>
                <div className='md:w-1/2 flex justify-center'>
                    <img className='w-[40rem]' src="" alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div>
                        <h1 className='text-pink-600 text-4xl mb-4'>Hi There!</h1>
                        <p className='text-gray-600 text-sm md:text-base'>I’m Abu Taher. I’m in class 12. Recently I finished my web development course in Programming Hero. I learned all my skills very discipline way. I have done some projects which were given to me by Programming Hero. I build those projects with MERN. I face some struggles and errors to make those projects, which is growing my confidence and skills. I’m also excited to build some projects with Next JS and Material UI.</p>
                    </div>
                    <div className='w-full border-b-2 border-indigo-600 my-4'></div>
                    <div>
                        <h1 className='text-pink-600 text-2xl mb-4'>PERSONAL INFO</h1>
                        <div className='grid grid-cols-2 gap-4'>
                            <p><span className='text-gray-600'>Name: </span>Abu Taher</p>
                            <p><span className='text-gray-600'>Email: </span>writerabutaher@gmail.com</p>
                            <p><span className='text-gray-600'>Address: </span>Uttar Badda, Dhaka</p>
                            <p><span className='text-gray-600'>Phone: </span>01905043478</p>
                            <p><span className='text-gray-600'>Nationality: </span>Bangladeshi</p>
                            <p><span className='text-gray-600'>Language: </span>English, Bangla</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About