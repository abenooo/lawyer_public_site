import React, { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";
function news() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://lawyerpw.onrender.com/api/newsCategory")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div class="flex flex-col">
        <div class="bg-white py-8">
          <div class="container mx-auto px-4 flex flex-col md:flex-row">
            <div class="w-full md:w-3/4 px-4">
              <NewsCard />
            </div>
            <div class="w-full md:w-1/4 px-4">
              <div class="bg-gray-20 p-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4 my-6">
                  Recent Posts
                </h2>
                <ul class="list-none">
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900 cursor-pointer">
                      21 MARCH 2024 When is a company insolvent?
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      29 FEBRUARY 2024 Have you checked your 2024 Land Tax
                      Assessment?
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      15 FEBRUARY 2024 Is my inheritance protected after
                      separation?
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-gray-700 hover:text-gray-900">
                      25 JANUARY 2024 Counterfeit wine – how to avoid a bad
                      taste
                    </a>
                  </li>
                </ul>
              </div>
              <div class="bg-gray-30 p-4 mt-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">
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
