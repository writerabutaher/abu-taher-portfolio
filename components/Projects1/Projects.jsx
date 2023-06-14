import React from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import eye_care from '../../assets/eye_care.png'
import orbit_zone from '../../assets/orbit_zone.png'
import schedu_plannr from '../../assets/schedu_plannr.png'
import Image from 'next/image'

const Projects = () => {
    return (
        <div id='projects' className='md:my-32 my-20'>
            <div className='md:pb-10 pb-6'>
                <h1 className='md:text-6xl text-3xl text-center'><span className='relative before:absolute before:w-full before:h-2 before:bg-teal-500 before:bottom-1'><span className='relative '>MY PROJECTS</span></span></h1>
            </div>
            <div className='space-y-8'>
                {
                    projects.map((project, i) => {
                        const { name, live, github, list, img } = project
                        return (
                            <div key={i} className='flex flex-col-reverse md:flex-row justify-between items-center gap-4 shadow-lg md:p-8 py-4 rounded-lg'>
                                <div className='flex flex-col gap-8 md:w-1/2'>
                                    <div className='flex items-center gap-4'>
                                        <AiFillProject size={'3rem'} className='text-teal-500' />
                                        <h1 className='md:text-4xl text-xl '>{name}</h1>
                                        <div className='border-teal-500 border-2 w-1/4'></div>
                                    </div>
                                    <div className='flex flex-col gap-2  md:text-lg'>
                                        {list}
                                    </div>
                                    <div className='flex gap-4'>
                                        <a
                                            className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3  focus:outline-none focus:ring active:text-teal-500 bg-teal-500 hover:bg-white hover:text-teal-500 border-none"
                                            href={live}
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
                                        <a href={github} target='_blank' className='bg-teal-500  rounded-full p-2 border-none border-teal-500 hover:text-teal-500 hover:bg-white'>
                                            <AiFillGithub size={'2rem'} />
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <Image src={img} alt="project" />
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
        name: "Schedu Plannr",
        live: "https://schedu-plannr.web.app/",
        github: "https://github.com/asifsikder23/ScheduPlannr-client",
        img: schedu_plannr,
        list: [
            <li>This provides make scheduling easier for any kinds of meetings.</li>,
            <li>Users can Create, Update, Delete, Share, and Copy meeting links in the clipboard.</li>,
            <li>Blog writing, Note taking etc features.Upgrade your plan to use more premium features.</li>,
            <li>A dashboard section to manage schedule, team, availability, profile, billing, and admin panel.</li>
        ]
    },
    {
        name: "Orbit Zone",
        live: "https://orbit-zone.web.app/",
        github: "https://github.com/writerabutaher/Orbit-Zone-Client",
        img: orbit_zone,
        list: [
            <li>This is a user friendly buy and selling application.</li>,
            <li>There are three types of categories and vehicles of any brand and model available.</li>,
            <li>Users can post, buy and advertise cars if the user wants.</li>,
            <li>Also, there are a dashboard section and an admin panel.</li>
        ]
    },
    {
        name: "Eye Care",
        live: "https://eye-care-assignment.web.app/",
        github: "https://github.com/writerabutaher/Eye-Care-Client",
        img: eye_care,
        list: [
            <li>A eye caring service provide this application.</li>,
            <li>Each eye service has its own details, some users review, and a review section to give the review.</li>,
            <li>Users can add, remove and update their own reviews.</li>,
            <li>Also, you can add new services to this website.</li>
        ]
    },
]

export default Projects