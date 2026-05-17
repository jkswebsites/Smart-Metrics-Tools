import React from 'react';
import type { Metadata } from 'next';
import { Oxygen, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    absolute: 'Mundo dos Apps. ',
    default: 'Bora Poupar! | Mundo dos Apps',
    template: '%s | Mundo dos Apps',
  },
  description:
    'Mundo dos Apps, facilitando sua vida com aplicativos! é um conjunto de ferramentas web que tem como objetivo forncer ferramentas para ajudar a você no seu cotidiano ',
  keywords:
    'Seu Orçamento, Bora Poupar - Mundo dos Apps, metricas, dinheiro, orçamento, controle de gasto, economida, inteligência financeira',
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DEE8NXGBM2"
        />
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DEE8NXGBM2');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="0iWx9eFtGkDuB5YO9f1TtwYL829AvzxrWzUbhcAZ9vE"
        />
      </head>
      <body className={`${oxigen.variable} ${montserrat.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
