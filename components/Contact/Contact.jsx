"use client"

import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qgphhsg', 'template_4ppbp5e', e.target, '0pumzPs-utAHFpwOv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        toast.success('Successfully sent message');
    };

    return (
        <div id='contact' className="md:my-32 my-20">
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-teal-500 before:bottom-1'><span className='relative '>GET IN TOUCH</span></span></h1>
            </div>
            <form onSubmit={sendEmail} className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
                <div>
                    <label htmlFor="fullName" className="inline-block text-gray-200 text-sm sm:text-base mb-2">Name</label>
                    <input id='fullName' type='text' name="fullName" className="w-full bg-transparent text-gray-200 border focus:ring ring-teal-500-300 rounded outline-none transition duration-100 px-3 py-2" required />
                </div>

                <div>
                    <label htmlFor="email" className="inline-block text-gray-200 text-sm sm:text-base mb-2">Email</label>
                    <input id='email' type='email' name="email" className="w-full bg-transparent text-gray-200 border focus:ring ring-teal-500-300 rounded outline-none transition duration-100 px-3 py-2" required />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className="inline-block text-gray-200 text-sm sm:text-base mb-2">Message</label>
                    <textarea id='message' name="message" className="w-full h-48 bg-transparent text-gray-200 border focus:ring ring-teal-500-300 rounded outline-none transition duration-100 px-3 py-2" required></textarea>
                </div>

                <div className="sm:col-span-2 flex justify-between items-center">
                    <button type='submit' className="bg-teal-500 hover:bg-teal-500 active:bg-teal-500 focus-visible:ring ring-teal-500-300  text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 flex gap-2 items-center"><BiPaperPlane size={'2rem'} /> Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact