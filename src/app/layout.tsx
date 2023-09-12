import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({
  weight: ["900", "700", "500", "400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--roboto",
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
        className={`${roboto.variable} ${anton.variable}`}
        suppressHydrationWarning={true}
      >
        <Toaster
          position='top-right'
          toastOptions={{
            className: "toastFont",
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
