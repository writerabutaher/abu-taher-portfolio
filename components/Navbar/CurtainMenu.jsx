import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai'

export const CurtainMenuPage = ({ open, setOpen }) => {

    return (
        <Menu open={open}>
            <AiOutlineClose onClick={() => setOpen((prevState) => !prevState)} className='absolute top-4 right-4 font-bold text-pink-600 cursor-pointer' size={'2.5rem'} />
            <MenuContainer>
                <MenuItem href="#home">Home</MenuItem>
                <MenuItem href="#project">Project</MenuItem>
                <MenuItem href="#testimonial">Testimonial</MenuItem>
                <MenuItem href="#contact">Contact</MenuItem>
            </MenuContainer>
        </Menu>
    );
};

/* Logic*/
const style = {
    container: `relative top-1/4 w-full text-center mt-8`,
    item: `relative font-medium text-2xl text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-pink-600 before:transition hover:before:scale-x-100`,
    menu: {
        open: `h-full w-full `,
        close: `w-0 h-full`,
        default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-gradient-to-r from-slate-900 to-slate-700`,
    },
};

function Menu({ children, open }) {
    return (
        <div className={`${style.menu.default} ${open ? style.menu.open : style.menu.close}`}>
            {children}
        </div>
    );
}

function MenuContainer({ children }) {
    return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href }) {
    return (
        <div className="p-2">
            <Link href={href} className={style.item}>
                {children}
            </Link>
        </div>
    );
}