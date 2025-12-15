import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../../../assets/Home2Logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Added for mobile menu icons
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "PROJECTS",
    "BLOG",
    "PAGE",
    "CONTACT",
  ];

  return (
    <nav className="relative w-full bg-white">
      <div className="flex items-center justify-between px-4 md:px-8 py-6 max-w-11/12 mx-auto">
        {/* Logo Section */}
        <Link to={"/"} className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
            <img src={Logo} alt="Logo" className="w-5 h-5" />
          </div>
          <span className="text-xl md:text-2xl font-bold text-[#034833] whitespace-nowrap">
            Supper Heroes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
            >
              {link}
              <MdKeyboardArrowDown className="size-5" />
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden xl:flex bg-[#83CD20] hover:bg-lime-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors items-center gap-2">
          Get An Appointment <FaArrowRight />
        </button>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#034833] focus:outline-none z-50"
          >
            {isOpen ? (
              <HiX className="size-8" />
            ) : (
              <HiMenuAlt3 className="size-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
        fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            {navLinks.map((link) => (
              <li
                key={link}
                className="text-[#034833] border-b border-gray-100 pb-2 flex justify-between items-center"
                onClick={() => setIsOpen(false)}
              >
                {link}
                <MdKeyboardArrowDown className="size-6" />
              </li>
            ))}
          </ul>

          <button className="mt-10 bg-[#83CD20] text-white px-6 py-4 rounded-xl text-md font-bold flex items-center justify-center gap-2">
            Get An Appointment <FaArrowRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
