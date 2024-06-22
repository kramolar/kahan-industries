import machining from "../assets/machining.jpg";
import { ImageComponent } from "../components/ImageComponent";

export const MachiningShop = () => {
  return (
    <div>
      <ImageComponent imgSrc={machining} />
      <div className="flex-1">
        <div className="text-4xl text-cyan-950 mt-12 ml-12 font-normal">
          Machining
        </div>
        <div className="text-6xl text-cyan-950 ml-12 font-normal">
          Coming Soon...
        </div>
      </div>
      <div className="mt-24"></div>
    </div>
  );
};
