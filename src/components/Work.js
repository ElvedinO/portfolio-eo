import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

//img
import Img1 from '../assets/portfolio-img1.webp';
import Img2 from '../assets/portfolio-img2.jpg';
import Img3 from '../assets/portfolio-img3.jpg';

const Work = () => {
  const handleClick = (myLink) => (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.open(myLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {/* First row, first column: Introductory text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='mb-10 lg:mb-0'
          >
            <h2 className='h2 leading-tight text-accent'>
              My Latest <br />
              Work.
            </h2>
            <p className='max-w-sm mb-8 text-xl tracking-wider'>
              Here are a few highlights of my recent projects, showcasing my
              skills and expertise in web development.
            </p>
            <button className='btn btn-sm cursor-not-allowed'>
              View all projects
            </button>
          </motion.div>

          {/* First row, second column: First image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='group relative overflow-hidden border-b-2  border-white/20 rounded-3xl rounded-tr-none cursor-pointer'
          >
            <div
              onClick={handleClick('https://organiclife.netlify.app/')}
              className='group-hover:bg-black/85 small w-full h-full absolute z-30 transition-all duration-300'
            ></div>
            <img
              className='group-hover:scale-125 transition-all duration-500 '
              src={Img1}
              alt=''
            />
            <div className='absolute bottom-20 lg:-bottom-full left-2 lg:left-12 lg:group-hover:bottom-28 lg:transition-all lg:duration-500 z-40'>
              <span className='text-gradient'>Organic Store</span>
            </div>
            <div className='absolute bottom-12 lg:-bottom-full left-2 lg:left-12 lg:group-hover:bottom-20 lg:transition-all lg:duration-700 z-40'>
              <span className='text-3xl text-white'>E-Commerce</span>
            </div>
            <div className=' absolute bottom-6 lg:-bottom-full left-2 lg:left-12 gap-1 lg:gap-2 lg:group-hover:bottom-10 lg:transition-all lg:duration-1000 z-40 flex lg:text-base text-sm'>
              <div className='bg-[#58C4DC] px-3 lg:px-4 rounded-full rounded-tr-none text-white'>
                React
              </div>
              <div className='bg-[#CE6B9C] px-3 rounded-full rounded-tr-none text-white'>
                Sass
              </div>
              <div className='bg-[#00758F] px-3 rounded-full rounded-tr-none text-white'>
                MySql
              </div>
              <div className='bg-[#9179FF] px-3 rounded-full rounded-tr-none text-white'>
                Strapi
              </div>
              <div className='bg-[#685FFF] px-3 rounded-full rounded-tr-none text-white'>
                Stripe
              </div>
            </div>
          </motion.div>

          {/* Second row, first column: Second image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='group relative overflow-hidden border-b-2 border-white/20  rounded-3xl  rounded-tr-none'
          >
            <div className='group-hover:bg-black/70  w-full h-full absolute z-30 transition-all duration-300'></div>
            <img
              className='group-hover:scale-125 transition-all duration-500'
              src={Img2}
              alt=''
            />
            <div className='absolute bottom-16 lg:-bottom-full left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 z-40'>
              <span className='text-gradient'>COMING SOON</span>
            </div>
            <div className='absolute bottom-8 lg:-bottom-full left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 z-40'>
              <span className='text-3xl text-white'>Coming Soon</span>
            </div>
          </motion.div>

          {/* Second row, second column: Third image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='group relative overflow-hidden border-b-2 border-white/20  rounded-3xl  rounded-tr-none'
          >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300'></div>
            <img
              className='group-hover:scale-125 transition-all duration-500'
              src={Img3}
              alt=''
            />
            <div className='absolute bottom-16 lg:-bottom-full left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 z-40'>
              <span className='text-gradient'>COMING SOON</span>
            </div>
            <div className='absolute bottom-8 lg:-bottom-full left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 z-40'>
              <span className='text-3xl text-white'>Coming Soon</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
