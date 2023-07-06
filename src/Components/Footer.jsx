import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      name="footer__container"
      className=" bg-gradient-to-b from-gray-800
    to-black w-full h-screen  pt-24 pb-24"
    >
      <div
        className='mt-20 flex flex-col justify-between items-center w-full h-20
                             text-white fixed"'
      >
        <h1 className="text-5xl font-signature ml-2 items-center">Thank You</h1>
      </div>
      <ul className="text-gray-500 p-3 text-center justify-center flex-row flex mt-7 gap-10 font-semibold ">
        <li className="hover:scale-150">
          <Link to="home">Home</Link>
        </li>
        <li className="hover:scale-150 duration-200">
          <Link to="about">About</Link>
        </li>
        <li className="hover:scale-150 duration-200">
          <Link to="portfolio">Portfolio</Link>
        </li>
        <li className="hover:scale-150 duration-200">
          <Link to="experience">Experience</Link>
        </li>
        <li className="hover:scale-150 duration-200">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className='flex flex-row mt-2 p-4 gap-3 justify-center items-center rel="noreferrer"'>
        <a
          href="https://www.linkedin.com/in/piyushsharma0704"
          className="bg-gray-500 hover:scale-150 duration-200 p-2"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/PiyushSharma0704"
          className="bg-gray-500 hover:scale-150 duration-200 p-2"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:p.piyush0704@gmail.com"
          className="bg-gray-500 hover:scale-150 duration-200 p-2"
        >
          <HiOutlineMail size={30} />
        </a>
        <a
          href="/PiyushResume.pdf"
          className="bg-gray-500 hover:scale-150 duration-200 p-2"
        >
          <BsFillPersonLinesFill size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
