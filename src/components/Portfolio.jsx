import React from "react";
// import all of the pictures for different projects
import LTB from "../images/LTB.png";
import coms227 from "../images/coms227.png";
import coms228 from "../images/coms228.png";
import coms319 from "../images/coms319.png";
import coms363 from "../images/coms363.png";
import certifiedrobustness from "../images/certifiedrobustness.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: coms227,
      link: "https://github.com/prolling/COM-S-227",
      description: "COM S 227 Course Work",
    },
    {
      id: 2,
      src: coms228,
      link: "https://github.com/prolling/COM-S-228",
      description: "COM S 228 Course Work",
    },
    {
      id: 3,
      src: coms319,
      link: "",
      description: "COM S 319 Course Work",
    },
    {
      id: 4,
      src: coms363,
      link: "",
      description: "COM S 363 Course Work",
    },
    {
      id: 5,
      src: LTB,
      link: "",
      description: "Lake Time Brewery Website",
    },
    {
      id: 6,
      src: certifiedrobustness,
      link: "",
      description: "Certified Robustness with Optimal Accuracy",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-rose to-timberwolf_light w-full text-dark_gray pt-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline b-4 text-lavender">
            Portfolio
          </p>
          <p className="py-6 text-lavender">Checkout some of my work</p>
        </div>
        <div className="grid sm:gridcols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0 py-2">
          {portfolio.map((project) => {
            return (
              <div className="shadow-md shadow-gray-600 rounded-lg bg-lavender">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.src}
                    alt="project"
                    className="rounded-md hover:scale-105 duration-200"
                  />
                </a>
                <div className="flex-col flex item-center justify-center">
                  <button className=" px-2 py-2 m-4 duration-200 hover:scale-105 text-dark_gray">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.description}
                    </a>
                  </button>

                  <button className="px-6 py-2 m-4 duration-200 hover:scale-105 text-dark_gray">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Ask me about my work!
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
