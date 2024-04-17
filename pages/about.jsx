import Image from "next/image";
import React from "react";

const About = () => {
  // Define the categories
  const categories = [
    {
      name: "Alternative Dispute Resolution",
      image: "/assets/about/Alternative Dispute Resolution.webp",
    },
    {
      name: "Banking & Finance",
      image: "/assets/about/Banking & Finance.webp",
    },
    {
      name: "Building & Construction",
      image: "/assets/about/Building & Construction.webp",
    },
    { name: "Commercial Law", image: "/assets/about/Commercial Law.webp" },
    {
      name: "Commercial Litigation",
      image: "/assets/about/Commercial Litigation.webp",
    },
    {
      name: "Estate Planning & Disputes",
      image: "/assets/about/Estate Planning & Disputes.webp",
    },
    { name: "Family Law", image: "/assets/about/Family Law.webp" },
    {
      name: "Franchising & Licencing",
      image: "/assets/about/Franchising & Licencing.webp",
    },
    { name: "Insurance Law", image: "/assets/about/Insurance Law.webp" },
    { name: "Ethiopian Law", image: "/assets/about/Italian Law.webp" },
    { name: "Property Law", image: "/assets/about/Property Law.webp" },
  ];

  return (
    <>
      <div className="bg-[url('https://slflawyers.com.au/wp-content/uploads/2023/02/Untitled-design-2023-02-03T120344.159.png')] h-[50vh] bg-cover">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className=" font-sans lg:mt-40 md:mt-20 text-white font-semibold text-6xl">
            About SLF Lawyers
          </h1>
        </div>
      </div>
      <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
        <div className="bg-white rounded-t-3xl items-center gap-6 py-3 md:flex-row justify-around md:p-10">
          <p className="font-sans text-sm">
            {" "}
            SLF Lawyers is a new breed of law firm. We don’t stand on tradition
            or outdated ways of doing business.
          </p>

          <p className="font-sans text-sm">
            We take a team approach to dealing with the more complex legal
            problems that cross our desks, working on the very reasonable
            assumption that two or more heads are better than one. We take the
            time to understand the whole picture, and our lawyers think outside
            the box to find solutions in even the most complex legal situations.
          </p>

          <p className="font-sans text-sm">
            We don’t hide behind legalese or arcane legal procedures, clearly
            communicating our process every step of the way. The focus is on
            getting results for our clients, not on how our foyer looks.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap md:w-[80%] mx-auto my-10">
        <div className="w-full md:w-2/5">
          <div className=" bg-white shadow-md">
            <div className="bg-white rounded-t-3xl items-center gap-6  md:flex-row justify-around md:p-10">
              <p className="text-left font-sans  text-4xl py-5">What we do?</p>

              <p className="font-sans text-xs text-left  text-gray-900 dark:text-gray-800">
                SLF Lawyers is a new breed of law firm. We don't stand on
                tradition or outdated ways of doing business.
              </p>
              <p className="font-sans text-xs text-left  text-gray-900 dark:text-gray-800 my-4">
                We take a team approach to dealing with the more complex legal
                problems that cross our desks, working on the very reasonable
                assumption that two or more heads are better than one. We take
                the time to understand the whole picture, and our lawyers think
                outside the box to find solutions in even the most complex legal
                situations.
              </p>
              <p className="font-sans text-xs text-left text-gray-900 dark:text-gray-800 my-4">
                We don't hide behind legalese or arcane legal procedures,
                clearly communicating our process every step of the way. The
                focus is on getting results for our clients, not on how our
                foyer looks.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 px-4 my-20">
          <div className="flex flex-wrap -mx-2">
            {categories.map((category, index) => (
              <div key={index} className="w-full md:w-1/3 px-2 mb-10">
                <a
                  href={`/practice-area/${category.name
                    .replace(/ /g, "-")
                    .toLowerCase()}`}
                >
                  <div
                    className="relative mb-9 rounded-xl py-8 px-7 bg-white shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden">
                      <img
                        className="w-16 h-16 object-cover"
                        src={category.image}
                        alt={category.name}
                      />
                    </div>
                    <h3 className="pt-2 text-base font-sans  text-xs text-center md:text-xss sm:text-xss ">
                      {category.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default About;
