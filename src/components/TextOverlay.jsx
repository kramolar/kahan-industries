import { TextAnimation } from "../action/TextAnimation";
import { Link } from "react-router-dom";

export const TextOverlay = () => (
  <div>
    <div className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl text-right font-medium px-4 sm:px-8 md:px-16 lg:px-24">
      PREMIUM INVESTMENT CASTINGS : CRAFTED WITH PRECISION
    </div>
    <TextAnimation animationDelay={0.3} />
    <div className="pt-8 sm:pt-12 md:pt-8" />
    <div className="flex justify-end mr-4 sm:mr-8 md:mr-16 lg:mr-24">
      <Link
        to="/contact-us"
        className="hover:border-2 text-white hover:border-white text-2xl font-semibold rounded-lg p-4 border border-transparent transition duration-200"
      >
        Contact Us
      </Link>
    </div>
  </div>
);
