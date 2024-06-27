import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://backend.service.solomonmoalawoffice.com/api/news/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setNewsItem(data[0]); // Adjust to use the first item of the array response
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mx-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold my-4">{newsItem.NewsTitle}</h1>
        <p className="text-gray-600">{new Date(newsItem.createdAt).toLocaleDateString("en-US")}</p>
        {newsItem.NewsImage && (
          <img
            src={newsItem.NewsImage} // Directly use the image URL from the API response
            alt="news image"
            className="w-full h-auto my-4"
          />
        )}
        <p className="my-4" style={{ whiteSpace: 'pre-line' }}>{newsItem.NewsDescription}</p>
        <Link href="/news">
          <a className="text-blue-500 hover:text-blue-700">Back to News</a>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
