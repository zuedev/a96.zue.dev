export default function Socials(props) {
  const socials = props.socials;

  if (!socials) return null;

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
