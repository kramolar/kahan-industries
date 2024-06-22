import bhavnagar_vertical from "../assets/bhavnagar_vertical.jpg";
import { SideImageComponent } from "../components/SideImageComponent";

export const OurStory = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <div className="text-4xl text-cyan-950 mt-20 ml-12 font-normal">
          Company Brief
        </div>
        <div className="ml-12 mt-12 text-lg">
          Kahaan Industries, headquartered in Bhavnagar, Gujarat, India is a
          visionary manufacturer and exporter renowned for its exceptional
          investment castings crafted through the lost wax process. Specializing
          in Stainless Steel, Alloy Steel, Carbon Steel, Super Alloys, and
          Duplex Steel, we serve as a trusted development partner, producing
          precision castings of the highest caliber. Our commitment extends to
          design, manufacturing, exporting, and contract manufacturing services,
          catering to a global clientele.
        </div>
        <div className="ml-12 mt-12 text-lg">
          At Kahaan Industries, we pride ourselves on our unwavering dedication
          to staying abreast of the latest technological advancements in
          investment casting. Our team's relentless pursuit of excellence has
          fostered enduring partnerships with our valued customers, founded on
          principles of quality, competitive pricing, and reliability. With a
          rich legacy dating back to our establishment in 1983, Kahaan
          Industries remains at the forefront of the investment casting
          industry. Our continuous evolution ensures we meet the needs of both
          current and future demands, guiding us towards a brighter tomorrow.
          Situated in Rajkot, our strategic location offers convenient access
          via road, rail, and air transportation networks.
        </div>
      </div>

      <div className="flex-1 mx-16">
        <SideImageComponent imgSrc={bhavnagar_vertical} />
      </div>
    </div>
  );
};
