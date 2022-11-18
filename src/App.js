import React from 'react';
import './App.css';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import NewsLetter from './components/NewsLetter';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
