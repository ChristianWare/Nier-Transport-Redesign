import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";
import { Roboto, Anton } from "next/font/google";
import Footer from "./components/Footer/Footer";
import PreNav from "./components/PreNav/PreNav";

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
        <PreNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
