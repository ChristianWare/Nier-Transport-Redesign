import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

import type { Metadata } from "next";
import { Roboto, Anton, Bebas_Neue } from "next/font/google";
import Footer from "./components/Footer/Footer";
import PreNav from "./components/PreNav/PreNav";
import PlausibleProvider from "next-plausible";

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

const bebas = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--bebas",
});



export const metadata: Metadata = {
  title: "Nier Transportation | Premium Black Car Service in Phoenix AZ",
  description:
    "Experience Nier Transportation's excellence: Airport transfers, party buses, corporate transport, and more. Your premier Phoenix car service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <PlausibleProvider
          domain='niertransportation.com'
          trackLocalhost={true}
          enabled={true}
        />
      </head>
      <body
        className={`${roboto.variable} ${anton.variable} ${bebas.variable}`}
        suppressHydrationWarning={true}
      >
        <Toaster
          position='top-right'
          toastOptions={{
            className: "toastFont",
          }}
        />
        {/* <PreNav /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
