import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import hero from "../images/hero_picture.jpg";
import { Link as ReactScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="md:pt-40 py-16 w-full bg-gradient-to-b from-rose to-timberwolf_light"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-5 flex flex-col justify-center h-full text-lavender">
          <h2 className="text-4xl sm:text-7xl font-bold text-lavender py-4">
            Hi, I'm Paige Rolling.
          </h2>
          <p className="text-lavender">
            I'm a Computer Science major at Iowa State with a minor in Spanish.
            I'm an undergraduate research assistant for the Computer Science
            department, and I'm currently doing work with the optimizing the
            parameters of deep neural networks with differential privacy. I am
            also one of the co-founders of Clear Lake Connected, a social media
            marketing business. My areas of interest include machine learning,
            privacy, and web development.
          </p>
          <div className="pt-4">
            <ReactScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              <button className="group text-light_gray w-fit px-6 py-3 my-2 flex items-center rounded-md bg-dark_gray cursor-pointer">
                Portfolio
                <span className="pl-2 group-hover:rotate-90 group-hover:pl-0 group-hover:pb-2 duration-300">
                  <BiRightArrowAlt />
                </span>
              </button>
            </ReactScrollLink>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="Paige Rolling"
            className="rounded-2xl md:w-full md:min-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
