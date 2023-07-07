import React from "react";
import reactAmzClone from "../assets/portfolio/reactAmzClone.png";
import reactoldcarsell from "../assets/portfolio/reactoldcarsell.png";
import newsmatters from "../assets/portfolio/newsmatters.png"
import mynote from "../assets/portfolio/mynote.png"
import text from "../assets/portfolio/text.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactAmzClone,
      title: "AmazonClone",
      href: "https://github.com/PiyushSharma0704/Amazon-Clone",
    },
    {
      id: 2,
      src: reactoldcarsell,
      title: "SellOldCar",
      href: "https://github.com/PiyushSharma0704/OldCarSelling",
    },
    {
      id: 3,
      src: newsmatters,
      title: "NewsMatters",
      href: "https://github.com/PiyushSharma0704/News-matters",
    },
    {
      id: 4,
      src: mynote,
      title: "MyNotebook",
      href: "https://github.com/PiyushSharma0704/mynotebook",
    },
    {
      id: 5,
      src: text,
      title: "   Text-Util",
      href: "https://github.com/PiyushSharma0704/mynotebook",
    },
  ];
  return (
    <div
      name="portfolio__container"
      id="portfolio"
      className="bg-gradient-to-b from-black
  to-gray-800 w-full text-white md:h-screen pt-28 pb-28"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full"
      >
        <div className=" mt-10">
          <p
            className="text-4xl font-bold inline border-b-4
        border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
      px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, title, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="port"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div
                className="flex items-center justify-center border-b-4
             border-gray-500"
              >
                <a href={href} target="_blank">
                  <button className="w-1/2 px-6 py-3 duration-200 hover:scale-150">
                    Code
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center">
                <p className="w-1/2 px-6 py-0">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
