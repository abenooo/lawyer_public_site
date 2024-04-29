import React, { useState } from 'react';
import ReviewItem from '../components/FAQItem'; // Importing ReviewItem component

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    { header: "What services do SLF Lawyers offer?", text: "SLF Lawyers provides a comprehensive range of legal services, including Building & Construction, Commercial Litigation, Commercial Law, Workplace Relations & Safety, Estate Planning & Disputes, Family Law, Franchising & Licensing, Insolvency, Insurance Law, Property Law, Immigration, Banking & Finance, and Italian Law." },
    { header: "Where are SLF Lawyers' offices located?", text: "SLF Lawyers has offices in major Australian cities including Melbourne, Sydney, Brisbane, Perth, and the Gold Coast." },
    { header: "How can SLF Lawyers assist with commercial litigation?", text: "Our team combines years of legal expertise with a commercially minded approach to help clients navigate complex litigation matters, aiming for favourable outcomes in all situations." },
    { header: "What makes SLF Lawyers different from other law firms?", text: "SLF Lawyers is distinguished by its multidisciplinary team, attention to detail, thorough preparation, intelligent strategy, and efficient service delivery, ensuring comprehensive support for both individuals and businesses." },
    { header: "How can I contact SLF Lawyers for a confidential consultation?", text: "For a confidential consultation, please visit our website and use the Contact Us section to connect with us." },
    { header: "What areas of practice do SLF Lawyers specialize in for individual clients?", text: "For individual clients, we specialize in Family Law, Estate Planning & Disputes, Insolvency, and Immigration Law, providing personalized and thorough legal assistance." },
    { header: "How does SLF Lawyers support businesses with their legal needs?", text: "We offer services in Commercial Law, Workplace Relations & Safety, Franchising & Licensing, and more, tailoring our approach to meet the unique needs of both small and large businesses." },
    { header: "What resources are available on the SLF Lawyers website for understanding specific legal areas?", text: "Our website features detailed information on each area of practice, including insights into the expertise of our lawyers and how they can assist you. Click on any area of practice listed to learn more." }
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
