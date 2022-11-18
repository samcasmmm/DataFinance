import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="navbar">
        <h2 className="w-full text-3xl font-bold text-[#00df9a]">
          Data<span className="text-white">Finance</span>
        </h2>
        <ul className="hidden md:flex ">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resourses</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <GiHamburgerMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#202026] ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <h2 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            Data<span className="text-white">Finance</span>
          </h2>
          <ul className="pt-24 uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resourses</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
