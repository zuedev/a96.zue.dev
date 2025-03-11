import "./globals.css";
import { Space_Mono } from "next/font/google";

const mainFont = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "96: Where creatives thrive.",
  description:
    "Ditch the digital chaos and unleash your creative power! We're your open-source, all-in-one management powerhouse, designed for the modern creator. Whether you're publishing groundbreaking art or building a booming influencer empire, we provide the seamless tools and services you need to conquer your online world, so you can focus on your passion, not the paperwork.",
  icons: {
    icon: "/96_logo.png",
  },
};

export default ({ children }) => {
  return (
    <html lang="en" className={`${mainFont.className} bg-green-400`}>
      <body>{children}</body>
    </html>
  );
};
