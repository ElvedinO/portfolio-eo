import React from 'react';
// icon imports
import { BsArrowUpRight } from 'react-icons/bs';
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
// motion imports
import { motion } from 'framer-motion';
// variants import
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'Front-End Development',
    description:
      'With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating responsive and interactive websites. From landing pages to web applications.',
    link: 'https://www.w3schools.com/whatis/whatis_frontenddev.asp',
  },
  // {
  //   name: 'UI/UX Design',
  //   description:
  //     'I design attractive, intuitive interfaces with Tailwind CSS and Bootstrap. My goal is to create engaging user experiences. I prioritize both aesthetics and usability.',
  //   link: 'https://www.figma.com/resource-library/difference-between-ui-and-ux/',
  // },
  {
    name: 'Performance Optimization',
    description:
      'I optimize websites for speed and performance. Faster loading improves user experience and SEO. My focus is on high-performance web solutions.',
    link: 'https://code.pieces.app/blog/optimize-web-application-performance',
  },
  {
    name: 'Maintenance and Support',
    description:
      'A successful website needs ongoing maintenance and updates. I provide continuous support to ensure your website remains up-to-date, secure, and running smoothly.',
    link: 'https://www.linkedin.com/pulse/importance-website-maintenance-keeping-your-site-up-to-date-baig/',
  },
];

// Tooltip component
const Tooltip = ({ children, text }) => (
  <div className='relative group'>
    {children}
    <span className='absolute opacity-0 left-9 -top-1 tracking-wider  -translate-x-1/2 group-hover:opacity-100 group-hover:text-white group-hover:text-base font-secondary group-hover:-translate-y-4 duration-500'>
      {text}
    </span>
  </div>
);

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              Crafting custom web apps using modern tools like React and
              Tailwind CSS.
            </h3>
            <Link href='#' to='work' smooth={true} spy={true}>
              <button className='btn btn-sm'>See my work</button>
            </Link>
            <div className='hidden mt-10 lg:mt-20 lg:grid grid-cols-3 lg:gap-y-20 align-middle'>
              <Tooltip text='HTML5'>
                <FaHtml5 className='text-7xl lg:text-7xl text-orange-500 lg:text-gray-500 hover:text-orange-500 transition duration-300' />
              </Tooltip>
              <Tooltip text='CSS3'>
                <FaCss3Alt className='text-7xl text-blue-500 lg:text-gray-500 hover:text-blue-500 transition duration-300' />
              </Tooltip>
              <Tooltip text='JavaScript'>
                <FaJsSquare className='text-7xl text-yellow-500 lg:text-gray-500 hover:text-yellow-500 transition duration-300' />
              </Tooltip>
              <Tooltip text='React'>
                <FaReact className='text-7xl text-blue-500 lg:text-gray-500 hover:text-blue-500 transition duration-300' />
              </Tooltip>
              <Tooltip text='Tailwind'>
                <SiTailwindcss className='text-7xl text-blue-500 lg:text-gray-500 hover:text-blue-500 transition duration-300' />
              </Tooltip>
              <Tooltip text='Bootstrap'>
                <FaBootstrap className='text-7xl text-purple-500 lg:text-gray-500 hover:text-purple-500 transition duration-300' />
              </Tooltip>
            </div>
          </motion.div>
          {/* Icons */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex  items-center'
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/10 mb-8 flex rounded-xl'
                    key={index}
                  >
                    <div className='max-w-[476px] p-1'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight mb-4'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      {/* <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
