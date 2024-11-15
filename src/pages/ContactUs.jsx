import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import { InquiryForm } from "../components/InquiryForm";
import { SmallImage } from "../components/SmallImage";
import { ImageComponent } from "../components/ImageComponent";
import waxPouring from "../assets/waxPouring.jpg";

export const ContactUs = () => {
  return (
    <div className="container mx-auto pt-8 px-6 md:pt-16 sm:px-8 md:px-12 lg:px-16">
      {/* Image Section */}
      <div className="relative mb-8">
        <ImageComponent imgSrc={waxPouring} />
      </div>
      
      {/* Inquiry Form Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
};
