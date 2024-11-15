export const SideImageComponent = ({ imgSrc }) => {
  return (
    <div className="">
      <div className="h-full flex items-center">
        <img
          src={imgSrc}
          alt="port picture"
          className="w-full object-cover object-bottom mx-auto"
          style={{ height: "50vh",  objectFit: "cover", objectPosition: "bottom" }}
        />
      </div>
    </div>
  );
};
