import { SideImageComponent } from "../components/SideImageComponent";

import greenWax from "../assets/greenWax.jpg";
import redWax from "../assets/redWax.jpg";
import blueWax from "../assets/blueWax.jpg";
import { ET120FilledWax } from "../components/ET120FilledWax";
import { ET125FilledWax } from "../components/ET125FilledWax";
import { ET130FilledWax } from "../components/ET130FilledWax";
import { BottomBar } from "../components/bottomBar";

export const FilledWax = () => {
  return (
    <div className="">
      <div className="mt-28 container mx-auto px-8 sm:px-12 md:px-16">
        {/* Section for ET 120 */}
        <div className="grid grid-cols-1 pt-8 md:grid-cols-2 gap-8 mb-16">
          <div className="flex-1 mx-8 sm:mx-12">
            <SideImageComponent imgSrc={greenWax} />
          </div>
          <div>
            <h2 className="mx-8 text-xl sm:text-2xl lg:text-3xl text-cyan-950 font-semibold mb-4">
              ET 120 - FILLED PATTERN WAX
            </h2>
            <ul className="mx-8 text-sm sm:text-base lg:text-lg text-cyan-950 space-y-2 list-disc pl-6">
              <li>The wax is a medium viscosity wax.</li>
              <li>Quick setting wax with minimal cavitations / sink age.</li>
              <li>Dimensionally very stable.</li>
              <li>Wide injection range, from paste to liquid.</li>
              <li>
                Capable of producing very little release agent for removal from
                dies.
              </li>
              <li>
                Returns to shape if distortion occurs on removal from the die.
                Resists cracking.
              </li>
            </ul>
          </div>
        </div>
        <ET120FilledWax />

        {/* Section for ET 125 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
          <div className="flex-1 mx-8  sm:mx-12">
            <SideImageComponent imgSrc={redWax} />
          </div>
          <div>
            <h2 className="mx-8 text-xl sm:text-2xl lg:text-3xl text-cyan-950 font-semibold mb-4">
              ET 125 - FILLED PATTERN WAX
            </h2>
            <ul className="mx-8 text-sm sm:text-base lg:text-lg text-cyan-950 space-y-2 list-disc pl-6">
              <li>
                A pattern wax specifically for the production of fine precision
                type castings.
              </li>
              <li>A medium viscosity, filled, pattern wax.</li>
              <li>Quick setting wax with minimal cavitations/sink age.</li>
              <li>
                Can be used as a liquid injection material but performs better
                if injected at or below the recorded congealing point.
              </li>
              <li>
                Capable of producing patterns of all sizes, and thick or thin
                sections.
              </li>
              <li>
                Non-sticky, requiring very little release agent for removal from
                dies.
              </li>
              <li>The wax can be reclaimed from runner systems.</li>
            </ul>
          </div>
        </div>
        <ET125FilledWax />

        {/* Section for ET 130 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
          <div className="flex-1 mx-8  sm:mx-12">
            <SideImageComponent imgSrc={blueWax} />
          </div>
          <div>
            <h2 className="text-xl mx-8 sm:text-2xl lg:text-3xl text-cyan-950 font-semibold mb-4">
              ET 130 - FILLED PATTERN WAX
            </h2>
            <ul className="mx-8 text-sm sm:text-base lg:text-lg text-cyan-950 space-y-2 list-disc pl-6">
              <li>
                A pattern wax specifically for the production of small and big
                precision type castings.
              </li>
              <li>A low viscosity, straight wax compound.</li>
              <li>Good tensile strength.</li>
              <li>
                Suitable for injection or gravity pouring and ideal for
                dewaxing.
              </li>
              <li>The wax can be reclaimed for use on runner systems.</li>
              <li>Recommended maximum melting temperature of 100°C.</li>
            </ul>
          </div>
        </div>
        <ET130FilledWax />
      </div>
      <div>
        <BottomBar />
      </div>
    </div>
  );
};
