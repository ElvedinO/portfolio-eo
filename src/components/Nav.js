import React from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner*/}
        <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full  max-w-[460px] mx-auto px-5 flex justify-around items-center text-2xl text-white/50 hover:*:text-[#fff] transition-all *:duration-300 mb-4 lg:mb-0 '>
          <Link
            href='#'
            alt='home'
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            aria-label='This goes to Home page'
            className='cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            href='#'
            alt='about'
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            aria-label='This goes to About page'
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          <Link
            href='#'
            alt='services'
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            aria-label='This goes to Services page'
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            href='#'
            alt='work'
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            aria-label='This goes to Work page'
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          <Link
            href='#'
            alt='contact'
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            aria-label='This goes to Contact page'
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
