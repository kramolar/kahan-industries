import { SideImageComponent } from "../components/SideImageComponent";
import services from "../assets/services1.jpg";

export const Services = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mx-12">
          <SideImageComponent imgSrc={services} />
        </div>

        <div className="flex-1">
          <div className="text-2xl text-cyan-950 mt-20 mx-12 font-semibold">
            FILLED PATTERN WAX
          </div>
          <div className="text-xl text-cyan-950 pt-4 mx-12 font-normal">
            Kahaan Industries provides various grades of filled pattern waxes,
            each optimized for different applications. Our waxes use multiple
            fillers like Purified Terephthalic Acid (PTA) and cross-linked
            polystyrene (XLPS) and are designed to function in both liquid and
            paste forms. These filled pattern waxes are versatile and ideal for
            almost any application, especially for producing large, complex, and
            ceramic-cored castings. They are perfect for mass production due to
            their consistent performance and reliability.
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="text-2xl text-cyan-950 mt-20 mx-12 font-semibold">
            NON-FILLED PATTERN WAX
          </div>
          <div className="text-xl text-cyan-950 pt-4 mx-12 font-normal">
            Kahaan Industries provides an extensive selection of non-filled
            pattern waxes tailored for a variety of applications. Our latest
            innovations in non-filled pattern waxes have been meticulously
            developed and manufactured to closely mimic the performance
            characteristics of filled waxes. These advanced waxes offer
            exceptional reliability and versatility, making them suitable for a
            broad range of uses. Whether you need precision and consistency for
            intricate patterns or robust performance for larger applications,
            our non-filled pattern waxes deliver outstanding results comparable
            to their filled counterparts.
          </div>
        </div>
        <div className="flex-1 mx-12">
          <SideImageComponent imgSrc={services} />
        </div>
      </div>
    </div>
  );
};
