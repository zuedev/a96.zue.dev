import { Inter } from "next/font/google";
import "./globals.css";

const mainFont = Inter({ subsets: ["latin-ext"] });

export const metadata = {
  title:
    "Area96 Digital ✨ Open-Source Post-Modern Full-Service Talent Management",
  description:
    "From art publishing to influencer marketing, we provide the tools and services to help you manage your digital presence with ease. Our aim is to help you focus on what you do best, while we take care of the rest.",
  icons: {
    icon: "/logo96.png",
  },
};

export default ({ children }) => {
  return (
    <html lang="en" className={`bg-[#111] text-white ${mainFont.className}`}>
      <body>{children}</body>
    </html>
  );
};
