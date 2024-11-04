import localFont from "next/font/local";
import "./globals.css";

import Navigation from "@/components/Navigation.js";

const MonaspaceNeonVarVF = localFont({
  src: "./fonts/MonaspaceNeonVarVF.woff2",
  display: "swap",
});

export const metadata = {
  title: "Area96 Digital",
  description: "Open-source full-service management for the modern era. ✨",
};

export default ({ children }) => {
  return (
    <html lang="en" className={`${MonaspaceNeonVarVF.className} antialiased`}>
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
};
