

function PracticeCard() {
  return (
    <div className="px-2 bg-gray-300">
      <h1 className="font-semibold text-center text-4xl mt-14">
        Our Practice Areas
      </h1>
      <p className="text-center mt-3 mb-6">
        Click on an area of practice below to learn more about the expertise of
        our lawyers in Australia. For more information, or to request a
        confidential consultation, please{" "}
        <a href="#" className="text-cyan-600">
          Contact Us.
        </a>
      </p>
      <div className="md:grid grid-cols-4 md:w-3/5 mx-auto gap-3">
        <div className="">
          <img
            className="-mb-10 mx-auto block w-32"
            src="https://slflawyers.com.au/wp-content/uploads/2021/01/Artboard-11009.png"
            alt="practice area image"
          />
          <div className="px-8 py-10 shadow-xl bg-white rounded-2xl">
            <p className="text-center text-sm">Building and Construction</p>
          </div>
        </div>
        {/* card two */}

        <div className="">
          <img
            className="-mb-10 mx-auto block w-32"
            src="https://slflawyers.com.au/wp-content/uploads/2021/01/Artboard-11009-160x160.png"
            alt="practice area image"
          />
          <div className="px-8 py-10 shadow-xl bg-white rounded-2xl">
            <p className="text-center text-sm">
              Alternative Dispute Resolution
            </p>
          </div>
        </div>
        {/* card 3 */}

        <div className="">
          <img
            className="-mb-10 mx-auto block w-32"
            src="https://slflawyers.com.au/wp-content/uploads/2021/01/Artboard-11012.png"
            alt="practice area image"
          />
          <div className="px-8 py-10 shadow-xl bg-white rounded-2xl">
            <p className="text-center text-sm">Commercial Litigation</p>
          </div>
        </div>

        {/* card 4 */}

        <div className="">
          <img
            className="-mb-10 mx-auto block w-32"
            src="https://slflawyers.com.au/wp-content/uploads/2021/01/Artboard-11011-160x160.png"
            alt="practice area image"
          />
          <div className="px-8 py-10 shadow-xl bg-white rounded-2xl">
            <p className="text-center text-sm">Commercial Law</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeCard
