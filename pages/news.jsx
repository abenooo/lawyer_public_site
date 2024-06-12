import React, { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";
function news() {
  const [categories, setCategories] = useState([]);
  const url = `https://solomonmoalawoffice.com:3003/api/newsCategory/`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
              <NewsCard />
            </div>
            <div className="w-full md:w-1/4 px-4">
              <div className="bg-gray-20 p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 my-6">
                  Recent Posts
                </h2>
                <ul className="list-none">
                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 cursor-pointer"
                    >
                      21 MARCH 2024 When is a company insolvent?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      29 FEBRUARY 2024 Have you checked your 2024 Land Tax
                      Assessment?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      15 FEBRUARY 2024 Is my inheritance protected after
                      separation?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                      25 JANUARY 2024 Counterfeit wine – how to avoid a bad
                      taste
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-30 p-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  News Categories
                </h2>
                <div>
                  <ul>
                    {categories.map((category) => (
                      <button
                        key={category._id}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 mx-3 rounded"
                      >
                        {category.NewsCategoryName}
                      </button>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default news;
