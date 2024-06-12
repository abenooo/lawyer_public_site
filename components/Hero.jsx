import NewsCard from "./NewsCard";
import AttornyCategory from "./AttornyCategory";
import Link from "next/link";
function Hero() {
  return (
    <>
      <div className="bg-[url('/assets/meeting.jpg')] h-[85vh] bg-cover ">
        <div className="text-white flex flex-col gap-5 justify-center items-center h-full">
          <h1 className="text-white font-semibold text-4xl md:text-5xl lg:6xl xl:7xl">
            SML Lawyers
          </h1>
          <p className="mx-3 text-center text-medium md:w-2/5 text-white text-xl">
            SML Lawyers is a new breed of law firm. We don’t stand on tradition
            or outdated ways of doing business. We don’t hide behind legalese or
            arcane legal procedures. The focus is on getting results for our
            clients, not on how our foyer looks.
          </p>
          <div className="md:flex pb-28 pt-10 space-x-3">
            <Link
              className="border border-cyan-600 px-8 py-3 font-medium hover:bg-white hover:text-black"
              href="/contactUs"
            >
              Contact us
            </Link>
            <Link
              className="border border-cyan-600 px-8 py-3 font-medium hover:bg-white hover:text-black"
              href="/practiceArea"
            >
              Practice area
            </Link>
          </div>
        </div>
      </div>

      {/* <div className=" z-50 border border-red-600"> */}
      <div className="-mt-20 shadow-2xl w-11/12 mx-auto  rounded-3xl  md:w-3/5 ">
        <div className=" bg-gray-100 rounded-t-3xl flex flex-col items-center gap-6 py-3 font-medium md:flex-row justify-around md:p-10">
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            ADDIS ABABA
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            BAHIR DAR
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            HAWASSA
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            MEKELLE
          </h2>
          <h2 className="underline underline-offset-8 decoration-2 decoration-orange-500">
            ADAMA
          </h2>
        </div>
        <div className="md:grid grid-cols-3 gap-4 p-4">
          {/* <div>
            <img className="my-4" src="https://res.cloudinary.com/teepublic/image/private/s--qc1rJxw2--/c_fit,g_north_west,h_840,w_840/co_36538b,e_outline:40/co_36538b,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_jpg,h_630,q_90,w_630/v1591543046/production/designs/11083852_0.jpg" />
          </div> */}
          <div>
            <img
              src="/assets/logo.webp"
              alt="logo"
              className="rounded-xl mt-5"
            />
          </div>
          <div className="text-justify  md:py-8">
            <p className="mb-4">
              SMA Lawyers is a multidisciplinary team of respected legal
              professionals with offices in Addis Ababa, Bahir Dar, Hawassa,
              Mekelle and the Adama.
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
              Our experienced team of lawyers in Ethiopia combine a depth of
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
              {" "}
              To learn more about our Ethiopia law office's many areas of
              practice, visit our Practice Areas page. For confidential advice
              on your legal issue, please{" "}
              <a href="/contactUs" className="bg-gray-300" >
                Contact Us
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* teams */}
      <div className="flex flex-wrap md:w-[80%] mx-auto my-10">
        <div className="w-full md:w-2/5">
          <div className=" bg-white shadow-md">
            <div className="bg-white rounded-t-3xl items-center gap-6  md:flex-row justify-around md:p-10">
              <p className="font-sans  text-4xl py-5 md:text-5xl lg:text-6xl text-center">
                What we do?
              </p>

              <p className="font-sans text-xs text-left px-4  text-gray-900">
                SMA Lawyers is a new breed of law firm. We don't stand on
                tradition or outdated ways of doing business.
              </p>
              <p className="font-sans text-xs text-left px-4  text-gray-900 my-4">
                We take a team approach to dealing with the more complex legal
                problems that cross our desks, working on the very reasonable
                assumption that two or more heads are better than one. We take
                the time to understand the whole picture, and our lawyers think
                outside the box to find solutions in even the most complex legal
                situations.
              </p>
              <p className="font-sans text-xs text-left px-4 text-gray-900 my-4">
                We don't hide behind legalese or arcane legal procedures,
                clearly communicating our process every step of the way. The
                focus is on getting results for our clients, not on how our
                foyer looks.
              </p>
            </div>
          </div>
        </div>
        <AttornyCategory />
      </div>
      {/* <Categories /> */}
      {/* <Teams/> */}
      <NewsCard />
    </>
  );
}

export default Hero;
