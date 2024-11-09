import React from 'react';
import Image from '../assets/hero.jpg';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { Animation } from 'react-easy-animations';

const Banner = () => {
  const Letters = ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '
            >
              ELVEDIN <span>ODOBASIC</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='mb-6 flex justify-center lg:justify-start text-[36px] lg:text-[60px]  font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='mr-4 text-white'>I am a</span>
              <div className='flex text-accent'>
                {Letters.map((letter, index) => (
                  <Animation
                    key={index}
                    type='fadeIn'
                    duration='2000ms'
                    delay={`${index * 300}ms`}
                    direction='normal'
                    timing='ease-in-out'
                    iteration='1'
                    fillMode='backwards'
                  >
                    {letter}
                  </Animation>
                ))}
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn('right', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='mb-8 lg:text-xl lg:tracking-wider max-w-lg mx-auto lg:mx-0'
            >
              Empowering businesses with code and creativity
              <br />
              ...let's build your digital masterpiece, together.
            </motion.p>
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link href='#' to='contact' smooth={true} spy={true}>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a
                href='https://www.linkedin.com/in/elvedin-odobasic-b67ab2264/'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
                rel='noreferrer'
                alt='linkedin'
                aria-label='Read more about Elvedin on LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://github.com/ElvedinO'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
                rel='noreferrer'
                alt='github'
                aria-label='Read more about Elvedin on Github'
              >
                <FaGithub />
              </a>
              <a
                href='https://twitter.com/v33doo'
                className='hover:-translate-y-[1px] transition ease-in-out '
                target='_blank'
                rel='noreferrer'
                alt='twitter'
                aria-label='Read more about Elvedin on Twitter'
              >
                <FaXTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className='mix-blend-lighten hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative'
          >
            <img src={Image} alt='hero' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
