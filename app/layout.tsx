import type { Metadata } from "next";
import {Oxygen, Montserrat} from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Script from "next/script";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title:{
    default:  "Smart Buy | Smart Metrics Tools",
    template: "%s | Smart Metrics Tools"
  },
  description: "Seu Orçamento é um aplicativo para ajudar pessoas há gerenciar suas compras, evitando que o valor passe do valor que você tem em mãos, como esse aplicativo suas compras sempre estarão sobre controle.",
  keywords: "Seu Orçamento.,  Smart Metrics Tools, dinheiro, orçamento, controle de gasto, economida, inteligência financeira",
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
        <Footer/>
      </body>
    </html>
  );
}
