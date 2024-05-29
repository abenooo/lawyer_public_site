import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-slate-900 text-gray-400 py-20 px-8 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-3/4 mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="flex gap-3">
            <Image
              src="/assets/logo.jpg" // Corrected path to logo.jpg
              alt="logo"
              className="rounded-xl"
              height={32}
              width={32}
            />
            <h3 className="text-lg font-semibold text-gray-200">
              Solomon Mulugeta & Associates
            </h3>
          </div>

          <p className="text-justify mt-2">
            Solomon Lawyers is a new breed of law firm. We don’t stand on
            tradition or outdated ways of doing business. We don’t hide behind
            legalese or arcane legal procedures.
          </p>
        </div>
        <div className="mt-3 md:ml-9">
          <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
          <ul className="ml-3">
            <li>
              <Link href="/" className="hover:underline hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline hover:text-gray-200">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className="hover:underline hover:text-gray-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:underline hover:text-gray-200">
                News
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline hover:text-gray-200">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-200">Practice Area</h3>
          <ul className="ml-3">
            <li>
              <Link href="/practice-area/dispute-resolution" className="hover:underline hover:text-gray-200">
              Alternative Dispute Resolution
              </Link>
            </li>
            <li>
              <Link href="/practice-area/commercial-law" className="hover:underline hover:text-gray-200">
                Commercial Law
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:text-gray-200">
                Insurance Law
              </Link>
            </li>
            <li>
              <Link href="/practice-area/commercial-litigation" className="hover:underline hover:text-gray-200">
                Commercial Litigation
              </Link>
            </li>
            <li>
              <Link href="/practice-area/banking-financial-services" className="hover:underline hover:text-gray-200">
              Banking Financial Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-3 col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-200">Information</h3>
          <div className="flex items-center gap-3 my-2 ml-3">
            <GrLocation className="text-2xl text-cyan-600" />
            <div className="flex flex-col text-sm">
              <p>Liberia St, Nur Building 1st Floor, Office #105</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="flex items-center gap-3 my-2 ml-3">
            <FiPhoneCall className="text-xl text-cyan-600" />
            <p>+251944246334 || +251944162261 </p>
          </div>
          <div className="flex items-center gap-3 my-2 ml-3">
            <MdOutlineEmail className="text-2xl text-cyan-600" />
            <p className="text-sm">
              <a href="mailto:psolomon39@yahoo.com" className="hover:underline">
                psolomon39@yahoo.com ||
              </a>{" "}
              <a href="mailto:psolaxis@gmail.com" className="hover:underline">
                psolaxis@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 my-8">
        <Link
          href="#"
          className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-full text-white"
        >
          {" "}
          <FaFacebookF />
        </Link>
        <Link
          href="#"
          className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-full text-white"
        >
          {" "}
          <FaXTwitter />
        </Link>
        <Link
          href="#"
          className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-full text-white"
        >
          {" "}
          <GrInstagram />
        </Link>

        <Link
          href="https://t.me/+251944246334"
          className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-full text-white"
        >
          <FaTelegramPlane />
        </Link>

        <Link
          href="https://www.linkedin.com/in/solomon-mulugeta-abate-1647176a/"
          className="bg-gray-700 hover:bg-cyan-600 p-3 rounded-full text-white"
        >
          <FaLinkedinIn />
        </Link>
      </div>
      <p className="text-center">
        {year} Solomon Mulugeta & Associates. All Rights Reserved.
      </p>
      <p className="text-center">
  Design and Develop by{' '}
  <Link
    href="https://www.linkedin.com/in/abenezer-kifle/"
    className="text-blue-600 hover:text-blue-800"
  >
    Abenezer Kifle
  </Link>
  .
</p>

    </div>
  );
}

export default Footer;
