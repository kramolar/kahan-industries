import { SideImageComponent } from "../components/SideImageComponent";
import services from "../assets/services.jpg";

export const Services = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 mx-12">
        <SideImageComponent imgSrc={services} />
      </div>

      <div className="flex-1">
        <div className="text-4xl text-stone-700 mt-20 ml-12 font-normal">
          Services
        </div>
        <div className="text-6xl text-stone-700 ml-12 font-normal">
          Coming Soon...
        </div>
      </div>
    </div>
  );
};
