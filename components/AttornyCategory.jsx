// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const AttornyCategory = () => {
//     const categories = [
//         {
//           name: "Alternative Dispute Resolution",
//           image: "/assets/about/Alternative Dispute Resolution.webp",
//           url: "/practice-area/dispute-resolution"
//         },
//         {
//           name: "Construction and Infrastructure Law",
//           image: "/assets/about/Building & Construction.webp",
//           url: "/practice-area/construction-infrastructure"
//         },
//         {
//           name: "Commercial Law",
//           image: "/assets/about/Commercial Law.webp",
//           url: "/practice-area/commercial-law"
//         },
//         {
//           name: "Commercial Litigation",
//           image: "/assets/about/Commercial Litigation.webp",
//           url: "/practice-area/commercial-litigation"
//         },
//         {
//           name: "Employment Law",
//           image: "/assets/about/Employment Law.webp",
//           url: "/practice-area/employment-law"
//         },
//         {
//           name: "Corporate Services",
//           image: "/assets/about/Estate Planning & Disputes.webp",
//           url: "/practice-area/estate-planning-disputes"
//         },
//         {
//           name: "Tax & Customs",
//           image: "/assets/about/Franchising & Licencing.webp",
//           url: "/practice-area/tax-customs"
//         },
//         {
//           name: "Trade Practice & Anti-trust",
//           image: "/assets/about/Insurance Law.webp",
//           url: "/practice-area/trade-practice-anti-trust"
//         },
//         {
//           name: "Intellectual Property Technology",
//           image: "/assets/about/Italian Law.webp",
//           url: "/practice-area/intellectual-property-technology"
//         },
//         {
//           name: "Real Estate Property",
//           image: "/assets/about/Property Law.webp",
//           url: "/practice-area/real-estate-property"
//         },
//         {
//           name: "Project Finance, PPP & Public Procurement",
//           image: "/assets/about/Workplace Relations & Safety.webp",
//           url: "/practice-area/project-finance-ppp-public-procurement"
//         },
//         {
//           name: "Mining Energy",
//           image: "/assets/about/Banking & Finance.webp",
//           url: "/practice-area/mining-energy"
//         },
//         {
//           name: "Banking & Financial Services",
//           image: "/assets/about/Insolvency.webp",
//           url: "/practice-area/banking-financial-services"
//         }
//     ];

//     const variants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 }
//     };

//     return (
//         <>
//             <div className="w-full md:w-3/5 px-4 my-20">
//                 <div className="flex flex-wrap -mx-2">
//                     {categories.map((category, index) => (
//                         <motion.div
//                             key={index}
//                             className="w-full md:w-1/3 px-2 mb-10"
//                             variants={variants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, amount: 0.5 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                         >
//                             <a href={category.url}>
//                                 <motion.div
//                                     className="relative mb-9 rounded-xl py-8 px-7 bg-white shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9"
//                                     whileHover={{ scale: 1.05 }}
//                                     style={{ height: "100px", width: "100%" }}
//                                 >
//                                     <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden">
//                                         <Image
//                                             src={category.image}
//                                             alt={category.name}
//                                             layout="fill"
//                                             objectFit="cover"
//                                         />
//                                     </div>
//                                     <h3 className="pt-2 text-base font-sans text-xs text-center md:text-xss sm:text-xss">
//                                         {category.name}
//                                     </h3>
//                                 </motion.div>
//                             </a>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AttornyCategory;
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AttornyCategory = () => {
    const categories = [
        {
          name: "Alternative Dispute Resolution",
          image: "/assets/about/Alternative Dispute Resolution.webp",
          url: "/practice-area/dispute-resolution"
        },
        {
          name: "Construction and Infrastructure Law",
          image: "/assets/about/Building & Construction.webp",
          url: "/practice-area/construction-infrastructure"
        },
        {
          name: "Commercial Law",
          image: "/assets/about/Commercial Law.webp",
          url: "/practice-area/commercial-law"
        },
        {
          name: "Commercial Litigation",
          image: "/assets/about/Commercial Litigation.webp",
          url: "/practice-area/commercial-litigation"
        },
                {
          name: "Employment Law",
          image: "/assets/about/Insurance Law.webp",
          url: "/practice-area/employment-law"
        },
        {
          name: "Corporate Services",
          image: "/assets/about/Estate Planning & Disputes.webp",
          url: "/practice-area/estate-planning-disputes"
        },
        {
          name: "Tax & Customs",
          image: "/assets/about/Franchising & Licencing.webp",
          url: "/practice-area/tax-customs"
        },
        {
          name: "Trade Practice & Anti-trust",
          image: "/assets/about/Insurance Law.webp",
          url: "/practice-area/trade-practice-anti-trust"
        },
        {
          name: "Intellectual Property Technology",
          image: "/assets/about/Italian Law.webp",
          url: "/practice-area/intellectual-property-technology"
        },
        {
          name: "Real Estate Property",
          image: "/assets/about/Property Law.webp",
          url: "/practice-area/real-estate-property"
        },
        {
          name: "Project Finance, PPP & Public Procurement",
          image: "/assets/about/Workplace Relations & Safety.webp",
          url: "/practice-area/project-finance-ppp-public-procurement"
        },
        {
          name: "Mining Energy",
          image: "/assets/about/Banking & Finance.webp",
          url: "/practice-area/mining-energy"
        },
        {
          name: "Banking & Financial Services",
          image: "/assets/about/Insolvency.webp",
          url: "/practice-area/banking-financial-services"
        }
    ];

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full md:w-3/5 px-4 my-20">
            <div className="flex flex-wrap -mx-2">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="w-full md:w-1/3 px-2 mb-10"
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link href={category.url} passHref>
                            <motion.div
                                className="relative mb-9 rounded-xl py-8 px-7 bg-white shadow-lg transition-all hover:shadow-md sm:p-9 lg:px-6 xl:px-9"
                                whileHover={{ scale: 1.05 }}
                                style={{ height: "100px", width: "100%" }}
                            >
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-24 bg-white border-4 border-white rounded-full overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <h3 className="pt-2 text-base font-sans text-xs text-center md:text-xss sm:text-xss">
                                    {category.name}
                                </h3>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default AttornyCategory;
