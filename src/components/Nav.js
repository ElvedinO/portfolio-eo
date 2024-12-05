import React, { useEffect, useState } from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      threshold: 0.6, // 60% of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className='fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-around items-center text-2xl text-white/25 hover:*:text-[#fff] transition-all *:duration-300 mb-4 lg:mb-0'>
          <Link
            to='home'
            className={`cursor-pointer h-[40px] flex items-center justify-center ${
              activeSection === 'home' ? 'active' : ''
            }`}
            smooth={true}
            spy={true}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            className={`cursor-pointer h-[40px] flex items-center justify-center ${
              activeSection === 'about' ? 'active' : ''
            }`}
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            to='services'
            className={`cursor-pointer h-[40px] flex items-center justify-center ${
              activeSection === 'services' ? 'active' : ''
            }`}
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            to='work'
            className={`cursor-pointer h-[40px] flex items-center justify-center ${
              activeSection === 'work' ? 'active' : ''
            }`}
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            to='contact'
            className={`cursor-pointer h-[40px] flex items-center justify-center ${
              activeSection === 'contact' ? 'active' : ''
            }`}
            smooth={true}
            spy={true}
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
