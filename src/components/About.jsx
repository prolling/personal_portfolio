import React from "react";

const About = () => {
  const timelineData = [
    {
      id: 1,
      date: "July 2020 - August 2023",
      title: "Co-Founder and Owner",
      subtitle: "Clear Lake Connected",
      description:
        "Co-founded a social media marketing business. We provided social media marketing services to small businesses in the Clear Lake area and nationwide.",
    },
    {
      id: 2,
      date: "Dec 2021 - March 2023",
      title: "Student Role Model and Social Media Intern",
      subtitle: "WiSE (Women in Science and Engineering)",
      description: "Communicated and worked with a team to travel to different schools/events to facilitate an interest in STEM through activities as a student role model. Worked with a team to plan organized posts to spread awareness of the WiSE program at Iowa State University and develop company relations with students as a social media intern."
    },
    {
      id: 3,
      date: "Winter 2022",
      title: "Teaching Assistant",
      subtitle: "ISU Department of Political Science",
      description: "Worked as a TA for the Intro to International Politics course."
    },
    {
      id: 4,
      date: "Feb 2022 - May 2024",
      title: "Computer Science Student Advisory Council Member",
      subtitle: "ISU Department of Computer Science",
      description: "Provide feedback to the ISU department of COM S and aid in upholding ABET standards."
    },
    {
      id: 5,
      date: "Summer 2022",
      title: "Data Research Analyst Intern",
      subtitle: "Kingland Systems, Inc.",
      description:
        "Conducted research and completed data entry on corporations and investment vehicles, using defined procedures to identify relationships and provide validated and credible data.",
    },
    {
      id: 6,
      date: "Aug 2022 - Dec 2023",
      title: "Peer Mentor",
      subtitle: "ISU Department of Computer Science",
      description: "Aided incoming freshmen at Iowa State in joining the Iowa State Community."
    },
    {
      id: 7,
      date: "Summer 2022",
      title: "NIACC VIL STEM Camp Counselor",
      subtitle: "North Iowa Area Community College",
      description: "Facilitated and organized activities, lessons, and technology for middle school-aged students to learn and experience at a STEM camp."
    },
    {
      id: 8,
      date: "Spring 2023",
      title: "ICPC Regional Competitor",
      subtitle: "ICPC (International Colligate Programming Contest",
      description: "Compete with a team to solve programming problems."
    },
    {
      id: 9,
      date: "Spring Semester 2023",
      title: "Undergraduate Research Assistant",
      subtitle: "Iowa State University Computer Science Department",
      description:
        "Built and implemented test beds using Tensorflow to find the best trade-off between accuracy and security for Deep Neural Networks secured by Differential Privacy."
    },
    {
      id: 10,
      date: "Summer 2023",
      title: "Software Engineering Intern",
      subtitle: "Cisco Duo Security",
      description: "Completed an intern project which consisted of creating and updating API endpoints that allow users to determine trusted devices.",
    },
    {
      id: 11,
      date: "2021-2024",
      title: "Undergraduate Degree in Computer Science",
      subtitle: "Iowa State University",
      description:
        "Anticipated Graduation: May 2024",
    },
  ];

  return (
    <div
      name="experience"
      className=" w-full bg-gradient-to-b from-timberwolf_light to-rose pt-2"
    >
      <div className="max-w-screen-lg mx-auto relative px-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline b-4 text-dark_gray">
            Experience
          </p>
          <p className="py-6 text-dark_gray">
            Checkout out some of my experience
          </p>
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
