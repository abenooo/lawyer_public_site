import React, { useState } from 'react';
import ReviewItem from '../components/FAQItem'; // Importing ReviewItem component

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    { header: "What services do SMA Lawyers offer?", text: "SMA Lawyers provides a comprehensive range of legal services, including Building & Construction, Commercial Litigation, Commercial Law, Workplace Relations & Safety, Estate Planning & Disputes, Family Law, Franchising & Licensing, Insolvency, Insurance Law, Property Law, Immigration, Banking & Finance, and Ethiopian Law." },
    { header: "Where are SMA Lawyers' offices located?", text: "SMA Lawyers has offices in major Ethiopia cities including Addis Ababa, Bahir Dar, Hawassa, Mekelle and the Adama." },
    { header: "How can SMA Lawyers assist with commercial litigation?", text: "Our team combines years of legal expertise with a commercially minded approach to help clients navigate complex litigation matters, aiming for favourable outcomes in all situations." },
    { header: "What makes SMA Lawyers different from other law firms?", text: "SMA Lawyers is distinguished by its multidisciplinary team, attention to detail, thorough preparation, intelligent strategy, and efficient service delivery, ensuring comprehensive support for both individuals and businesses." },
    { header: "How can I contact SMA Lawyers for a confidential consultation?", text: "For a confidential consultation, please visit our website and use the Contact Us section to connect with us." },
    { header: "What areas of practice do SMA Lawyers specialize in for individual clients?", text: "For individual clients, we specialize in Family Law, Estate Planning & Disputes, Insolvency, and Immigration Law, providing personalized and thorough legal assistance." },
    { header: "How does SMA Lawyers support businesses with their legal needs?", text: "We offer services in Commercial Law, Workplace Relations & Safety, Franchising & Licensing, and more, tailoring our approach to meet the unique needs of both small and large businesses." },
    { header: "What resources are available on the SMA Lawyers website for understanding specific legal areas?", text: "Our website features detailed information on each area of practice, including insights into the expertise of our lawyers and how they can assist you. Click on any area of practice listed to learn more." }
];


  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          {questions.map((item, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2">
              <ReviewItem
                active={index === activeIndex}
                header={item.header}
                text={item.text}
                onClick={() => toggleItem(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
