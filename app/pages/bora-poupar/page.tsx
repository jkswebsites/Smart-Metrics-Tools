import React from 'react';
import MainManager from './_components/main-manager';
import type { Metadata } from 'next';
import { BoraPouparContextProvider } from '@/app/context/boraPouparContext';
import NavFooter from './_components/nav-footer';
import { ImageCard, ImageContent, TitleContent } from '@/components/image-card';
import Article from './_components/article';
import AlertWarning from '@/app/_components/alert-action';

export const metadata: Metadata = {
  title: 'Bora Poupar',
  keywords: 'Bora Poupar, poupar, investimento, econômia, controle de gastos',
  description:
    'Bora Poupar é uma aplicação web para gerenciar seus gastos de forma prática e eficiênte.',
};
const BoraPouparPage = () => {
  return (
    <main className="h-full w-full">
      <div className="mx-auto w-fit">
        <AlertWarning />
      </div>

      <BoraPouparContextProvider>
        <ImageCard>
          <TitleContent title="Bora" subtitle="Poupar?" />
          <ImageContent path="/vaca-bora-poupar.png" />
        </ImageCard>
        <MainManager />
        <Article />
        <div className="h-[200px]"></div>
        <NavFooter />
      </BoraPouparContextProvider>
    </main>
  );
};

export default BoraPouparPage;
