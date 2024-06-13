import React from "react";
import { Link, useLocation } from "react-router-dom";
import mechanical from "../assets/mechanical.svg";

export const Appbar = () => {
  const location = useLocation();
  const isOurStory = location.pathname === "/our-story";
  const isServices = location.pathname === "/services";
  const isMachiningShop = location.pathname === "/machining-shop";
  const isContactUs = location.pathname === "/contact-us";
  return (
    <div>
      <div className="bg-stone-700 flex items-center justify-between p-4 fixed top-0 w-full z-50">
        <div className="flex items-center">
          <div className="mx-2 h-8 w-8">
            <img src={mechanical}></img>
          </div>
          <div className="text-white text-xl font-semibold">
            <Link to="/">Kahaan Industries</Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`text-white hover:underline ${isOurStory ? "text-2xl" : "text-xl"} font-semibold ml-6 hidden md:block`}>
            <Link to="/our-story">Our Story</Link>
          </div>
          <div className={`text-white hover:underline ${isMachiningShop ? "text-2xl" : "text-xl"} font-semibold ml-6 hidden md:block`}>
            <Link to="/machining-shop">Machining Shop</Link>
          </div>
          <div className={`text-white hover:underline ${isServices ? "text-2xl" : "text-xl"} font-semibold ml-6 hidden md:block`}>
            <Link to="/services">Services</Link>
          </div>
          <div className={`text-white hover:underline ${isContactUs ? "text-2xl" : "text-xl"} font-semibold ml-6 mr-4`}>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
