import React, { useEffect, useState } from "react";
import Link from "next/link";
function NewsCard() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://vgf59b03-5001.uks1.devtunnels.ms/api/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="mx-4">
      <h1 className="text-4xl font-semibold text-center my-6">Coming Soon ...</h1>
      <p className="text-center mb-5">
      We are working on it soon it will be available.
      </p>
      {/* <div className="md:grid grid-cols-3 md:w-3/4 mx-auto gap-5">
        {news.map((item) => (
          <div
            key={item._id}
            className="mt-6 shadow-xl text-center max-w-sm bg-white"
          >
            <img
              src={`https://vgf59b03-5001.uks1.devtunnels.ms${item.NewImage}`} // Updated to use the new base URL
              alt="news image"
              className="w-full h-auto"
            />
            <p className="py-2">
              {new Date(item.createdAt).toLocaleDateString("en-US")}
            </p>
            <p className="pb-5">{item.NewsTitle}</p>
            <Link
              className="text-blue-500 hover:text-blue-700"
              href={`/news/${item._id}`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default NewsCard;
