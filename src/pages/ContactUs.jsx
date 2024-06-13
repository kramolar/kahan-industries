import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";
import { InquiryForm } from "../components/InquiryForm";
import { SmallImage } from "../components/SmallImage";

export const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-between pt-24 ml-8 mr-8">
        <SmallImage srcImg={pic1} />
        <SmallImage srcImg={pic2} />
        <SmallImage srcImg={pic3} />
        <SmallImage srcImg={pic4} />
      </div>
      <div>
        <InquiryForm />
      </div>
    </div>
  );
};
