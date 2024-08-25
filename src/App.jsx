import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import AboutUS from './components/AboutUS';
import Mission from './components/Mission';
import Experties from './components/Experties';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='overflow-hidden text-neutral-200 antialiased'>
       <HeroSection />
       <Navbar />
       <Dishes />
       <AboutUS />
       <Mission />
       <Experties/>
       <Review />
       <Contact />
       <Footer />
    </div>
  );
};

export default App;