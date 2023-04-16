import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import hero from "../images/hero_picture.jpg";
import { Link as ReactScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-rose to-timberwolf_light"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-5 flex flex-col justify-center h-full text-lavender">
          <h2 className="text-4xl sm:text-7xl font-bold text-lavender py-4">
            My name is Paige Rolling.
          </h2>
          <p className="text-lavender">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            commodi ullam harum consequuntur nam fugiat tempore vel neque. Unde
            provident perferendis cumque non maxime vitae facilis repellat,
            temporibus obcaecati sit.
          </p>
          <div>
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
            className="rounded-2xl md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
