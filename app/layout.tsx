import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer/Footer";
import hoho from "@/public/hoho.jpg";
export const metadata: Metadata = {
  title: "Moimen portfolio",
  description: "portfolio for mo'men as a web developer",
  keywords: [
    "mo'men wagdy",
    "moimen wagdy",
    "moamen wagdy",
    "next developer",
    "react developer",
    "frontend developer",
    "javascript developer",
    "frontend portfolio",
    "portfolio",
    "react portfolio",
    "next portfolio",
    "moimen portfolio",
    "moamen portfolio",
    "mo'men portfolio",
    "responsive designer",
    "moimen",
    "hiring frontend",
    "needed frontend",
    "experienced frontend",
    "linked in frontend",
    "linked in developer",
    "linked in frontend developer",
    "tailwindCSS developer",
    "bootstrap developer",
    "spotify",
    "myspotify music website",
    "online store projects",
    "e-commerce website",
    "e-commerce developer",
    "e-commerce projects",
    "violet store",
    "myspotify",
    "online store prodcuts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={` font-lexend bg-[#FEFFEf] dark:bg-darkBackground bg-cover`}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
