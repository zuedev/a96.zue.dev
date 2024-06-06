export default function VideoBackground(props) {
  let { src, type } = props;

  if (!src) throw new Error("VideoBackground: src prop is required");
  if (!type) throw new Error("VideoBackground: type prop is required");

  return (
    <video
      playsInline
      autoPlay
      muted
      loop
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <source src={src} type={type} />
    </video>
  );
}
