import React from "react";

const About = () => {
  const timelineData = [
    {
      id: 1,
      date: "Summer 2020 - Present",
      title: "Co-Founder and Owner",
      subtitle: "Clear Lake Connected",
      description:
        "Co-founded a social media marketing business. We provide social media marketing services to small businesses in the Clear Lake area and nationwide. Contact me for more infromation about our services!",
    },
    {
      id: 2,
      date: "Summer 2022",
      title: "Data Research Analyst Intern",
      subtitle: "Kingland Systems, Inc.",
      description:
        "Conducted research and completed data entry on corporations and investment vehicles, using defined procedures to identify relationships and provide validated and credible data.",
    },
    {
      id: 3,
      date: "Spring Semester 2023",
      title: "Undergraduate Research Assistant",
      subtitle: "Iowa State University Computer Science Department",
      description:
        "Build and implement test beds using Tensorflow in order to find the best trade-off between accuracy and security for Deep Neural Networks secured by Differential Privacy.",
    },
    {
      id: 4,
      date: "Summer 2023",
      title: "Software Engineering Intern",
      subtitle: "Cisco Duo Security",
      description: "In progress...",
    },
    {
      id: 5,
      date: "2021-2025",
      title: "Bachelor of Science in Computer Science",
      subtitle: "Iowa State University",
      description:
        "Anticipated Graduation: May 2025 for a Bachelor of Science in Computer Science and minor in Spanish from Iowa State University.",
    },
  ];

  return (
    <div
      name="experience"
      className=" w-full bg-gradient-to-b from-timberwolf_light to-rose pt-40"
    >
      <div className="max-w-screen-lg mx-auto relative px-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline b-4 text-dark_gray">Experience</p>
          <p className="py-6 text-dark_gray">Checkout out some of my experience</p>
        </div>
        {timelineData.map((item) => (
          <div key={item.id} className="mb-8 last:mb-0">
            <div className="flex justify-between mb-4 items-center">
              <div className="text-dark_gray">{item.date}</div>
              <div className="font-bold">{item.title}</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <div className="w-full md:w-1/3">
                <div className="text-dark_gray font-bold mb-2">
                  {item.subtitle}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="rounded-xl border border-lavender px-4 py-2">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
