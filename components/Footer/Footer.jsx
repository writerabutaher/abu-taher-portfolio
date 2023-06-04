import React from 'react'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-slate-600 px-4 mt-20'>
      <div className='py-8 flex flex-col md:flex-row gap-4 justify-between items-center max-w-screen-xl mx-auto'>
        <div className='flex items-center justify-center gap-2 pb-4'>
          <img className='w-8' src="https://img.icons8.com/?size=1x&id=gRWfzIimRbsT&format=png" alt="logo" />
          <h1 className='text-white text-3xl'>Abu Taher</h1>
        </div>
        <div className='flex justify-center gap-4'>
          <a href="https://github.com/writerabutaher" target='_blank' className='bg-pink-600 text-white rounded-full p-2 border-none border-pink-600 hover:text-pink-600 hover:bg-white'>
            <AiFillGithub size={'2rem'} />
          </a>
          <a href="https://www.facebook.com/abutaher9682/" target='_blank' className='bg-pink-600 text-white rounded-full p-2 border-none border-pink-600 hover:text-pink-600 hover:bg-white'>
            <AiFillFacebook size={'2rem'} />
          </a>
          <a href="https://www.linkedin.com/in/writerabutaher/" target='_blank' className='bg-pink-600 text-white rounded-full p-2 border-none border-pink-600 hover:text-pink-600 hover:bg-white'>
            <AiFillLinkedin size={'2rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer