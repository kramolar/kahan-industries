import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import company_logo from "../assets/KahaanIndustries-logo.png";
import hamburger from "../assets/hamburger.png";

export const Appbar = () => {
  const location = useLocation();

  const isContactUs = location.pathname === "/contact-us";
  const isFilledWax = location.pathname === "/filled-wax";
  const isRecycledWax = location.pathname === "/recycled-wax";
  const isUnfilledWax = location.pathname === "/unfilled-wax";
  const isStickyWax = location.pathname === "/sticky-wax";

 

  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef(null);

  // Toggle the menu when clicking the hamburger icon
  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-cyan-950 flex items-center justify-between p-6 fixed top-0 w-full z-50">
        <div className="flex items-center">
          <div className="mx-2 h-12 w-12">
            <Link to="/">
              <img src={company_logo} alt="Kahaan Industries Logo" />
            </Link>
          </div>
          <div className="text-white text-3xl font-monteserrat font-medium font-sans">
            <Link to="/">Kahan Industries</Link>
          </div>
        </div>
        <div className="flex items-center relative">
          <div className="relative">
          <div ref={menuRef}>
      <div className="mt-3 mb-3 w-8 rounded-md bg-white block md:hidden mr-2 items-center justify-between">
        <img
          src={hamburger}
          onClick={toggleDropdown}
          alt="Hamburger Menu"
        />
      </div>
      <div
        className={`absolute right-4 w-48 rounded-md shadow-lg ring-1 bg-sky-800 ${dropdown ? "block" : "hidden"}`}
      >
        <div className="py-1">
          <Link
            to="/"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Home
          </Link>
          <Link
            to="/filled-wax"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Filled Wax
          </Link>
          <Link
            to="/unfilled-wax"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Unfilled Wax
          </Link>
          <Link
            to="/recycled-wax"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Recycled Wax
          </Link>
          <Link
            to="/sticky-wax"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Sticky Wax
          </Link>
          <Link
            to="/contact-us"
            className="block px-4 py-2 font-abel text-md text-white hover:text-lg"
            onClick={() => setDropdown(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
          </div>
          <div
            className={`text-white hover:underline ml-10 ${
              isFilledWax ? "underline" : ""
            } text-2xl font-normal font-abel hidden md:block`}
          >
            <Link to="/filled-wax">Filled Wax</Link>
          </div>
          <div
            className={`text-white hover:underline ${
              isUnfilledWax ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden md:block`}
          >
            <Link to="/unfilled-wax">Unfilled Wax</Link>
          </div>
          <div
            className={`text-white hover:underline ${
              isRecycledWax ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden md:block`}
          >
            <Link to="/recycled-wax">Recycled Wax</Link>
          </div>

          <div
            className={`text-white hover:underline ${
              isStickyWax ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden md:block`}
          >
            <Link to="/sticky-wax">Sticky Wax</Link>
          </div>
          <div
            className={`text-white hover:underline ${
              isContactUs ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 mr-4 hidden md:block`}
          >
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="mt-24"></div>
    </div>
  );
};
