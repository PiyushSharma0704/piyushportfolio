import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div
      className="flex justify-between items-center w-full h-20
     px-4 text-white bg-black fixed"
    >
      <div>
        <h1 className="text-5xl font-signature ml-2"><a href="/">Piyush</a></h1>
      </div>

      <ul className="hidden md:flex">
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200 pb-4"><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>      
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center
       absolute top-0 left-0 w-full h-screen bg-gradient-to-b
       from-black to-gray-800 text-gray-500"
        >
        <li className="px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link></li>
        <li className="nav-item px-4 cursor-pointer font-medium 
            text-gray-500 hover:scale-150 duration-200"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>      
      </ul>
      )}
    </div>
  );
};

export default Navbar;
