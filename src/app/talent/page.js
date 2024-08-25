"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NavBar from "@/components/NavBar";
import TalentCard from "@/components/TalentCard";

const talent = [
  {
    name: "YayJayBae",
    description: "Bat Dragon Vtuber",
    image: "/talent/yayjaybae.png",
    href: "https://yayjaybae.com",
    socials: [
      {
        href: "https://www.twitch.tv/yayjaybae",
        icon: "https://cdn.simpleicons.org/twitch",
        title: "Twitch",
      },
      {
        href: "https://www.youtube.com/@yayjaybae",
        icon: "https://cdn.simpleicons.org/youtube",
        title: "YouTube",
      },
      {
        href: "https://twitter.com/yayjaybae",
        icon: "https://cdn.simpleicons.org/x/fff",
        title: "X/Twitter",
      },
      {
        href: "https://www.tiktok.com/@yayjaybae",
        icon: "https://cdn.simpleicons.org/tiktok/fff",
        title: "TikTok",
      },
      {
        href: "https://discord.gg/emrjUtKbUR",
        icon: "https://cdn.simpleicons.org/discord",
        title: "Discord",
      },
    ],
  },
  {
    name: "JustAWoney",
    description: "Existential Horror Vtuber",
    image: "/talent/justawoney.png",
    href: "https://linktr.ee/justawoney",
    socials: [
      {
        href: "https://www.twitch.tv/justawoney",
        icon: "https://cdn.simpleicons.org/twitch",
        title: "Twitch",
      },
      {
        href: "https://twitter.com/justawoney",
        icon: "https://cdn.simpleicons.org/x/fff",
        title: "X/Twitter",
      },
      {
        href: "https://www.youtube.com/@JustAWoney",
        icon: "https://cdn.simpleicons.org/youtube",
        title: "YouTube",
      },
      {
        href: "https://www.tiktok.com/@justawoney",
        icon: "https://cdn.simpleicons.org/tiktok/fff",
        title: "TikTok",
      },
      {
        href: "https://discord.gg/t8GQsat32Y",
        icon: "https://cdn.simpleicons.org/discord",
        title: "Discord",
      },
    ],
  },
  {
    name: "TygiWygi",
    description: "Floofy Tiger Monstergirl",
    image: "/talent/tygiwygi.jpg",
    href: "https://tygismaragd.carrd.co",
    socials: [
      {
        href: "https://www.youtube.com/@TygiWygi",
        icon: "https://cdn.simpleicons.org/youtube",
        title: "YouTube",
      },
      {
        href: "https://twitter.com/TygiWygi",
        icon: "https://cdn.simpleicons.org/x/fff",
        title: "X/Twitter",
      },
      {
        href: "https://www.twitch.tv/tygiwygi",
        icon: "https://cdn.simpleicons.org/twitch",
        title: "Twitch",
      },
      {
        href: "https://discord.gg/eh8WGUt5uy",
        icon: "https://cdn.simpleicons.org/discord",
        title: "Discord",
      },
    ],
  },
];

function PreviewTalentCards() {
  const searchParams = useSearchParams();

  return (
    <>
      {searchParams.has("preview") &&
        Array.from({
          length: searchParams.get("preview") || 6 - talent.length,
        }).map((_, index) => (
          <TalentCard
            key={index}
            name="Talent Name"
            description="Talent Description"
            image="/placeholder_500x500.png"
            socials={[
              {
                href: "https://example.com",
                icon: "https://cdn.simpleicons.org/x/fff",
                title: "X/Example",
              },
            ]}
          />
        ))}
    </>
  );
}

export default () => {
  return (
    <>
      <NavBar />
      <main className="space-y-8 text-justify p-8">
        <div className="space-y-4 max-w-prose mx-auto">
          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 text-center">
            Talent
          </h1>
          <p>
            Area96 Digital is nothing without our amazing roster of talented
            content creators. We are proud to work with some of the best
            artists, influencers, and creators in the industry.
          </p>
          <p>
            We are always looking for new talent to join our team. If you are
            passionate about open-source management services and want to help us
            shape the future of digital presence, we would love to hear from
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {talent.map((talent) => (
            <TalentCard {...talent} />
          ))}
          <Suspense>
            <PreviewTalentCards />
          </Suspense>
        </div>
      </main>
    </>
  );
};
