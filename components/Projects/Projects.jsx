import React from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'

const Projects = () => {
    return (
        <div id='projects' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-pink-600 before:bottom-1'><span className='relative text-white'>MY PROJECTS</span></span></h1>
            </div>
            <div className='space-y-8'>
                {
                    projects.map((project, i) => {
                        const { name, live, github, list, img } = project
                        return (
                            <div key={i} className='flex flex-col-reverse md:flex-row justify-between gap-4 shadow-lg md:p-8 py-4 rounded-lg'>
                                <div className='flex flex-col gap-8 md:w-1/2'>
                                    <div className='flex items-center gap-4'>
                                        <AiFillProject size={'3rem'} className='text-pink-600' />
                                        <h1 className='md:text-4xl text-xl text-white'>{name}</h1>
                                        <div className='border-pink-600 border-2 w-1/4'></div>
                                    </div>
                                    <div className='flex flex-col gap-2 text-white md:text-lg'>
                                        {list}
                                    </div>
                                    <div className='flex gap-4'>
                                        <a
                                            className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-pink-500 bg-pink-600 hover:bg-white hover:text-pink-600 border-none"
                                            href=""
                                            target='_blank'
                                        >
                                            <span
                                                className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
                                            >
                                                <svg
                                                    className="h-5 w-5"
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
                                            </span>

                                            <span className="text-sm font-medium transition-all group-hover:mr-4">
                                                Live Demo
                                            </span>
                                        </a>
                                        <a href='' target='_blank' className='bg-pink-600 text-white rounded-full p-2 border-none border-pink-600 hover:text-pink-600 hover:bg-white'>
                                            <AiFillGithub size={'2rem'} />
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const projects = [
    {
        name: "Project Name",
        live: "",
        github: "",
        img: "https://img.freepik.com/free-vector/back-school-landing-page_23-2148624215.jpg?size=626&ext=jpg",
        list: [
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>,
            <li>Odit omnis, sunt atque ut consequuntur est. Perspiciatis.</li>,
            <li>Vero atque mollitia ex provident hic nobis ipsum.</li>,
            <li>Excepturi reiciendis animi magni debitis in delectus voluptatum.</li>,
            <li>Saepe nemo unde, ut commodi omnis quam nostrum?</li>
        ]
    },
    {
        name: "Project Name",
        live: "",
        github: "",
        img: "https://img.freepik.com/free-psd/modern-landing-page-mockup_23-2148095008.jpg?w=900&t=st=1674925898~exp=1674926498~hmac=6486c9f8f057aab6680b10786264190f50b2661127ed7158503fff7c56022d23",
        list: [
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>,
            <li>Odit omnis, sunt atque ut consequuntur est. Perspiciatis.</li>,
            <li>Vero atque mollitia ex provident hic nobis ipsum.</li>,
            <li>Excepturi reiciendis animi magni debitis in delectus voluptatum.</li>,
            <li>Saepe nemo unde, ut commodi omnis quam nostrum?</li>
        ]
    },
    {
        name: "Project Name",
        live: "",
        github: "",
        img: "https://img.freepik.com/free-vector/back-school-landing-page_23-2148624215.jpg?size=626&ext=jpg",
        list: [
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>,
            <li>Odit omnis, sunt atque ut consequuntur est. Perspiciatis.</li>,
            <li>Vero atque mollitia ex provident hic nobis ipsum.</li>,
            <li>Excepturi reiciendis animi magni debitis in delectus voluptatum.</li>,
            <li>Saepe nemo unde, ut commodi omnis quam nostrum?</li>
        ]
    },
]

export default Projects