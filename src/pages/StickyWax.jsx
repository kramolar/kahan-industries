import { SideImageComponent } from "../components/SideImageComponent";
import brownWax from "../assets/brownWax.jpg";
import { ET250UnFilledWax } from "../components/ET250Un-FilledWax";
import { StickyWaxTable } from "../components/StickyWaxTable";
import { BottomBar } from "../components/bottomBar";

export const StickyWax = () => {
  return (
    <div>
      <div className="container mx-auto px-8 sm:px-12 md:px-16">
        <div className="grid grid-rows">
          <div className="flex flex-col pt-12 md:flex-row">
            <div className="flex-1 mx-8 sm:mx-12">
              <SideImageComponent imgSrc={brownWax} />
            </div>

            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-950 mx-8 sm:mx-12 font-semibold mb-4">
                Sticky Wax
              </h2>
              <ul className="text-sm sm:text-base lg:text-lg text-cyan-950 space-y-2 list-disc pl-6 mx-8 sm:mx-12">
                <li>Superior bonding strength.</li>
                <li>
                  Ideal for filling fine lines and scars in wax models and for
                  efficient treeing of wax models.
                </li>
                <li>Ideal for short-run or production use.</li>
                <li>Can be designed for specialist requirements.</li>
                <li>
                  Optimal temperature for best adhesion of your wax patterns is
                  93°C - 107°C
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <StickyWaxTable />
        </div>
      </div>
      <div>
        <BottomBar />
      </div>
    </div>
  );
};
