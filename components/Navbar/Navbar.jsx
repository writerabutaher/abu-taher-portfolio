import { FaStream } from 'react-icons/fa'
import { navItems } from './MainNav';

const Navbar = ({ setOpen }) => {

  return (
    <nav className='flex justify-between items-center py-4'>
      <div className='flex items-center gap-2'>
        <img className='md:w-16 w-12' src="https://img.icons8.com/?size=1x&id=gRWfzIimRbsT&format=png" alt="logo" />
      </div>
      <div className='md:flex hidden items-center gap-8 text-2xl'>
        {navItems}
      </div>
      <FaStream onClick={() => setOpen((prevState) => !prevState)} className='text-pink-600 md:hidden cursor-pointer' size={'2rem'} />
    </nav>

  );
}

export default Navbar