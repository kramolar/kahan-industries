export const SideImageComponent = ({ imgSrc }) => {
  return (
    <div className="mt-12 mb-12">
      <div className="h-full flex items-center pt-12">
        <img
          src={imgSrc}
          alt="port picture"
          className="w-full h-full object-cover object-bottom mx-auto"
        />
      </div>
    </div>
  );
};
