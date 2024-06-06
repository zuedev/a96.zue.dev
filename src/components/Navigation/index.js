export default function Navigation(props) {
  const { links } = props;

  if (!links) return null;

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
