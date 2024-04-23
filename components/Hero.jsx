import Teams from "./Teams";
import NewsCard from "./NewsCard"
import PracticeCard from "./PracticeCard"
import Image from "next/image";
function Hero() {
  return (
    <>
     <div className="bg-[url('/assets/homepage.png')] h-[85vh] bg-cover">
  <div className="text-white flex flex-col gap-5 justify-center items-center h-full">
    <h1 className="text-white font-semibold text-4xl md:text-5xl lg:6xl xl:7xl">
      SLF Lawyers
    </h1>
    <p className="mx-3 text-center text-medium md:w-2/5">
      SLF Lawyers is a new breed of law firm. We don’t stand on tradition
      or outdated ways of doing business. We don’t hide behind legalese or
      arcane legal procedures. The focus is on getting results for our
      clients, not on how our foyer looks.
    </p>
    <div className="md:flex pb-28 pt-10 space-x-3">
      <a
        className="border border-cyan-600 px-8 py-3 font-medium hover:bg-white hover:text-black"
        href="#"
      >
        Contact us
      </a>
      <a
        className="border border-cyan-600 px-8 py-3 font-medium hover:bg-white hover:text-black"
        href="#"
      >
        Practice area
      </a>
    </div>
  </div>
</div>

      {/* <div className=" z-50 border border-red-600"> */}
      <div className="-mt-20 shadow-2xl w-11/12 mx-auto  rounded-3xl  md:w-3/5 ">
        <div className=" bg-gray-100 rounded-t-3xl flex flex-col items-center gap-6 py-3 font-medium md:flex-row justify-around md:p-10">
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            MELBOURNE
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            SYDNEY
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            BRISBANE
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            PERTH
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            GOLD COAST
          </h2>
        </div>
        <div className="md:grid grid-cols-3 gap-4 p-4">
          <div>
            <img src="https://slflawyers.com.au/wp-content/uploads/2020/12/Logo.jpg" />
          </div>
          <div className="text-justify  md:py-8">
            <p className="mb-4">
              SLF Lawyers is a multidisciplinary team of respected legal
              professionals with offices in Melbourne, Sydney, Brisbane, Perth
              and the Gold Coast.
            </p>
            <p className="mb-4">
              Combining years of legal experience with our commercially minded
              approach to matters, we achieve favourable outcomes for all our
              clients, no matter how complex the situation.
            </p>
            <p className="mb-4">
              With core values of attention to detail, thorough preparation,
              intelligent strategy and efficient service delivery, we provide
              comprehensive legal service to individuals, small and large
              business, and major multinational companies alike.
            </p>
          </div>
          <div className="text-justify md:py-8">
            <p className="mb-4">
              Our experienced team of lawyers in Australia combine a depth of
              skill covering Commercial, Property, Insurance, Employment and
              Finance matters with the ability to listen, research and
              understand the complete picture
            </p>
            <p className="mb-4">
              Our client-centred approach results in clear and concise advice,
              with alternative dispute resolution our specialty. Where
              litigation is unavoidable, we pursue beneficial outcomes with
              rigour and unwavering focus.
            </p>
            <p className="mb-4">
              To learn more about our Australian law firm’s many areas of
              practice, visit our Practice Areas page. For confidential advice
              on your legal issue, please Contact Us.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* teams */}
      <PracticeCard/>
      <Teams/>
      <NewsCard/>
    </>
  );
}

export default Hero;