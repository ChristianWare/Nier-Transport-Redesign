import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Roboto, Anton, Bebas_Neue } from "next/font/google";
import Footer from "./components/Footer/Footer";
import PlausibleProvider from "next-plausible";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";


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
    <ViewTransitions>
      <html lang='en'>
        <head>
          <PlausibleProvider
            domain='niertransportation.com'
            trackLocalhost={true}
            enabled={true}
          />
          <Script
            id='ruby-chat-script'
            // You can change this to `beforeInteractive` or `lazyOnload`
            // depending on how soon you want the script to run.
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
      window.rubyApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};
      (function(){
        var e = "2bfdfa92-2e3f-4c29-91e7-c15be5b80cf0"; // your widget key
        var a = false;
        var t = document.createElement("script");
        t.async = true;
        t.type = "text/javascript";
        t.src = "https://chatwidget.ruby.com/" + e;
        document.getElementsByTagName("head")[0].appendChild(t);
        t.onreadystatechange = t.onload = function(_) {
          if(!a && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            if(window.RubyChat) {
              window.RubyChat({ c: e });
            }
            a = true;
          }
        };
      })();
    `,
            }}
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
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
