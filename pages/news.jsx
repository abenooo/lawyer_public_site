import React, { useEffect, useState } from 'react';
import NewsCard from '@/components/NewsCard'
function news() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://lawyerpw.onrender.com/api/newsCategory')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <>
    <div className="bg-white rounded-t-3xl py-3 md:flex-row justify-around md:p-10 flex space-x-2">
      {categories.map(category => (
        <button key={category._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {category.NewsCategoryName}
        </button>
      ))}
    </div>
    
    <NewsCard /></>
  );
}

export default news;
