import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={Laptop} alt="Laptop" className="w-[500px] mx-auto my-4" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics
            </h1>
            <p className="py-2">
              Data analytics is a discipline focused on extracting insights from
              data. It comprises the processes, tools and techniques of data
              analysis and management, including the collection, organization,
              and storage of data. The chief aim of data analytics is to apply
              statistical analysis and technologies on data to find trends and
              solve problems. Data analytics has become increasingly important
              in the enterprise as a means for analyzing and shaping business
              processes and improving decision-making and business results.
            </p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
