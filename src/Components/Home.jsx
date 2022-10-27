import React from "react";
import HeroImage from "..//assets/heroImage1.jpg";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div
      name="home__container"
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black
       via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
                      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold
          text-white mt-20"
          >
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A self-motivated, goal-oriented Software Engineer who has hands-on
            experience of working as Full Stack Developer and in-depth knowledge
            of Web Application Development with expertise in technologies like
            HTML, CSS, JavaScript, Firebase and React. 
          </p>

          <div
            className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight className="size={25} ml-1" />
            </span>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my_profile"
            className="rounded-2xl mx-auto w-2/3 md:w-80 h-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
