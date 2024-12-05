import NavLinks from "@/components/NavLinks";
import Socials from "@/components/Socials";
import A96Line from "@/components/A96Line";

import "./page.css";

export default function Home() {
  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{
          objectFit: "cover",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      >
        <source src="4124198-hd_1920_1080_24fps.mp4" type="video/mp4" />
      </video>
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
          <A96Line />
          <div className="flex flex-row justify-between">
            <NavLinks />
            <Socials />
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
