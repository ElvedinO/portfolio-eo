import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

//img
import Img1 from '../assets/portfolio-img1.jpg';
import Img2 from '../assets/portfolio-img2.jpg';
import Img3 from '../assets/portfolio-img3.jpg';

const Work = () => {
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
            <p className='max-w-sm mb-8'>
              Here are a few highlights of my recent projects, showcasing my
              skills and expertise in web development.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </motion.div>

          {/* First row, second column: First image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='group relative overflow-hidden border-2 border-white/40  rounded-3xl  rounded-tr-none'
          >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300'></div>
            <img
              className='group-hover:scale-125 transition-all duration-500 '
              src={Img1}
              alt=''
            />
            <div className='absolute bottom-16 lg:-bottom-full left-12 lg:group-hover:bottom-24 lg:transition-all lg:duration-500 z-40'>
              <span className='text-gradient'>COMING SOON</span>
            </div>
            <div className='absolute bottom-8 lg:-bottom-full left-12 lg:group-hover:bottom-14 lg:transition-all lg:duration-700 z-40'>
              <span className='text-3xl text-white'>Coming Soon</span>
            </div>
          </motion.div>

          {/* Second row, first column: Second image */}
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='group relative overflow-hidden border-2 border-white/40   rounded-3xl  rounded-tr-none'
          >
            <div className='group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300'></div>
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
            className='group relative overflow-hidden border-2 border-white/40  rounded-3xl  rounded-tr-none'
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
