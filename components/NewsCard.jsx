
function NewsCard() {
  return (
    <div className="mx-4">
    <h1 className="text-4xl font-semibold text-center my-6">Latest News</h1>
    <p className="text-center mb-5">
      Keep up to date with our Australian law firm’s latest News.
    </p>
    <div className="md:grid grid-cols-4 md:w-3/4 mx-auto gap-5">
      {/* news card one */}
      <div className="mt-6 shadow-xl text-center max-w-sm bg-white">
        <img
          src="https://slflawyers.com.au/wp-content/uploads/2024/03/jakub-zerdzicki-8wLZi9OhsWU-unsplash-1280x850.jpg"
          alt="news image"
        />
        <p className="py-2">15 April 2024</p>
        <p className="pb-5">When is a company insolvent</p>
      </div>
      {/* news card two */}
      <div className="mt-6 shadow-xl text-center max-w-sm bg-white">
        <img
          src="https://slflawyers.com.au/wp-content/uploads/2024/02/tom-rumble-7lvzopTxjOU-unsplash-1280x850.jpg"
          alt="news image"
        />
        <p className="py-2">15 April 2024</p>
        <p className="py-2">
          Have you checked your 2024 Land Tax Assessment?
        </p>
      </div>
      {/* news card three */}
      <div className="mt-6 shadow-xl text-center max-w-sm bg-white">
        <img
          src="https://slflawyers.com.au/wp-content/uploads/2024/02/josh-appel-NeTPASr-bmQ-unsplash-1280x850.jpg"
          alt="news image"
        />
        <p className="py-2">15 April 2024</p>
        <p className="py-2">Is my inheritance protected after separation?</p>
      </div>
      {/* news card four */}
      <div className="mt-6 shadow-xl text-center max-w-sm bg-white">
        <img
          src="https://slflawyers.com.au/wp-content/uploads/2024/01/kym-ellis-aF1NPSnDQLw-unsplash-1280x850.jpg"
          alt="news image"
        />
        <p className="py-2">15 April 2024</p>
        <p className="py-2">Counterfeit wine - how to avoid a bad taste</p>
      </div>
    </div>
  </div>
  )
}

export default NewsCard
