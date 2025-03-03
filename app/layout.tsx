import type { Metadata } from "next";
import {Oxygen, Montserrat} from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Script from "next/script";
import LoadingPage from "./loading";

export const metadata: Metadata = {
  title:{
    default:  "Seu Orçamento. | Smart Metrics Tools",
    template: "%s | Smart Metrics Tools"
  },
  description: "Smart Metrics Tools is a websites to manager metrics of differents segments",
  icons: {
    icon: ["./icon.png"],
    apple: ["./icon.png"],
    shortcut: ["./icon.png"],
  }
};

const oxigen = Oxygen({
  subsets: ['latin'],
  variable: "--font-oxygen",
  style: ['normal'],
  weight: ['300', '400', "700"],
});
const montserrat = Montserrat({
    subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100","500","900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DEE8NXGBM2"/>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DEE8NXGBM2');
          `}
        </Script>
        <meta name="google-site-verification" content="0iWx9eFtGkDuB5YO9f1TtwYL829AvzxrWzUbhcAZ9vE" />
      </head>
      <body
        className={`${oxigen.variable} ${montserrat.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
