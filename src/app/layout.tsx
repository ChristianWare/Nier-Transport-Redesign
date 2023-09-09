import Nav from "./components/Nav/Nav";
import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Roboto_Serif, Anton } from "next/font/google";

const roboto = Roboto({
  weight: ["900", "700", "500", "400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--roboto",
});

const robotoSerif = Roboto_Serif({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--robotoSerif",
});

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--anton",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${robotoSerif.variable} ${anton.variable}`}
      >
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
