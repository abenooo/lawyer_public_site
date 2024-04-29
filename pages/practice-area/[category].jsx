import React from "react";
import getImageUrl from "../../utils/imageUtils";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import practiceAreaContent from "../../data/practiceAreaContent";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return <div>Loading...</div>;

  const content = practiceAreaContent[category] || {
    title: "Not Found",
    description: "The requested category does not exist.",
    details: [],
    itemDetails: [],
  };

  const { title, description, details, itemDetails } = content;
  const imageUrl = getImageUrl(category);

  return (
    <div>
      <Header imageUrl={imageUrl} logoUrl="/assets/logo.jpeg" text={title} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4 md:px-6 py-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{description}</p>
            <ul>
              {details.map((detail, index) => (
                <li key={index} className="mt-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-6 py-4 mt-4 md:mt-0">
            <ul>
              {itemDetails.map((item, index) => (
                <li key={index} className="flex items-center mt-2">
                  <span className="inline-block p-2 rounded-full bg-orange-400 text-white mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
