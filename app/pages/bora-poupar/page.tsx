import React from 'react';
import MainManager from './_components/main-manager';
import type { Metadata } from 'next';
import { BoraPouparContextProvider } from '@/app/context/boraPouparContext';
import NavFooter from './_components/nav-footer';
export const metadata: Metadata = {
  title: 'Bora Poupar',
  keywords: 'Bora Poupar, poupar, investimento, econômia, controle de gastos',
  description:
    'Bora Poupar é um é app para gerenciar seus gastos de forma prática e eficiênte.',
};
const BoraPouparPage = () => {
  return (
    <main className="h-full w-full">
      <BoraPouparContextProvider>
        <MainManager />
        <NavFooter />
      </BoraPouparContextProvider>
    </main>
  );
};

export default BoraPouparPage;
