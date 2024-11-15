import { SideImageComponent } from "../components/SideImageComponent";
import comingSoon from "../assets/comingSoon.jpg";
import { ET100ReFilledWax } from "../components/ET100Re-FilledWax";

export const RecycledWax = () => {
  return (
    <div className="container mx-auto px-8 sm:px-12 md:px-16">
      <div className="grid grid-rows">
        <div className="flex flex-col pt-12 md:flex-row">
          <div className="flex-1 mx-8 sm:mx-12">
            <SideImageComponent imgSrc={comingSoon} />
          </div>

          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-950 mx-8 sm:mx-12 font-semibold mb-4">
              ET 100 - Recycled FILLED PATTERN WAX
            </h2>
            <ul className="text-sm sm:text-base lg:text-lg text-cyan-950 space-y-2 list-disc pl-6 mx-8 sm:mx-12">
              <li>The wax is a medium viscosity wax.</li>
              <li>Quick setting wax with minimal cavitations / sink age.</li>
              <li>Dimensionally very stable.</li>
              <li>Wide injection range, from paste to liquid.</li>
              <li>Capable of producing very little release agent for removal from dies.</li>
              <li>Returns to shape if distortion occurs on removal from the die. Resists cracking.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ET100ReFilledWax />
      </div>
    </div>
  );
};
