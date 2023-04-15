import React from "react";

const NavBar = () => {
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
    <nav className="flex justify-between items-center w-full h-20 bg-rose text-white">
      <div className="px-4">
        <h1 className="text-2xl font-bold">Paige</h1>
      </div>
      <ul className="flex">
        {links.map((link) => (
            <li 
            key={link.id}
            className="capitalize px-4 cursor-pointer font-medium hover:scale-105 hover:text-gray-500 duration-100">
          {link.link}
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;