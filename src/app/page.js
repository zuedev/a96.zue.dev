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
      <section className="container mx-auto py-32">
        <h1 className="max-w-3xl mx-auto font-bold text-6xl text-center">
          {heroText}
        </h1>
      </section>
    </>
  );
};
