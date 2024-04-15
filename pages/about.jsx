import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[url('https://slflawyers.com.au/wp-content/uploads/2023/02/Untitled-design-2023-02-03T120344.159.png')] h-[50vh] bg-cover">
        <div className="text-white flex flex-col gap-5 justify-end items-center">
          <h1 className="mt-40 text-white font-semibold text-6xl">
            Practice Areas
          </h1>
        </div>
      </div>
      <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
        <div className="bg-white rounded-t-3xl flex flex-col items-center gap-6 py-3 md:flex-row justify-around md:p-10">
          <p className="text-justify md:py-8">
            Built on a strong foundation of commercial litigation and dispute
            resolution, SLF Lawyers has grown into a reputable practice known
            for its commercially minded approach to matters. With offices
            situated in Melbourne, Sydney, Brisbane, Gold Coast and Perth CBDs,
            we are able to service our clients with our team of experienced
            legal professionals who are well versed in various professional
            legal services. We provide our clients with clear and concise
            advice, always being mindful of the most economical way for them to
            proceed and with recommendations on how to best achieve a timely,
            commercial and cost-effective solution. Click on an area of practice
            below to learn more about our legal service expertise. For more
            information, or to request a confidential consultation, please
            Contact Us.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12 mt-4">
          <a
            className="border border-cyan-600 px-8 py-3 font-medium hover:bg-black hover:text-white text-center mb-12"
            href="#"
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
