import type { Metadata } from "next";
import { DM_Sans, Poppins, Allura } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-poppins" });
const allura = Allura({ subsets: ["latin"], weight: "400", variable: "--font-allura" });

export const metadata: Metadata = {
  title: "Amanda Priscilia — Front-End & Web Developer",
  description:
    "Portfolio of Amanda Priscilia, a front-end and web developer building responsive interfaces with React, Tailwind CSS, and Laravel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
