"use client";
import { usePathname } from "next/navigation";
import { Metadata } from "next";
import Footer from "../../components/layout/global/Footer";
import Navigation from "../../components/layout/global/Navbar";
import "./globals.css";

/***** Developers don't recommend this method (For further research) *****/
// import { headers } from "next/headers";
// const headersList = headers();
// const pathname = headersList.get("next-url");

/***** 
 I couldn't import styling using functions below because the HTML file will load first before styling comes in (Most likely due to the sequence of the call stack) 
*****/
import "@/styles/animation.css";
import "@/styles/collapsible.css";
import "@/styles/custom.css";
import "@/styles/daterange.css";
import "@/styles/form.css";
import "@/styles/modal.css";
import "@/styles/normalize.css";
import "@/styles/swiper.css";
import "@/styles/tabs.css";

// Import styling
// const stylingFiles = [
//   "collapsible",
//   "custom",
//   "daterange",
//   "form",
//   "normalize",
//   "swiper",
//   "tabs",
// ];

// function importStylingFiles(fileName) {
//   return import(`./styles/${fileName}.css`);
// }

// for (let i = 0; i < stylingFiles.length; i++) {
//   importStylingFiles(stylingFiles[i]);
// }
// End import styling

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <title>Takaful Transactional</title>
      <link rel="icon" href="/icon.svg" sizes="any" />
      <body className={`${pathname == "/" ? "" : ""} overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
