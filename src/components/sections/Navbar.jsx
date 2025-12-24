import React, { useState } from "react";
import Logo from "/NoBack_Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItemClass = (name) =>
    `relative flex items-center gap-2 hover:text-[#4A5568] cursor-pointer 
   after:content-[''] after:absolute after:left-0 after:bottom-0
   after:h-[2px] after:bg-primary after:transition-all after:duration-300
   ${
     activeTab === name
       ? "text-primary border-b-2 border-primary after:w-full"
       : "border-b-2 border-transparent after:w-0 hover:after:w-full hover:text-primary"
   }`;

  return (
    <nav className="w-full sticky top-0 left-0 z-99 bg-white border-b border-gray-200">
      {/* Top Info Bar */}
      <div className="w-full flex items-center justify-between px-10 p-2 bg-primary text-white text-sm text-center">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1 ">
            <i class="fa-regular fa-envelope"></i>
            <p className="hidden sm:block">support@sansiddhi.co.in</p>
          </span>
          <span className="flex items-center gap-1 ">
            <i class="fa-solid fa-phone"></i>
            <p className="hidden sm:block">+91-9899210941</p>
          </span>
        </div>
        <div>
          <a className="font-semibold underline hover:text-gray-200" href="#">
            Partner With Us
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-[95%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-24">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-text font-medium">
            <li
              onClick={() => setActiveTab("Home")}
              className={navItemClass("Home")}
            >
              <i className="fa-solid fa-house text-xs"></i>
              Home
            </li>

            <li
              onClick={() => setActiveTab("About")}
              className={navItemClass("About")}
            >
              <i className="fa-solid fa-circle-info text-sm"></i>
              About
            </li>

            <li
              onClick={() => setActiveTab("Engagement")}
              className={navItemClass("Engagement")}
            >
              <i className="fa-solid fa-handshake text-sm"></i>
              Engagement
            </li>

            <li
              onClick={() => setActiveTab("Inheritance")}
              className={navItemClass("Inheritance")}
            >
              <i className="fa-solid fa-scale-balanced text-sm"></i>
              Inheritance
            </li>

            {/* Others Dropdown */}
            <li className="relative group">
              <button
                onClick={() => setActiveTab("Others")}
                className={navItemClass("Others")}
              >
                Others
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </button>

              <ul className="absolute left-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Policies
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Help Center
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </li>
              </ul>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center">
            <button className="bg-primary text-white px-3 py-1.5 rounded-l-lg hover:bg-secondary transition">
              Sign Up
            </button>
            <button className="bg-secondary text-white px-3 py-1.5 rounded-r-lg hover:opacity-90 transition">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-text"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 text-text">
            {["Home", "About", "Engagement", "Inheritance"].map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer ${
                  activeTab === item ? "text-primary font-semibold" : ""
                }`}
              >
                {item}
              </li>
            ))}

            {/* Mobile Others */}
            <li>
              <button
                onClick={() => setOthersOpen(!othersOpen)}
                className="flex items-center justify-between w-full"
              >
                Others
                <i
                  className={`fa-solid fa-chevron-down transition ${
                    othersOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
            </li>

            <div className="flex mt-3">
              <button className="bg-primary text-white px-4 py-2 rounded-l-lg w-1/2">
                Sign Up
              </button>
              <button className="bg-secondary text-green-900 px-4 py-2 rounded-r-lg w-1/2">
                Login
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
