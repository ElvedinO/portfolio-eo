import React from 'react';

import Image from '../assets/hero.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import CV from '../assets/my_cv.pdf';
const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      {' '}
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '
            >
              ELVEDIN <span>ODOBASIC</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 tex-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Empowering businesses with code and creativity
              <br />
              ...let's build your digital masterpiece, together.
            </motion.p>
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link to='contact' smooth={true} spy={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              {/* <div class='cv-btn'>
                <label class='label'>
                  <input class='input' type='checkbox' />
                  <span class='circle'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      class='icon'
                    >
                      <path
                        d='M12 19V5m0 14-4-4m4 4 4-4'
                        stroke-width='1.5'
                        stroke-linejoin='round'
                        stroke-linecap='round'
                        stroke='currentColor'
                      ></path>
                    </svg>
                    <div class='square'></div>
                  </span>
                  <p class='title font-primary  '>Resume</p>
                  <a
                    class='title font-primary'
                    download='Elvedin Odobasic CV'
                    href={CV}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='35'
                      height='45'
                      viewBox='-4 -5 25 35'
                      fill='#001B45'
                    >
                      <path d='M21 14.655l-5.799.908 3.393 6.917-3.111 1.52-3.413-6.982-4.07 3.651v-15.857l13 9.843m-12.792-10.905l-1.042.519-1.536-3.087 1.043-.519 1.535 3.087zm2.599-3.577l-1.152-.173-.513 3.409 1.152.173.513-3.409zm-4.779 5.848l.557-1.023-3.028-1.648-.557 1.023 3.028 1.648z' />
                    </svg>
                  </a>
                </label>
              </div> */}
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a
                href='https://www.linkedin.com/in/elvedin-odobasic-b67ab2264/'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/ElvedinO'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
              >
                <FaGithub />
              </a>
              <a
                href='https://twitter.com/v33doo'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/*hero image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mix-blend-lighten hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative'
          >
            <img src={Image} alt='' />

            {/*rotating animation*/}
            <motion.svg
              className=' w-[300px] lg:w-[506px] h-[300px] lg:h-[506px] absolute'
              fill='transparent'
              viewBox='0 0 506 506'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.circle
                cx='253'
                cy='253'
                r='250'
                stroke='#00ff99'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                initial={{ strokeDasharray: '24 10 0 0' }}
                animate={{
                  strokeDasharray: [
                    '15 120 25 25 ',
                    '16 25 92 72',
                    '4 250 22 22',
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
