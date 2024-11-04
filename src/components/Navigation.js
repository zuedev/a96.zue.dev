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
    //   icon: "https://cdn.simpleicons.org/x",
    //   title: "X/Twitter",
    // },
    {
      href: "https://bsky.app/profile/area96.digital",
      icon: "https://cdn.simpleicons.org/bluesky",
      title: "Bluesky",
    },
    // {
    //   href: "https://github.com/area96-digital",
    //   icon: "https://cdn.simpleicons.org/github",
    //   title: "GitHub",
    // },
    {
      href: "https://gitlab.sovereign.zue.dev/area96-digital",
      icon: "https://cdn.simpleicons.org/gitlab",
      title: "GitLab",
    },
  ];

  const pathname = usePathname();

  for (const link of links) {
    link.active = link.url === pathname;

    link.className = ["hover:underline", "hover:decoration-dotted"];

    if (link.active)
      link.className = [...link.className, "underline", "decoration-wavy"];

    link.className = link.className.join(" ");
  }

  return (
    <>
      <nav className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between font-bold text-xl space-y-2 md:space-y-0">
        <a href="/" className="text-4xl">
          Area96 Digital
        </a>
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex flex-row space-x-4">
            {links.map((link) => (
              <a key={link.title} href={link.url} className={link.className}>
                {link.title}
              </a>
            ))}
          </div>
          <div className="flex flex-row space-x-4">
            {socials.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                title={social.title}
              >
                <img
                  src={social.icon}
                  alt={social.title}
                  className="h-6 hover:opacity-75"
                />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
