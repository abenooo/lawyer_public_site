import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Disclaimer from "../Disclaimer";
const MyNavbar = () => {
  const [isNav, setNav] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const router = useRouter();
  const toggleNav = () => setNav(!isNav);
  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);
  // Collapse dropdown when the route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setShowAboutDropdown(false);
      setNav(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="/assets/logo.jpg"
                alt="logo"
                className="rounded-xl"
                height={32}
                width={32}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Solomon Mulugeta & Associates
              </span>
            </a>
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
                <Link href="/about" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    About SMA
                  </a>
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
                <Link href="/ourPeople" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    Our People
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contactUs" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    Contact Us
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/reviews" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    Reviews
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/faq" legacyBehavior>
                  <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                    FAQ's
                  </a>
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
                  <Link href="/practice-area/dispute-resolution/" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Alternative Dispute Resolution</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Alternative Dispute Resolution Service and support group</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/construction-infrastructure" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Construction and Infrastructure Law</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Construction Infrastructure Law.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/commercial-law" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Commercial Law</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Commercial Law services and support.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/commercial-litigation/" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Commercial Litigation</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">About Commercial Litigation law.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/employment-law" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Employment Law</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">About Employment Law.</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/practice-area/estate-planning-disputes" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Corporate Services</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Corporate Services.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/tax-customs" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Tax & Customs</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Tax & Customs services and support.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/trade-practice-anti-trust" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Trade Practice & Anti-trust</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Trade Practice & Anti-trust services and support.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/intellectual-property-technology" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Intellectual Property Technology</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Intellectual Property Technology Services and Support.</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/practice-area/real-estate-property" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Real Estate Property</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Details about the Real Estate Property practice.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/project-finance-ppp-public-procurement" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Project Finance, PPP & Public Procurement</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Project Finance, PPP & Public Procurement services and support.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/mining-energy" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Mining Energy</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Mining Energy services and support.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-area/banking-financial-services" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Banking & Financial Services</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Banking & Financial Services law services and support.</span>
                    </a>
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link href="/disclaimer" legacyBehavior>
                    <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">Disclaimer</div>
                      {/* <span className="text-sm text-gray-500 dark:text-gray-400">Disclaimer</span> */}
                    </a>
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