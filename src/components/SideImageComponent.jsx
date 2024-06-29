export const SideImageComponent = ({ imgSrc }) => {
  return (
    <div className="mb-12">
      <div className="h-full flex items-center pt-12">
        <img
          src={imgSrc}
          alt="port picture"
          className="w-full h-full object-cover object-bottom mx-auto"
          style={{ height: "60vh", objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>
    </div>
  );
};
