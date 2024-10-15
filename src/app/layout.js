import "./globals.css";

import { Inter } from "next/font/google";

import MainNav from "../components/MainNav.js";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Area96 Digital | Open-Source Talent Management ✨",
  description: "Take the next step in your digital career with confidence.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default ({ children }) => {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark:bg-black dark:text-white`}
    >
      <body>
        <header>
          <MainNav />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
};
