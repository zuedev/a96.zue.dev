export default () => {
  const heroTextArray = [
    "Creativity is your superpower; give it the voice it deserves.",
    "Create with courage, and the world will follow.",
    "Greatness is possible with authenticity and innovation.",
  ];

  const heroText =
    heroTextArray[Math.floor(Math.random() * heroTextArray.length)];

  return (
    <>
      <section
        className="h-screen flex items-center justify-center"
        style={{
          position: "relative",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/4124198-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <p className="container mx-auto px-4 text-8xl font-bold a96-bg-gradient-text">
          {heroText}
        </p>
      </section>
    </>
  );
};
