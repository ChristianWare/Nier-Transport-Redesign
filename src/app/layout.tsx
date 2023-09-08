import Nav from "./components/Nav/Nav";
import "./globals.css";

import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";

const roboto = Roboto({
  weight: ["900", "700"],
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
      <body className={`${roboto.variable} ${robotoSerif.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
