import React, { useState } from "react";
import { Navbar } from "flowbite-react";
const MyNavbar = () => {
  const [isNav, setNav] = useState(false);
  const toggleNav = () => setNav(!isNav);

  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBpaT0wPQ-3SIjeekEjz7uujUSor7c-AKBRkE57DSpA&s"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lawyer Solomon
            </span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home2
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Slf{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Practical Area
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our People
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQ's
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          class="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">INSURANCE LAW</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Coverage for all your legal needs in insurance matters.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">FAMILY LAW</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Expert legal advice on family disputes and agreements.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">COMMERCIAL LAW</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Supporting businesses with comprehensive legal counsel.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">COMMERCIAL LITIGATION</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Legal expertise in resolving business disputes.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">ITALIAN LAW</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Specialized in Italian legal system and regulations.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              {/* <!-- Additional items can be placed here --> */}
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">BANKING & FINANCE</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Navigating complex financial laws and regulations.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">WORKPLACE RELATIONS & SAFETY</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Ensuring legal compliance in the workplace.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">
                    ALTERNATIVE DISPUTE RESOLUTION
                  </div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Effective solutions outside the courtroom.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">BANKRUPTCY & INSOLVENCY</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Advising on insolvency procedures and bankruptcy filings.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div class="font-semibold">IMMIGRATION</div>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    Assistance with all aspects of immigration law.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
