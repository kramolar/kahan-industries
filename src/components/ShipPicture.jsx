import shipPicture from "../assets/ship.jpg";

export const ShipPictute = () => {
  return (
    <div className="w-full">
      <img
        src={shipPicture}
        alt="port picture"
        className="w-full"
        style={{ height: "60vh", objectFit: "cover", objectPosition: "bottom" }}
      />
    </div>
  );
};
