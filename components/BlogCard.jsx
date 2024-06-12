import React, { useEffect, useState } from "react";
import Link from "next/link";
function BlogCard() {
  const [news, setNews] = useState([]);
  const imgUrl = `${process.env.NEXT_PUBLIC_IMG_URL}`;
  const url = `https://solomonmoalawoffice.com:3003/api/blog`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="mx-4">
      <div className="md:grid grid-cols-3 md:w-3/4 mx-auto gap-5">
        {news.map((item) => (
          <div
            key={item._id}
            className="mt-6 shadow-xl text-center max-w-sm bg-white"
          >
            <img
              src={imgUrl + `${item.BlogImage}`}
              alt="news image"
              className="w-full h-auto"
            />
            <p className="py-2">
              {new Date(item.createdAt).toLocaleDateString("en-US")}
            </p>
            <p className="pb-5">{item.BlogTitle}</p>
            <p className="pb-5">{item.BlogCategory}</p>
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

export default BlogCard;
