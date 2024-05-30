import React from "react";
import AttornyCategory from "./AttornyCategory";

const PracticeArea = () => {
  return (
    <>
      <div className="bg-[url('/assets/practicalArea.jpg')] h-[55vh] bg-cover">
        <div className="text-white flex justify-center items-center h-full">
          <h1 className="font-sans lg:mt-40 md:mt-20 text-white font-semibold md:5xl lg:text-6xl text-3xl text-center">
            Practice Areas
          </h1>
        </div>
      </div>
      <div className="text-center">
        <div className="-mt-20 shadow-2xl w-11/12 mx-auto rounded-3xl md:w-3/5">
          <div className="bg-white rounded-t-3xl py-3 md:flex-row justify-around md:p-10">
            <div className="mb-6">
              <p className="font-sans text-xs text-gray-900 dark:text-gray-800 text-center">
                Built on a strong foundation of commercial litigation and
                dispute resolution, SLF Lawyers has grown into a reputable
                practice known for its commercially minded approach to matters.
                With offices situated in Addis Ababa, Bahirdar, Hawassa, Mekelle
                and Adama, we are able to service our clients with our team
                of experienced legal professionals who are well versed in
                various professional legal services. We provide our clients with
                clear and concise advice, always being mindful of the most
                economical way for them to proceed and with recommendations on
                how to best achieve a timely, commercial and cost-effective
                solution.
              </p>
              <p className="font-sans text-xs text-gray-900 dark:text-gray-800">
                Click on an area of practice below to learn more about our legal
                service expertise. For more information, or to request a
                confidential consultation, please Contact Us.
              </p>

      <div className="text-center">
        <a
          href="#"
          className="inline-block mx-auto text-center mt-8 border border-cyan-600 px-8 py-3 font-medium hover:bg-black hover:text-white"
        >
          Contact Us
        </a>
      </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
    <div className="-mt-20 shadow-2xl w-full mx-auto rounded-3xl md:w-3/5">
        <div className="bg-white rounded-t-3xl py-3 md:flex md:flex-row justify-around md:p-10">
            <AttornyCategory />
        </div>
    </div>
</div>

    </>
  );
};

export default PracticeArea;
