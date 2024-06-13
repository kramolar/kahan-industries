
export const ImageComponent = ({imgSrc}) => {
  return (
    <div className="w-full">
      <img
        src={imgSrc}
        alt="port picture"
        className="w-full"
        style={{ height: "60vh", objectFit: "cover", objectPosition: "bottom" }}
      />
    </div>
  );
};
