import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
const MyNavbar = () => {
  const [isNav, setNav] = useState(false);
  const toggleNav = () => setNav(!isNav); // Corrected to toggle the state
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/logo.jpeg"
              alt="Flowbite Logo"
              width={60} // specify the width
              height={60} // specify the height
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lawyer Solomon
            </span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isNav}
            onClick={toggleNav} // Bind click event to toggle navigation
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
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Slf
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={toggleAboutDropdown} // Bind click event to toggle dropdown
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
                <a
                  href="/ourPeople"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our People
                </a>
              </li>
              <li>
                <a
                  href="news"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="blog"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="contactUs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        {showAboutDropdown && (
          <div
            id="mega-menu-full-dropdown"
            className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
          >
            <div
              id="mega-menu-full-dropdown"
              className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
            >
              <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
                <ul>
                  <li>
                    <a href="/practice-area/insurance-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Insurance Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Details about the insurance law practice.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-litigation/">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">
                          Commercial Litigation
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/family-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Family Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Commercial Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Commercial Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/practice-area/insurance-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Insurance Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Details about the insurance law practice.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-litigation/">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">
                          Commercial Litigation
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/family-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Family Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Commercial Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Commercial Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="/practice-area/insurance-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Insurance Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Details about the insurance law practice.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-litigation/">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">
                          Commercial Litigation
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/family-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Family Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                  <li>
                    <a href="/practice-area/commercial-law">
                      <a className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Commercial Law</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Family law services and support.
                        </span>
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MyNavbar;
