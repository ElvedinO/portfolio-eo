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
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BiHomeAlt className=' ' />
          </Link>
          <Link
            href='#'
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          <Link
            href='#'
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            href='#'
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className=' cursor-pointer h-[40px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          <Link
            href='#'
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
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
