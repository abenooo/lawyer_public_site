import React from 'react'

import { motion } from 'framer-motion';
const Categories = () => {
      // Define the categories
  const categories = [
    {
      name: "Alternative Dispute Resolution",
      image: "/assets/about/Alternative Dispute Resolution.webp",
    },
    {
      name: "Banking & Finance",
      image: "/assets/about/Banking & Finance.webp",
    },
    {
      name: "Building & Construction",
      image: "/assets/about/Building & Construction.webp",
    },
    { name: "Commercial Law", image: "/assets/about/Commercial Law.webp" },
    {
      name: "Commercial Litigation",
      image: "/assets/about/Commercial Litigation.webp",
    },
    {
      name: "Estate Planning & Disputes",
      image: "/assets/about/Estate Planning & Disputes.webp",
    },
    { name: "Family Law", image: "/assets/about/Family Law.webp" },
    {
      name: "Franchising & Licencing",
      image: "/assets/about/Franchising & Licencing.webp",
    },
    { name: "Insurance Law", image: "/assets/about/Insurance Law.webp" },
    { name: "Ethiopian Law", image: "/assets/about/Italian Law.webp" },
    { name: "Property Law", image: "/assets/about/Property Law.webp" },
  ];
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="flex flex-wrap container lg:ml-60">
    {categories.map((category, index) => (
      <motion.div
        key={index}
        className="w-full md:w-1/3 px-2 mb-10"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}  // Ensures animation triggers when 50% of the element is in view
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <a href={`/practice-area/${category.name.replace(/ /g, "-").toLowerCase()}`}>
          <motion.div
            className="relative mb-9 rounded-xl py-8 px-7 bg-white shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9"
            whileHover={{ scale: 1.05 }}
            style={{ height: "100px", width: "100%" }}
          >
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden">
              <img
                className="w-16 h-16 object-cover"
                src={category.image}
                alt={category.name}
              />
            </div>
            <h3 className="pt-2 text-base font-sans text-xs text-center md:text-xss sm:text-xss">
              {category.name}
            </h3>
          </motion.div>
        </a>
      </motion.div>
    ))}
  </div>
  )
}

export default Categories