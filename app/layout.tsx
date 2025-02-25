import type { Metadata } from "next";
import {Oxygen, Montserrat} from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

export const metadata: Metadata = {
  title:{
    default:  "Smart Metrics Tools",
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
      <body
        className={`${oxigen.variable} ${montserrat.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
