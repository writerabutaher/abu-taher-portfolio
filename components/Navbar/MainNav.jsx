"use client"
import Navbar from './Navbar';
import { CurtainMenuPage } from './CurtainMenu';
import { useState } from 'react';

const MainNav = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar setOpen={setOpen} />
            <CurtainMenuPage open={open} setOpen={setOpen} />
        </>
    )
}

export default MainNav;

export const navItems =
    <>
        <a href='#home'
            className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-teal-500 before:transition hover:before:scale-x-100">
            Home
        </a>
        <a href='#projects'
            className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-teal-500 before:transition hover:before:scale-x-100">
            Projects
        </a>
        <a href='#testimonial'
            className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-teal-500 before:transition hover:before:scale-x-100">
            Testimonial
        </a>
        <a href='#contact'
            className="relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-teal-500 before:transition hover:before:scale-x-100">
            Contact
        </a>
        <a href='https://drive.google.com/file/d/1GSHftx5xDWg_f1ioSKYk9NuDUcRP3r2o/view?usp=drive_link'
            className="inline-block rounded-full border border-teal-500 bg-teal-500 px-10 py-3 text-sm font-medium  hover:bg-transparent hover: focus:outline-none focus:ring active:text-teal-500" target='_blank'>
            CV
        </a>
    </>