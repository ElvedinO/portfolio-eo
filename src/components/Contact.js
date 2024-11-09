import React, { useState, useEffect } from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xyyraoqo', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage(
          'Thank you! Your message has been successfully sent.'
        );
        form.reset();
      } else {
        setSuccessMessage('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      setSuccessMessage('Oops! There was a problem submitting your form.');
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 4000);

      // Cleanup the timer if the component unmounts or if successMessage changes
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section className='section h-screen ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h1 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch.
              </h1>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 font-test'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 rounded-3xl flex flex-col gap-y-8 py-16 px-6 items-start border-l-2 border-r-2 border-white/10 '
          >
            <div class='relative w-full '>
              <input
                type='email'
                name='email'
                required
                placeholder=''
                class='peer h-full w-full border-b bg-transparent py-3 outline-0 '
              />
              <label
                for='email'
                class='pointer-events-none absolute left-0 -top-4  h-full w-full transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-accent after:transition-transform after:duration-300  peer-placeholder-shown:leading-[4] peer-focus:leading-[1.75] peer-focus:text-accent peer-focus:after:scale-x-100 peer-focus:after:border-accent '
              >
                Your e-mail
              </label>
            </div>

            <div class='relative w-full '>
              <input
                type='text'
                name='name'
                required
                placeholder=''
                class='peer h-full w-full border-b bg-transparent py-3 outline-0'
              />
              <label
                for='name'
                class='pointer-events-none absolute left-0 -top-4  h-full w-full  transition-all after:absolute after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-accent after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4]  peer-focus:leading-[1.75] peer-focus:text-accent peer-focus:after:scale-x-100 peer-focus:after:border-accent '
              >
                Your name
              </label>
            </div>
            <div className='relative w-full'>
              <textarea
                className='peer h-full w-full border-b bg-transparent py-3 outline-0 resize-none'
                placeholder=''
                name='message'
                required
              ></textarea>
              <label
                for='message'
                class='pointer-events-none absolute left-0 -top-4  h-full w-full transition-all after:absolute after:bottom-[-0.35rem] lg:after:-bottom-4 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-accent after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4]  peer-focus:leading-[1.75] peer-focus:text-accent peer-focus:after:scale-x-100 peer-focus:after:border-accent '
              >
                Your message
              </label>
            </div>
            <button type='submit' className='btn btn-lg mt-6'>
              Send message
            </button>
            {successMessage && (
              <motion.div
                variants={fadeIn('right', 0.3)}
                viewport={{ once: true, amount: 0.3 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='popup-message '
              >
                {successMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
