import React from 'react';
import ReactTyped from 'react-typed';

const HeroSection = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            GROWW WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Groww with data
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, Flexible Finnancing for{' '}
              <ReactTyped
                className="text-[#00df9a] md:pl-2"
                strings={['BTC', 'BTB', 'SASS']}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p>
          </div>
          <p className="md:text-2xl text-xl font-bold to-gray-500 p-4">
            Money your Data Analytics to increase revenue for BTB, BTC, SASS
            platforms.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
