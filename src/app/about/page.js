import NavBar from "@/components/NavBar";

export default () => {
  return (
    <>
      <NavBar />
      <main className="space-y-8 text-justify p-8">
        <div className="space-y-4 max-w-prose mx-auto">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            About
          </h1>
          <p className="text-lg">
            Area96 Digital is a digital marketing and full-service talent
            management agency that specializes in helping creators and
            influencers grow their online presence. We're a team of passionate
            management specialists who are dedicated to empowering creators to
            reach their full potential without sacrificing their creative
            freedom. We provide the tools, resources, and support needed to help
            creators elevate their brand and connect with their audience on a
            deeper level. From social media management to brand partnerships, we
            offer a wide range of services to help creators succeed in the
            digital space.
          </p>
        </div>

        <div className="space-y-4 max-w-prose mx-auto">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
            Our business is your success.
          </h2>
          <p className="text-lg">
            We don't charge our clients upfront fees or an hourly rate. Instead,
            we take a percentage of the revenue generated above a certain
            threshold. This means that we only make money when our clients make
            money, so we are highly motivated to help them succeed. Our success
            is directly tied to the success of our clients, so we are committed
            to providing the best possible service and support to help them
            achieve their goals.
          </p>
        </div>

        <div className="space-y-4 max-w-prose mx-auto">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Creativity and freedom above all.
          </h2>
          <p className="text-lg">
            Traditional talent management agencies often prioritize profit over
            the well-being of their clients. At Area96 Digital, we believe that
            creators should have the freedom to express themselves authentically
            without being constrained by corporate interests. Our grassroots
            approach to talent management focuses on nurturing creativity and
            fostering a supportive environment where creators can thrive. We
            work closely with our clients to develop personalized strategies
            that align with their values and goals, ensuring that they have the
            tools and resources they need to succeed.
          </p>
        </div>

        <div className="space-y-4 max-w-prose mx-auto">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
            Open-source... Everything!
          </h2>
          <p className="text-lg">
            Not only is all of our software open-source, but we also believe in
            the power of transparency and collaboration. We are committed to
            sharing our knowledge and resources with the community to help
            others succeed. This approach allows us to build stronger
            relationships with our clients and partners and fosters a sense of
            trust and accountability. We believe that by working together, we
            can achieve great things and make a positive impact on the world.
          </p>
        </div>
      </main>
    </>
  );
};
