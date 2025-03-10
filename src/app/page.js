import Link from "next/link";

export default () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto">
        <div className="flex flex-col space-y-4 bg-green-400 p-4">
          <h1 className="text-4xl font-bold">
            Area96, where creatives thrive.
          </h1>

          <p className="text-lg">
            Ditch the digital chaos and unleash your creative power! We're your
            open-source, all-in-one management powerhouse, designed for the
            modern creator. Whether you're publishing groundbreaking art or
            building a booming influencer empire, we provide the seamless tools
            and services you need to conquer your online world, so you can focus
            on your passion, not the paperwork.
          </p>

          <div className="flex justify-between items-center">
            <div className="flex flex-row gap-4">
              {[
                {
                  href: "https://x.com/area96digital",
                  icon: "https://cdn.simpleicons.org/x/black",
                  title: "X/Twitter",
                },
                {
                  href: "https://bsky.app/profile/a96.zue.dev",
                  icon: "https://cdn.simpleicons.org/bluesky/black",
                  title: "Bluesky",
                },
              ].map((social) => (
                <Link
                  href={social.href}
                  key={social.title}
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src={`${social.icon}`}
                    className="h-[2rem] w-[2rem] object-contain"
                    alt={social.title}
                    title={social.title}
                  />
                </Link>
              ))}
            </div>

            <span className="text-xs opacity-50 text-right">
              "Area96" is made with ♥ by{" "}
              <a href="https://zue.dev" target="_blank" className="underline">
                zue.dev
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
