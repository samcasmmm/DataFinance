import React from 'react';

const NewsLetter = () => {
  return (
    <>
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 ">
          <div className="lg:cols-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center">
              Want Tips & tricks to improve
            </h1>
            <p className="text-center">
              Sign up our Newsletter and stay up to date.
            </p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="p-3 flex w-full rounded-md text-black"
              />
              <button className="bg-[#00df9a] ml-4 w-[200px] rounded-md font-medium my-6 md:mx-2 mx-2 py-3 px-6 text-black ">
                Notify Me
              </button>
            </div>
            <p>
              We care bout the protection of your data. Read our{' '}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
