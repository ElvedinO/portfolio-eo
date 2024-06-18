// src/App.js
import React, { useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          <Nav />
          <About />
          <Services />
          <Work />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
