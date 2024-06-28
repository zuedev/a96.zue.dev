export default function Socials(props) {
  const socials = props.socials || [
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
      title: "Bluesky",
    },
    {
      href: "https://github.com/area96-digital",
      icon: "https://cdn.simpleicons.org/github/fff",
      title: "GitHub",
    },
  ];

  return (
    <ul className="flex flex-row space-x-4">
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href}>
            <img src={`${social.icon}`} className="h-8" title={social.title} />
          </a>
        </li>
      ))}
    </ul>
  );
}
