import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title:
    "Area96 Digital | Open-source management services for the post-modern era. ✨",
  description:
    "From art publishing to influencer marketing, we provide the tools and services to help you manage your digital presence with ease. Our aim is to help you focus on what you do best, while we take care of the rest.",
  icons: {
    icon: "/logo96.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
