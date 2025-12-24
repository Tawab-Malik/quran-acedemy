import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Online Quran Classes for Kids | Learn with Hafiz",
  description: "Trusted online Quran classes for children in UK, USA & Canada. Free trial available. Learn Tajweed, memorization & proper Quranic pronunciation.",
  keywords: "online Quran classes, Quran teacher for kids, Hafiz Quran online, Islamic education",
  openGraph: {
    title: "Online Quran Classes for Kids | Learn with Hafiz",
    description: "Trusted online Quran classes for children in UK, USA & Canada. Free trial available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
