import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import company_logo from "../assets/KahaanIndustries-logo.png";

export const Appbar = () => {
  const location = useLocation();
  const isOurStory = location.pathname === "/our-story";
  const isServices = location.pathname === "/services";
  const isMachiningShop = location.pathname === "/machining-shop";
  const isContactUs = location.pathname === "/contact-us";

  const [isServicesHover, setIsServicesHover] = useState(false);

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
            <Link to="/">Kahaan Industries</Link>
          </div>
        </div>
        <div className="flex items-center relative">
          <div
            className={`text-white hover:underline ${
              isOurStory ? "underline" : ""
            } text-2xl font-normal font-abel hidden md:block`}
          >
            <Link to="/our-story">Our Story</Link>
          </div>
          <div
            className={`text-white hover:underline ${
              isMachiningShop ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 hidden md:block`}
          >
            <Link to="/machining-shop">Machining Shop</Link>
          </div>
          <div
            className="relative ml-10"
            onMouseEnter={() => setIsServicesHover(true)}
            onMouseLeave={() => setIsServicesHover(false)}
          >
            <div
              className={`text-white hover:underline ${
                isServices ? "underline" : ""
              } text-2xl font-normal font-abel`}
            >
              <Link to="/services">Services</Link>
            </div>

            <div
              className={`absolute left-0  w-48 rounded-md shadow-lg bg-cyan-900 ring-1 ring-cyan-900 ring-opacity-5 ${
                isServicesHover ? "block" : "hidden"
              }`}
              onMouseEnter={() => setIsServicesHover(true)}
              onMouseLeave={() => setIsServicesHover(false)}
            >
              <div className="py-1">
                <Link
                  to="/service1"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Filled Pattern Wax
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Non-Filled Pattern Wax
                </Link>
                <Link
                  to="/service3"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Casting Products
                </Link>
                <Link
                  to="/service4"
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                >
                  Scrap Materials
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`text-white hover:underline ${
              isContactUs ? "underline" : ""
            } text-2xl font-normal font-abel ml-10 mr-4`}
          >
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="mt-24"></div>
    </div>
  );
};
