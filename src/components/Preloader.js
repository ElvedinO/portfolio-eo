// src/components/Preloader.js
import React, { useEffect } from 'react';
import Logo from '../assets/V.png';
const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div class='relative flex justify-center items-center h-screen bg-[#002250] bg-no-repeat bg-cover'>
      <div class='preloader-spinner absolute'>
        <div class='spinner1'></div>
      </div>
      <img src={Logo} class=' w-24 animate-pulse ' />
    </div>
  );
};

export default Preloader;
