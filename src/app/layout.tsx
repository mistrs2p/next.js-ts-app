import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/header";
import { Caveat, Roboto } from "next/font/google";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const CaveatFont = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-caveat",
});

const RobotoFont = Roboto({
  subsets: ["vietnamese"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Next Ts Course",
  description: "next app crash course description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${CaveatFont.variable} font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
