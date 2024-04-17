import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-slate-900 text-gray-200 py-20 px-8">
      <div>
        <div className="flex gap-3">
          <img
            src="/assets/logo.jpeg"
            alt="logo"
            className="h-8 w-8 rounded-xl"
          />
          <h3 className="text-lg font-semibold">Solomon lawyer</h3>
        </div>

        <p className="text-justify mt-2">
          Solomon Lawyers is a new breed of law firm. We don’t stand on
          tradition or outdated ways of doing business. We don’t hide behind
          legalese or arcane legal procedures.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="mt-3">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="ml-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="text-lg font-semibold">Practice Area</h3>
          <ul className="ml-3">
            <li>
              <a href="#">Family Law</a>
            </li>
            <li>
              <a href="#">Commercial Law</a>
            </li>
            <li>
              <a href="#">Insurance Law</a>
            </li>
            <li>
              <a href="#">Commercial Litigation</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">Information</h3>
        <div className="flex items-center gap-3 my-2 ml-3">
          <GrLocation className="text-xl text-cyan-600" />
          <p className="text-sm">Addis Ababa lideta infront of xxx</p>
        </div>
        <div className="flex items-center gap-3 my-2 ml-3">
          <FiPhoneCall className="text-xl text-cyan-600" />
          <p>+251911111111 /+251911111111 </p>
        </div>
        <div className="flex items-center gap-3 my-2 ml-3">
          <MdOutlineEmail className="text-xl text-cyan-600" />
          <p>support@gmail.com</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Footer;
