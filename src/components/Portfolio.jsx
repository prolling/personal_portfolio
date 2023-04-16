import React from "react";
// import all of the pictures for different projects

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1621640786029-220e9ff8dd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      link: "https://github.com/prolling/COM-S-227",
      description: "COM S 227 Course Work",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1621640789336-949b02756e30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/prolling/COM-S-228",
      description: "COM S 228 Course Work",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581291518570-03a26006fb21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/prolling/COM-S-319",
      description: "COM S 319 Course Work",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1643928608037-012bbd286d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/prolling/COM-S-363",
      description: "COM S 363 Course Work",
    },
    {
      id: 5,
      src: "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/300387214_5735922043087547_3895751076259977356_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=dX9yU3VD8VgAX-OxsqS&_nc_ht=scontent-msp1-1.xx&oh=00_AfD9wGTN2CR7sxWXQwrH9MREdkk9szPdzUc7abmnPLUeIw&oe=6440EBDD",
      link: "",
      description: "Lake Time Brewery Website",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://github.com/prolling/Certified-Robustness-with-Optimal-Accuracy",
      description: "Certified Robustness with Optimal Accuracy",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-rose to-timberwolf_light w-full text-dark_gray pt-12 md:py-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline b-4 text-lavender">Portfolio</p>
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
                  <button className=" px-2 py-3 m-4 duration-200 hover:scale-105 text-dark_gray">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      {project.description}
                    </a>
                  </button>

                  <button className="px-6 py-3 m-4 duration-200 hover:scale-105 text-dark_gray">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Code
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
