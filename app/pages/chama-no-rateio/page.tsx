import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import chamaNoRateio from '@/app/assets/images/chama-no rateio.png';
import FactorRateio from './_components/factor-rateio';
import LogoImage from './_components/logo-image';
import FooterOptions from './_components/footer-options';
import { ContextChamaNoRateioProvider } from '@/app/context/chamaNoRateioContext';

export const metadata: Metadata = {
  title: 'Chama no Rateio Web',
  keywords:
    'Chama no Rateio Web, rateio, divir conta, econômia, controle de gastos',
  description:
    'Chama no Rateio é uma aplicação web para ajudar pessoas a gerenciar gastos no momento de dividar as conta',
  authors: {
    name: 'J. Tiago Silva',
  },
};
const ChamaNoRateioPage = () => {
  return (
    <main className="min-h-screen w-full">
      <div className="z-0 mx-auto h-20 w-full overflow-hidden lg:h-[300px]">
        <Image
          src={chamaNoRateio}
          alt="Churrasco do Boi"
          width={0}
          height={0}
          className="-mt-8"
          priority
        />
      </div>
      <ContextChamaNoRateioProvider>
        <div className="relative z-10 mx-auto -mt-5 h-fit rounded-lg bg-neutral-900 p-3 sm:w-[450px] lg:-mt-[100px]">
          <LogoImage />
          <div className="mx-auto w-full sm:w-[400px]">
            <div>
              <div className="my-3">
                <FactorRateio />
              </div>
            </div>
          </div>
        </div>
        <FooterOptions />
      </ContextChamaNoRateioProvider>
    </main>
  );
};

export default ChamaNoRateioPage;
