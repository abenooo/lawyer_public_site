// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const NewsDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [newsItem, setNewsItem] = useState(null);
//   const url = id ? `https://backend.service.solomonmoalawoffice.com/api/news/${id}` : null;
//   const imgUrl = 'https://backend.service.solomonmoalawoffice.com/uploads/';

//   useEffect(() => {
//     if (id) {
//       fetch(url)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setNewsItem(data);
//         })
//         .catch((error) => console.error("Error fetching news item:", error));
//     }
//   }, [id]);

//   if (!newsItem) return <div>Loading...</div>;

//   return (
//     <div className="mx-4">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold my-4">{newsItem.NewsTitle}</h1>
//         <p className="text-gray-600">{new Date(newsItem.createdAt).toLocaleDateString("en-US")}</p>
//         {newsItem.NewsImage && (
//           <img
//             src={`${imgUrl}${newsItem.NewsImage}`}
//             alt="news image"
//             className="w-full h-auto my-4"
//           />
//         )}
//         <p className="my-4" style={{ whiteSpace: 'pre-line' }}>{newsItem.NewsDescription}</p>
//         <Link href="/news">
//           <a className="text-blue-500 hover:text-blue-700">Back to News</a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;
import NewsDetail from "../../components/NewsDetail.jsx";

const NewsDetailPage = () => {
  return <NewsDetail />;
};

export default NewsDetailPage;
