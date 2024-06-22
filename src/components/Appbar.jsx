import React from "react";
import { Link, useLocation } from "react-router-dom";
import company_logo from "../assets/KahaanIndustries-logo.png";

export const Appbar = () => {
  const location = useLocation();
  const isOurStory = location.pathname === "/our-story";
  const isServices = location.pathname === "/services";
  const isMachiningShop = location.pathname === "/machining-shop";
  const isContactUs = location.pathname === "/contact-us";
  return (
    <div>
      <div className="bg-cyan-950 flex items-center justify-between p-6 fixed top-0 w-full z-50">
        <div className="flex items-center">
          <div className="mx-2 h-12 w-12">
            <img src={company_logo}></img>
          </div>
          <div className="text-white text-3xl font-normal font-sans">
            <Link to="/">Kahaan Industries</Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className={`text-white hover:underline ${isOurStory ? "underline" : ""} text-2xl font-normal font-abel hidden md:block`}>
            <Link to="/our-story">Our Story</Link>
          </div>
          <div className={`text-white hover:underline ${isMachiningShop ? "underline" : ""} text-2xl font-normal font-abel ml-10 hidden md:block`}>
            <Link to="/machining-shop">Machining Shop</Link>
          </div>
          <div className={`text-white hover:underline ${isServices ? "underline" : ""} text-2xl font-normal font-abel ml-10 hidden md:block`}>
            <Link to="/services">Services</Link>
          </div>
          <div className={`text-white hover:underline ${isContactUs ? "underline" : ""} text-2xl font-normal font-abel ml-10 mr-4`}>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="mt-24"></div>
    </div>
  );
};
