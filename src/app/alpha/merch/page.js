import NavBar from "@/components/NavBar";

export default () => {
  const data = [
    {
      talent: "YayJayBae",
      products: [
        {
          name: "Unisex V-Neck Tee",
          price: "£13.50",
          image:
            "https://stripe-camo.global.ssl.fastly.net/242bd1c8dec2238403b2329672363a062c8c14b92a8d9e9e55a20b68b091d791/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878555642455a6d3543576d647165584654646d647a66475a735833526c633352665633565357446c50516e5a57564642324f464248596a6c4a5231644856585a5330304571354364643171",
          link: "https://buy.stripe.com/test_6oEaFA340fm68qQ3cd",
        },
        {
          name: "Unisex Fleece Sweatpants",
          price: "£22.50",
          image:
            "https://d1wqzb5bdbcre6.cloudfront.net/c749903ad257b542aeca64a99d72827ad84b58a6c788281f00c7a15d334a53fb/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878555642455a6d3543576d647165584654646d647a66475a735833526c63335266626d526861554d3457576f794d465676516c644a4d6d4e515a55786f4d30743130304334594f30656967",
          link: "https://buy.stripe.com/test_7sI3d8gUQfm6bD2146",
        },
      ],
    },
    {
      talent: "TygiWygi",
      products: [
        {
          name: "Unisex V-Neck Tee",
          price: "£13.50",
          image:
            "https://stripe-camo.global.ssl.fastly.net/242bd1c8dec2238403b2329672363a062c8c14b92a8d9e9e55a20b68b091d791/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878555642455a6d3543576d647165584654646d647a66475a735833526c633352665633565357446c50516e5a57564642324f464248596a6c4a5231644856585a5330304571354364643171",
          link: "https://buy.stripe.com/test_6oEaFA340fm68qQ3cd",
        },
        {
          name: "Unisex Fleece Sweatpants",
          price: "£22.50",
          image:
            "https://d1wqzb5bdbcre6.cloudfront.net/c749903ad257b542aeca64a99d72827ad84b58a6c788281f00c7a15d334a53fb/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878555642455a6d3543576d647165584654646d647a66475a735833526c63335266626d526861554d3457576f794d465676516c644a4d6d4e515a55786f4d30743130304334594f30656967",
          link: "https://buy.stripe.com/test_7sI3d8gUQfm6bD2146",
        },
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <main className="space-y-8 text-justify p-8">
        {data.map((talent) => (
          <div key={talent.talent} className="space-y-8">
            <h1 className="text-4xl font-bold">{talent.talent}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {talent.products.map((product) => (
                <a
                  key={product.name}
                  href={product.link}
                  className="relative hover:scale-105 transition-transform duration-300"
                  target="_blank"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover z-0"
                  />
                  <div className="bg-black bg-opacity-75 text-white p-4 absolute bottom-0 w-full z-10 space-y-2">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p>{product.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
