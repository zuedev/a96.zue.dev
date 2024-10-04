export default function NavLinks(props) {
  const links = props.links || [
    // {
    //   text: "Home",
    //   href: "/",
    // },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Talent",
      href: "/talent",
    },
    // {
    //   text: "Blog",
    //   href: "https://blog.area96.digital",
    //   target: "_blank",
    // },
    // {
    //   text: "Handbook",
    //   href: "https://handbook.area96.digital",
    //   target: "_blank",
    // },
    {
      text: "Contact",
      href: "https://formbricks.area96.digital/s/cm1u35zbs000c14c0ruflq2ni",
    },
  ];

  return (
    <>
      <ul className="flex space-x-4 text-yellow-500 text-xl font-semibold">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.target || "_self"}
              className="hover:text-orange-500 hover:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
