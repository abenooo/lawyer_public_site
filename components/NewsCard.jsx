import React, { useEffect, useState } from "react";
import Link from "next/link";

function NewsCard() {
  const [news, setNews] = useState([]);
  const imgUrl = process.env.NEXT_PUBLIC_IMG_URL;
  const url = `https://solomonmoalawoffice.com:3003/api/news`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setNews(data);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [url]);

  return (
    <div className="mx-4">
      <div className="md:grid grid-cols-3 md:w-3/4 mx-auto gap-5">
        {news.map((item) => (
          <div
            key={item._id}
            className="mt-6 shadow-xl text-center max-w-sm bg-white"
          >
            {item.NewsImage && (
              <img
                src={`${imgUrl}${item.NewsImage}`}
                alt="news image"
                className="w-full h-auto"
              />
            )}
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
      </div>
    </div>
  );
}

export default NewsCard;
