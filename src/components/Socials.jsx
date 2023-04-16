import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  const socials = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/prolling",
      icon: <FaGithub size={30} />,
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/paige-e-rolling/",
      icon: <FaLinkedin size={30} />,
    },
    {
      id: 3,
      name: "Email",
      link: "mailto:prolling@iastate.edu",
      icon: <MdEmail size={30} />,
    },
    {
      id: 4,
      name: "Resume",
      link: "/Resume.pdf",
      icon: <HiOutlineDocumentDownload size={30} />,
    },
  ];

  return (
    <div className="flex-col top-[35%] left-0 fixed hidden lg:flex">
      <ul>
        {socials.map((social) => (
          <li className="flex justify-between items-center w-40 h-14 px-4 bg-dark_gray capitalize ml-[-100px] rounded-md hover:ml-[-10px] duration-300">
            <a
              href={social.link}
              className="flex justify-between items-center w-full text-light_gray"
              target="_blank"
              rel="noreferrer"
            >
              <>
                {social.name}
                {social.icon}
              </>
            </a>
          </li>
        ))}
        ,
      </ul>
    </div>
  );
};

export default Socials;
