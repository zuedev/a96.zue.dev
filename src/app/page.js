import VideoBackground from "@/components/VideoBackground";
import Navigation from "@/components/Navigation";
import Socials from "@/components/Socials";

import "./page.css";

export default function Home() {
  return (
    <>
      <VideoBackground src="4124198-hd_1920_1080_24fps.mp4" type="video/mp4" />
      <div className="flex flex-col p-4 min-h-full">
        <main className="space-y-4 max-w-prose text-justify grow">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
            Area 96 Digital
          </h1>
          <blockquote className="text-xl">
            Open-source management services for the post-modern era. ✨
          </blockquote>
          <p className="text-lg">
            From art publishing to influencer marketing, we provide the tools
            and services to help you manage your digital presence with ease. Our
            aim is to help you focus on what you do best, while we take care of
            the rest.
          </p>
          <hr />
          <div className="flex flex-row justify-between">
            <Navigation
              links={[
                {
                  text: "Blog",
                  href: "https://blog.area96.digital",
                  target: "_blank",
                },
                {
                  text: "Handbook",
                  href: "https://handbook.area96.digital",
                  target: "_blank",
                },
                {
                  text: "Contact",
                  href: "mailto:contact@area96.digital",
                },
              ]}
            />
            <Socials
              socials={[
                {
                  href: "https://discord.gg/5HGZA59Csx",
                  icon: "https://cdn.simpleicons.org/discord",
                  title: "Discord",
                },
                {
                  href: "https://x.com/area96digital",
                  icon: "https://cdn.simpleicons.org/x/fff",
                  title: "X/Twitter",
                },
                {
                  href: "https://bsky.app/profile/area96.digital",
                  icon: "https://cdn.simpleicons.org/bluesky",
                  title: "X/Twitter",
                },
                {
                  href: "https://github.com/area96-digital",
                  icon: "https://cdn.simpleicons.org/github/fff",
                  title: "GitHub",
                },
              ]}
            />
          </div>
        </main>
        <footer className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://zue.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline hover:text-pink-400 font-semibold"
          >
            zuedev
          </a>
        </footer>
      </div>
    </>
  );
}
