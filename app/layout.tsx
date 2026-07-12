import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Oxygen, Montserrat } from 'next/font/google';
import Header from './_components/header';
import Script from 'next/script';
import Footer from './_components/footer';

export const metadata: Metadata = {
  title: {
    absolute: 'OficinaWeb. ',
    default: 'Bora Poupar! | OficinaWeb',
    template: '%s | OficinaWeb.',
  },
  description:
    'OficinaWeb, facilitando sua vida com aplicativos! é um conjunto de ferramentas web que tem como objetivo forncer ferramentas para ajudar a você no seu cotidiano ',
  keywords:
    'Seu Orçamento, Bora Poupar - OficinaWeb, metricas, dinheiro, orçamento, controle de gasto, economida, inteligência financeira',
  icons: {
    icon: ['./icon.png'],
    apple: ['./icon.png'],
    shortcut: ['./icon.png'],
  },
};

const oxigen = Oxygen({
  subsets: ['latin'],
  variable: '--font-oxygen',
  style: ['normal'],
  weight: ['300', '400', '700'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '500', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N94M0078ZL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N94M0078ZL');
          `}
        </Script>
      </head>
      <body className={`${oxigen.variable} ${montserrat.variable} antialiased`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
