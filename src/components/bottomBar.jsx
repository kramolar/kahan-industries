import indiaFlag from "../assets/indiaFlag.png";
import canadaFlag from "../assets/canadaFlag.png";

export const BottomBar = () => {
  return (
    <div className="fixed bottom-2 items-center content-center bg-limeGreen flex justify-center py-1 animate-bounce w-full  md:hidden">
      <div className="flex flex-cols content-center items-center">
        <img src={indiaFlag} className="h-6 w-6" />
        <a href="tel:+919924248899" className="py-1">
          +91 99242 48899
        </a>
      </div>
      <div className="px-1"></div>
      <div className="flex flex-cols content-center items-center">
        <img src={canadaFlag} className="h-6 w-6" />
        <a href="tel:+12262249745" className="py-1">
          +1 226 224 9745
        </a>
      </div>
    </div>
  );
};
