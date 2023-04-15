import {React, useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/Personal_Logo.png";

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

  return (
    <nav className="flex justify-between items-center w-full h-40 bg-rose text-white">
      <div className="cursor-pointer hover:scale-105">
        <img className="w-64 h-auto" src={logo} alt="Paige Rolling" />
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
            <li 
            key={link.id}
            className="text-lavender text-3xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100">
          {link.link}
        </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="pr-4 cursor-pointer z-10 text-lavender md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-rose to-timberwolf_light text-gray-500">
            {links.map((link) => (
            <li 
            key={link.id}
            className="text-white py-6 text-4xl capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100">
          {link.link}
          </li>
          ))}
      </ul>
      )} 

    </nav>
  );
};

export default NavBar;