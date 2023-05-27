import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-600 px-4 mt-20'>
      <div className='py-8 md:flex justify-between items-center max-w-screen-xl mx-auto'>
        <div className='flex items-center justify-center gap-2 pb-4'>
          <img className='w-8' src="https://img.icons8.com/?size=1x&id=gRWfzIimRbsT&format=png" alt="logo" />
          <h1 className='text-white text-2xl'>Abu Taher</h1>
        </div>
        <p className='text-white md:text-xl text-lg text-center'>Copyright © 2023. All rights are reserved.</p>
      </div>
    </div>
  )
}

export default Footer