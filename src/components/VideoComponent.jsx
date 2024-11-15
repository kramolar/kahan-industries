export const VideoComponent = ({ videoSrc }) => {
  return (
    <div className="w-full" style={{ height: "90vh" }}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
