import React from "react";

const About = () => {
  return (
    <div
      name="about__container"
      id="about"
      className="w-full h-screen bg-gradient-to-b from bg-gray-800
      to black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8 mt-10">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Web Developer with 1 year of experience in designing and developing
          responsive user interfaces, eCommerce technologies, testing, and
          debugging. Proven ability in optimizing web functionality that improve
          data retrieval and workflow efficiencies.
        </p>
        <br />
        <p className="text-xl ">
          In addition I'm also very hard-working which helps provide most
          creative and elegant solutions in the least amount of time. Developed
          an ecommerce webapp, customer web portal, and documentary launch
          website. Passionate about software architecture and cloud computing.
          Regular attendee of web developer meetups and hackathons.
        </p>
      </div>
    </div>
  );
};

export default About;
