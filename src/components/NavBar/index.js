import NavLinks from "@/components/NavLinks";
import Socials from "@/components/Socials";
import A96Line from "@/components/A96Line";

export default function NavBar(props) {
  return (
    <div className="bg-black">
      <div className="flex flex-row justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center space-x-4 ">
          <a href="/">
            <img src="/logo96.png" alt="Area 96 Digital" className="h-10" />
          </a>
          <NavLinks />
        </div>
        <Socials />
      </div>
      <A96Line />
    </div>
  );
}
