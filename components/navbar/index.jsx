// import React, { useState } from "react";
// const MyNavbar = () => {
//   const [isNav, setNav] = useState(false);
//   const toggleNav = () => setNav(!isNav); // Corrected to toggle the state
//   const [showAboutDropdown, setShowAboutDropdown] = useState(false);

//   const toggleAboutDropdown = () => {
//     setShowAboutDropdown(!showAboutDropdown);
//   };

//   return (
//     <>
//       <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//           <a
//             href="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             {/* <Image
//               src="/assets/logo.jpg"
//               alt="Flowbite Logo"
//               width={60} // specify the width
//               height={60} // specify the height
//             /> */}
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Solomon Mulugeta  & Associates
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="mega-menu-full"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="mega-menu-full"
//             aria-expanded={isNav}
//             onClick={toggleNav} // Bind click event to toggle navigation
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             id="mega-menu-full"
//             className={`items-center justify-between font-medium ${
//               isNav ? "flex" : "hidden"
//             } w-full md:flex md:w-auto md:order-1`}
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse w-full md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <a
//                   href="/about"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About SMA
//                 </a>
//               </li>
//               <li>
//                 <button
//                   id="mega-menu-full-dropdown-button"
//                   data-collapse-toggle="mega-menu-full-dropdown"
//                   className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                   onClick={toggleAboutDropdown} // Bind click event to toggle dropdown
//                 >
//                   Practice Areas{" "}
//                   <svg
//                     className="w-2.5 h-2.5 ms-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 10 6"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 4 4 4-4"
//                     />
//                   </svg>
//                 </button>
//               </li>
//               <li>
//                 <a
//                   href="/ourPeople"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Our People
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/news"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   News
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="blog"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="contactUs"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/reviews"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Reviews
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/faq"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   FAQ's
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {showAboutDropdown && (
//           <div
//             id="mega-menu-full-dropdown"
//             className=" mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
//           >
            
//             <div
//               id="mega-menu-full-dropdown"
//               className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
//             >
//               <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
//                 <ul>
//                 <li>
//                     <a href="/practice-area/dispute-resolution/">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">
//                         Alternative Dispute Resolution
//                         </div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Alternative Dispute Resolution Service and support group
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/construction-infrastructure">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Construction and Infrastructure Law</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           Details about the Construction Infrastructure Law.
//                         </span>
//                       </a>
//                     </a>
//                   </li>

//                   <li>
//                     <a href="/practice-area/commercial-law">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Commercial Law </div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Commercial Law services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/commercial-litigation/">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">
//                           Commercial Litigation 
//                         </div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                          About Commercial Litigation  law.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/employment-law ">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Employment  Law </div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           About Employment Law.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <a href="/practice-area/estate-planning-disputes">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Corporate Services</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           Details about the Corporate Services.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
                
//                   <li>
//                     <a href="/practice-area/tax-customs">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Tax & Customs</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           Tax & Customs services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/trade-practice-anti-trust">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Trade Practice & Anti-trust</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Trade Practice & Anti-trust services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/intellectual-property-technology">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Intellectual Property Technology</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Intellectual Property Technology Services and Support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     <a href="/practice-area/real-estate-property">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Real Estate Property</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           Details about the Real Estate Property practice.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/project-finance-ppp-public-procurement">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">
//                         Project Finance,PPP & Public Procurement
//                         </div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Project Finance, PPP & Public Procurement services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/mining-energy">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Mining Energy</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           Mining Energy services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/practice-area/banking-financial-services">
//                       <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
//                         <div className="font-semibold">Banking & Financial Services</div>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                         Banking & Financial Services law services and support.
//                         </span>
//                       </a>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default MyNavbar;
import React, { useState } from "react";
import Link from "next/link";

const MyNavbar = () => {
  const [isNav, setNav] = useState(false);
  const toggleNav = () => setNav(!isNav);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Solomon Mulugeta & Associates
            </span>
          </Link>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isNav}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`items-center justify-between font-medium ${
              isNav ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse w-full md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  About SMA
                </Link>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={toggleAboutDropdown}
                >
                  Practice Areas{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link href="/ourPeople" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/news" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  News
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contactUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/faq" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {showAboutDropdown && (
          <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
            <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
              <ul>
                <li>
                  <Link href="/practice-area/dispute-resolution/" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Alternative Dispute Resolution</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Alternative Dispute Resolution Service and support group</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/construction-infrastructure" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Construction and Infrastructure Law</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Construction Infrastructure Law.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/commercial-law" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Commercial Law</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Commercial Law services and support.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/commercial-litigation/" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Commercial Litigation</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">About Commercial Litigation law.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/employment-law" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Employment Law</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">About Employment Law.</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/practice-area/estate-planning-disputes" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Corporate Services</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Corporate Services.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/tax-customs" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Tax & Customs</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Tax & Customs services and support.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/trade-practice-anti-trust" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Trade Practice & Anti-trust</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Trade Practice & Anti-trust services and support.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/intellectual-property-technology" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Intellectual Property Technology</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Intellectual Property Technology Services and Support.</span>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/practice-area/real-estate-property" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Real Estate Property</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Real Estate Property practice.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/project-finance-ppp-public-procurement" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Project Finance, PPP & Public Procurement</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Project Finance, PPP & Public Procurement services and support.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/mining-energy" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Mining Energy</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Mining Energy services and support.</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/banking-financial-services" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-semibold">Banking & Financial Services</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Banking & Financial Services law services and support.</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MyNavbar;
