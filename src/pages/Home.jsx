import tick from "../assets/tickmark.gif";
import { ImageComponent } from "../components/ImageComponent";
import portPicture from '../assets/port.jpg'
export const Home = () => {
  return (
    <div>
      <ImageComponent imgSrc={portPicture}/>
      <div className="text-4xl text-stone-700 mt-12 ml-12 font-normal">
        Investment Casting Supplier of Various Products
      </div>
      <div className="ml-12 mt-5 text-lg">
        Kahaan Industries is a renowned manufacturer and supplier of world-class
        investment castings for a wide range of products. With extensive
        experience, we specialize in crafting high-quality castings for various
        industries globally. Utilizing advanced tools and techniques, we ensure
        the production of premium investment castings for diverse applications.
        At Kahaan Industries, we excel in employing the lost wax process for
        investment casting, ensuring superior quality outcomes. Our dedicated
        team designs and manufactures products for a broad clientele worldwide,
        catering to diverse requirements.
      </div>
      <div className="ml-12 mt-5 text-lg">
        Our extensive range of high-quality investment castings covers a diverse
        array of products, including but not limited to ball valves, butterfly
        valves, gate valves, globe valves, check valves, safety relief valves,
        pressure relief valves, diaphragm valves, knife gate valves, plug
        valves, control valves, solenoid valves, gears, gears, gear housings,
        shafts, brackets, fittings, connectors, and connectors, among others.
      </div>
      <div className="text-4xl text-stone-700 mt-12 ml-12 font-normal">
        Reason to Choose Us
      </div>
      <div className="ml-12 mt-5">
        <div className="flex items-center mb-3">
          <img src={tick} alt="tickmark" />
          <div className="ml-2 text-xl">
            We offer all the 4 major casting processes under 1 roof i.e. Sand
            Castings, Centrifugal Castings, Shell Moulded Castings and Precision
            Investment Castings.
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={tick} alt="tickmark" />
          <div className="ml-2 text-xl">
            We use only high-quality and tested material to make castings for
            valves.
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={tick} alt="tickmark" />
          <div className="ml-2 text-xl">
            Kahaan Industries manufactures a variable range of products with
            varied weight material and pricing.
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={tick} alt="tickmark" />
          <div className="ml-2 text-xl">
            We also offer castings in fully finished condition as ready to fit
            parts. This saves you time, efforts and ultimately money.
          </div>
        </div>
      </div>
    </div>
  );
};
