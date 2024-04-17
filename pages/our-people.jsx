import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsLinkedin, BsTelephoneFill, BsEnvelope } from "react-icons/bs";

const possibleMembers = [
  {
    name: "Rebecca Fahey",
    role: "Managing Partner",
    imgSrc: "/our team/one.avif",
  },
  { name: "Mark Smith", role: "Senior Partner", imgSrc: "/our team/two.avif" },
  {
    name: "John Gdanski",
    role: "Senior Partner",
    imgSrc: "/our team/three.avif",
  },
  {
    name: "Melissa Patterson",
    role: "Senior Partner",
    imgSrc: "/our team/four.webp",
  },
  { name: "Jason Quah", role: "Partner", imgSrc: "/our team/five.webp" },
  { name: "Angela Smith", role: "Partner", imgSrc: "/our team/six.jpeg" },
  { name: "Charles Ampt", role: "Partner", imgSrc: "/our team/seven.avif" },
  {
    name: "Berndan Hoogenbosch",
    role: "Partner",
    imgSrc: "/our team/eight.avif",
  },
];

const getRandomMembers = (count, members) => {
  const shuffled = [...members].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const TeamMember = ({ member }) => (
  <div className="shadow-2xl text-center max-w-sm bg-white">
    <div className="relative w-full h-60">
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
      <BsLinkedin className="text-cyan-500 text-xl" />
      <BsTelephoneFill className="text-cyan-500 text-xl" />
      <BsEnvelope className="text-cyan-500 text-xl" />
    </div>
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

  return (
    <>
      <div className="bg-[url('https://slflawyers.com.au/wp-content/webpc-passthru.php?src=https://slflawyers.com.au/wp-content/uploads/2023/02/Untitled-design-2023-02-03T121416.298.png')] h-[50vh] bg-cover">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="font-sans lg:mt-40 md:mt-20 text-white font-semibold text-6xl">
            Our People
          </h1>
        </div>
      </div>
      <div className="text-center">
        <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
          <div className="bg-white rounded-t-3xl items-center gap-6 py-3 md:flex-row justify-around md:p-10">
            <p className="font-sans text-sm text-left  text-gray-900 dark:text-gray-800">
              {" "}
              <button onClick={() => setFilter("All")} className="m-2">
                All
              </button>
              <button
                onClick={() => setFilter("Managing Partner")}
                className="m-2"
              >
                Managing Partners
              </button>
              <button
                onClick={() => setFilter("Senior Partner")}
                className="m-2"
              >
                Senior Partners
              </button>
              <button onClick={() => setFilter("Partner")} className="m-2">
                Partners
              </button>
            </p>
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
