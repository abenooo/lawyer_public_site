import React, { useState } from 'react';
import Link from 'next/link';
import style from './styles.module.css';

const Navbar = () => {
  const [isNav, setNav] = useState(false);
  const toggleNav = () => setNav(!isNav);

  return (
    <div className="relative">
      <nav className="border-gray-200 px-5 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className={style.navbarWrapper}>
          <button
            onClick={toggleNav}
            className="inline-flex items-center p-2 text-sm text-white md:hidden hover:text-orange-500"
            aria-controls="navbar-default"
            aria-expanded={isNav}
            type="button"
          >
            <span className={style.menu} style={{ marginRight: '20px' }}>Self Lawyer</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`${style.navMenu} ${isNav ? style.showMenu : ''}`}>
            <ul className={style.navitem}>
              {/* List of navigation links */}
              <li className={style.navlink}><Link href="/">Home</Link></li>
              <li className={style.navlink}><Link href="/findSitter">About Slf</Link></li>
              <li className={style.navlink}><Link href="/findHouse">Practical Area</Link></li>
              <li className={style.navlink}><Link href="/membership">Our People</Link></li>
              <li className={style.navlink}><Link href="/reviews">Careers</Link></li>
              <li className={style.navlink}><Link href="/faq">News</Link></li>
              <li className={style.navlink}><Link href="/contactUs">Contact Us</Link></li>
              <li className={style.navlink}><Link href="/giftVaucher">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;