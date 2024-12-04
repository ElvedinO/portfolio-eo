import React from 'react';
import { Link } from 'react-scroll';

import Logo from '../assets/V.png';

const Header = () => {
  return (
    <header className='py-8' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo*/}
          <a
            href='https://elvedino.netlify.app/'
            alt='home'
            aria-label='Logo of the site'
          >
            <img className='w-14 lg:w-20' src={Logo} alt='' />
          </a>
          {/* button */}
          <Link href='#' to='contact' smooth={true} spy={true}>
            <button className='btn btn-sm'>Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
