
export const ImageComponent = ({ imgSrc }) => {
  return (
    <div className="w-full">
      <img
        src={imgSrc}
        alt="port picture"
        className="w-full h-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover object-center"
      />
    </div>
  );
};

