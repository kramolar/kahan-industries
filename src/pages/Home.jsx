import tick from "../assets/tickmark.gif";
import castingVideo from "../assets/castingVideo.mp4";
import { VideoComponent } from "../components/VideoComponent";
import { TextOverlay } from "../components/TextOverlay";
import { SideImageComponent } from "../components/SideImageComponent";
import bhavnagar_vertical from "../assets/bhavnagar_vertical.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div className="relative w-full" style={{ height: "90vh" }}>
        {/* Video Component */}
        <VideoComponent videoSrc={castingVideo} />

        {/* Overlayed Text Component */}
        <div className="absolute inset-0 flex mt-24 justify-center">
          <TextOverlay />
        </div>
      </div>

      <div className="text-xl sm:text-2xl md:text-4xl text-cyan-950 mt-12 ml-12 mr-4 sm:mr-4 md:mr-8 lg:mr-12 font-normal">
        Investment Casting Supplier of Various Products
      </div>
      <div className="ml-12 mt-5 text-sm sm:text-md md:text-lg mr-4 sm:mr-4 md:mr-8 lg:mr-12">
        Kahan Industries is a renowned manufacturer and supplier of world-class
        investment castings for a wide range of products. With extensive
        experience, we specialize in crafting high-quality castings for various
        industries globally. Utilizing advanced tools and techniques, we ensure
        the production of premium investment castings for diverse applications.
        At Kahan Industries, we excel in employing the lost wax process for
        investment casting, ensuring superior quality outcomes. Our dedicated
        team designs and manufactures products for a broad clientele worldwide,
        catering to diverse requirements.
      </div>
      <div className="ml-12 mt-5 text-sm sm:text-md md:text-lg mr-4 sm:mr-4 md:mr-8 lg:mr-12">
        Our extensive range of high-quality investment castings covers a diverse
        array of products, including but not limited to ball valves, butterfly
        valves, gate valves, globe valves, check valves, safety relief valves,
        pressure relief valves, diaphragm valves, knife gate valves, plug
        valves, control valves, solenoid valves, gears, gears, gear housings,
        shafts, brackets, fittings, connectors, and connectors, among others.
      </div>
      <div className="text-xl sm:text-2xl md:text-4xl text-cyan-950 mt-12 ml-12 font-normal">
        Reason to Choose Us
      </div>
      <div className="ml-12 mt-5 mr-4 sm:mr-4 md:mr-8 lg:mr-12 ">
        <div className="flex items-top mb-3">
          <img src={tick} alt="tickmark" className="tick-mark"/>
          <div className="ml-2 text-sm sm:text-md md:text-lg">
            We offer all the 4 major casting processes under 1 roof i.e. Sand
            Castings, Centrifugal Castings, Shell Moulded Castings and Precision
            Investment Castings.
          </div>
        </div>
        <div className="flex items-top mb-3">
          <img src={tick} alt="tickmark" className="tick-mark"/>
          <div className="ml-2 text-sm sm:text-md md:text-lg">
            We use only high-quality and tested material to make castings for
            valves.
          </div>
        </div>
        <div className="flex items-top mb-3">
          <img src={tick} alt="tickmark" className="tick-mark"/>
          <div className="ml-2 text-sm sm:text-md md:text-lg">
            Kahan Industries manufactures a variable range of products with
            varied weight material and pricing.
          </div>
        </div>
        <div className="flex items-top mb-3">
          <img src={tick} alt="tickmark" className="tick-mark"/>
          <div className="ml-2 text-sm sm:text-md md:text-lg">
            We also offer castings in fully finished condition as ready to fit
            parts. This saves you time, efforts and ultimately money.
          </div>
        </div>
      </div>
      <div className="mt-8"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="text-xl sm:text-2xl md:text-4xl text-cyan-950 ml-12 font-normal">
            Company Brief
          </div>
          <div className="ml-12 mt-4 md:mt-12 text-sm sm:text-md md:text-lg mr-4 sm:mr-4 md:mr-8 lg:mr-12">
            Kahan Industries, headquartered in Bhavnagar, Gujarat, India is a
            visionary manufacturer and exporter renowned for its exceptional
            investment castings crafted through the lost wax process.
            Specializing in Stainless Steel, Alloy Steel, Carbon Steel, Super
            Alloys, and Duplex Steel, we serve as a trusted development partner,
            producing precision castings of the highest caliber. Our commitment
            extends to design, manufacturing, exporting, and contract
            manufacturing services, catering to a global clientele.
          </div>
          <div className="ml-12 mt-4 md:mt-12 text-sm sm:text-md md:text-lg mr-4 sm:mr-4 md:mr-8 lg:mr-12">
            At Kahan Industries, we pride ourselves on our unwavering
            dedication to staying abreast of the latest technological
            advancements in investment casting. Our team's relentless pursuit of
            excellence has fostered enduring partnerships with our valued
            customers, founded on principles of quality, competitive pricing,
            and reliability. With a rich legacy dating back to our establishment
            in 1983, Kahan Industries remains at the forefront of the
            investment casting industry. Our continuous evolution ensures we
            meet the needs of both current and future demands, guiding us
            towards a brighter tomorrow. Situated in Rajkot, our strategic
            location offers convenient access via road, rail, and air
            transportation networks.
          </div>
        </div>

        <div className="flex-1 mx-16 mt-4 md:mt-0">
          <SideImageComponent imgSrc={bhavnagar_vertical} />
        </div>
      </div>
      <div className="py-8 mt-8 bg-cyan-950 text-white font-abel grid grid-cols-3 justify-items-center px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="">
          <div className="">
            <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">About Us</div>
            <div className="mt-2 text-md sm:text-xl md:text-xl lg:text-xl">
              Kahan Industries, based in Bhavnagar, Gujarat, India, specializes
              in high-quality investment castings using the lost wax process.
              Since 1983, we’ve delivered precision castings in Stainless Steel,
              Alloy Steel, and more, serving a global clientele with a
              commitment to quality, innovation, and reliability.
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">Links</div>
            <div className="mt-2 hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/filled-wax"}>Filled Wax</Link>
            </div>
            <div className="hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/unfilled-wax"}>Un-Filled Wax</Link>
            </div>
            <div className="hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/recycled-wax"}>Recycled Wax</Link>
            </div>
            <div className="hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/sticky-wax"}>Sticky Wax</Link>
            </div>
            <div className="hover:underline my-1 text-md sm:text-xl md:text-xl lg:text-xl">
              <Link to={"/contact-us"}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">Contact Info</div>
            <div className="text-md sm:text-xl md:text-xl lg:text-xl">
              <div className="mt-2">
                <div className="font-medium">Address:</div>
                <div className="text-md sm:text-xl md:text-xl lg:text-xl">Bhavnagar, Gujarat, India</div>
              </div>
              <div className="mt-2">
                <div className="font-medium">Phone:</div>
                <div className="text-md sm:text-xl md:text-xl lg:text-xl">India: +91 99242 48899</div>
                <div className="text-md sm:text-xl md:text-xl lg:text-xl">Canada: +1 226 224 9745</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12"></div>
    </div>
  );
};
