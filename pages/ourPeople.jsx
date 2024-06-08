import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsLinkedin, BsTelephoneFill, BsEnvelope } from "react-icons/bs";

const possibleMembers = [
  {
    name: "Solomon Mulugeta",
    role: "Managing Partner",
    imgSrc: "/assets/team.jpeg", // Adjusted path
    linkedinUrl: "https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/",
  },
  {
    name: "Tigist Mulugeta",
    role: "Senior Partner",
    imgSrc: "/assets/four.webp", 
     linkedinUrl: "https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/"
  },
  {
    name: "Yohannis Mulugeta",
    role: "Partner",
    imgSrc: "/assets/four.webp", 
     linkedinUrl: "https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/"
  },
  {
    name: "Anteneh Deress",
    role: "Senior Partner",
    imgSrc: "/assets/team.jeg", 
     linkedinUrl: "https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/"
  },
  {
    name: "Habtamu Siraje",
    role: "Senior Partner",
    imgSrc: "/assets/team.jeg", 
     linkedinUrl: "https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/"
  },
];


const getRandomMembers = (count, members) => {
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const TeamMember = ({ member }) => (
  <div className="shadow-2xl text-center max-w-sm bg-white">
    <div className="relative w-full px-4 h-60">
      <Image
        src={member.imgSrc}
        alt={member.name}
        layout="fill"
        objectFit="cover"
        className="hover:grayscale-[80%]"
      />
    </div>
    <p className="my-2 font-semibold">{member.name}</p>
    <p className="my-2">{member.role}</p>
    <div className="flex justify-center gap-5 my-3">
      <a href="https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin className="text-cyan-500 text-xl hover:text-cyan-700" />
      </a>
      <BsTelephoneFill className="text-cyan-500 text-xl" />
      <BsEnvelope className="text-cyan-500 text-xl" />
    </div>
    {/* <div className="flex justify-center gap-5 my-3">
      <BsLinkedin className="text-cyan-500 text-xl" />
      <BsTelephoneFill className="text-cyan-500 text-xl" />
      <BsEnvelope className="text-cyan-500 text-xl" />
    </div> */}
  </div>
);

const OurPeople = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTeamMembers(getRandomMembers(16, possibleMembers)); // Initialize team members client-side
  }, []);

  const filteredMembers =
    filter === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.role.includes(filter));

  const buttonClass = (filterName) =>
    filter === filterName
      ? "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none mx-5"
      : "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 mx-5";

  return (
    <>
      <div className="bg-[url('/assets/ourPeople.png')] h-[85vh] bg-cover ">
        <div className="text-white flex justify-center items-center h-full">
          <h1 className="font-sans lg:mt-40 md:mt-20 text-white font-semibold md:5xl lg:text-6xl text-3xl text-center">
            Our People
          </h1>
        </div>
      </div>
      <div className="text-center">
        <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
          <div className="bg-white rounded-t-3xl py-3 md:flex-row justify-around md:p-10">
            <div className="mb-6">
              <p className="font-sans text-xs text-gray-900 dark:text-gray-800 text-center">
                Our team has a combined experience of over 750 years and decades
                of hands-on experience in each of our practice areas.
              </p>
              <p className="font-sans text-xs text-gray-900 dark:text-gray-800">
                Contact our team directly by selecting one of the following
                locations and clicking on their details
              </p>
            </div>
            <div className="bg-white rounded-t-3xl py-3 md:flex-row justify-around md:p-10 flex space-x-2">
              <button
                onClick={() => setFilter("All")}
                className={
                  buttonClass("All") +
                  " flex-1 text-center rounded hover:bg-gray-300"
                }
              >
                All
              </button>
              <button
                onClick={() => setFilter("Managing Partner")}
                className={
                  buttonClass("Managing Partner") +
                  " flex-1 text-center rounded hover:bg-gray-300"
                }
              >
                Managing Partners
              </button>
              <button
                onClick={() => setFilter("Senior Partner")}
                className={
                  buttonClass("Senior Partner") +
                  " flex-1 text-center rounded hover:bg-gray-300"
                }
              >
                Senior Partners
              </button>
              <button
                onClick={() => setFilter("Partner")}
                className={
                  buttonClass("Partner") +
                  " flex-1 text-center rounded hover:bg-gray-300"
                }
              >
                Partners
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:w-3/4 mx-auto gap-5 mt-20">
        {filteredMembers.map((member) => (
          <TeamMember key={member.name} member={member} />
        ))}
      </div>
      <div className="text-center">
        <a
          href="#"
          className="inline-block mx-auto text-center mt-8 border border-cyan-600 px-8 py-3 font-medium hover:bg-black hover:text-white"
        >
          View More People
        </a>
      </div>
    </>
  );
};

export default OurPeople;
