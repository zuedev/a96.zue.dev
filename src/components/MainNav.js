"use client";

import { usePathname } from "next/navigation";

export default () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Talent",
      url: "/talent",
    },
  ];

  const socials = [
    {
      href: "https://discord.gg/5HGZA59Csx",
      icon: "https://cdn.simpleicons.org/discord",
      title: "Discord",
    },
    // {
    //   href: "https://x.com/area96digital",
    //   icon: "https://cdn.simpleicons.org/x/fff",
    //   title: "X/Twitter",
    // },
    // {
    //   href: "https://bsky.app/profile/area96.digital",
    //   icon: "https://cdn.simpleicons.org/bluesky",
    //   title: "Bluesky",
    // },
    // {
    //   href: "https://github.com/area96-digital",
    //   icon: "https://cdn.simpleicons.org/github/fff",
    //   title: "GitHub",
    // },
  ];

  const pathname = usePathname();

  for (const link of links) {
    link.active = link.url === pathname;

    link.className = ["hover:underline", "hover:decoration-dotted"];

    if (link.active) link.className.push("underline");

    link.className = link.className.join(" ");
  }

  return (
    <div>
      <nav className="container mx-auto p-4 flex items-center justify-between font-bold">
        <a href="/">
          <img
            src="/logo_tight.png"
            alt="Area96 Digital logo"
            className="h-8"
          />
        </a>
        <div className="flex flex-row items-center space-x-4">
          {links.map((link) => (
            <a key={link.title} href={link.url} className={link.className}>
              {link.title}
            </a>
          ))}
          {socials.map((social) => (
            <a key={social.title} href={social.href} target="_blank">
              <img
                src={social.icon}
                alt={social.title}
                className="h-6 hover:opacity-75"
              />
            </a>
          ))}
        </div>
      </nav>

      {/* fancy gradient line */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-1"></div>
    </div>
  );
};
