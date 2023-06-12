import { FaStream } from 'react-icons/fa'
import { navItems } from './MainNav';

const Navbar = ({ setOpen }) => {

  return (
    <nav className='flex justify-between items-center py-4'>
      <div className='flex items-center gap-2'>
        <img className='md:w-16 w-12' src="https://ouch-cdn2.icons8.com/5bDU9JubLcztdPXj79ickcHODDYdqEK-vJXlaJ7ssYk/rs:fit:256:337/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTAv/YzY1YmE0Y2QtYjZi/Zi00NzBhLWIzN2It/OTAxODg0Nzk1MmYw/LnBuZw.png" alt="logo" />
      </div>
      <div className='md:flex hidden items-center gap-8 text-2xl'>
        {navItems}
      </div>
      <FaStream onClick={() => setOpen((prevState) => !prevState)} className='text-teal-500 md:hidden cursor-pointer' size={'2rem'} />
    </nav>

  );
}

export default Navbar