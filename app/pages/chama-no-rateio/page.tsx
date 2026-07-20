import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import chamaNoRateio from '@/app/assets/images/chama-no rateio.png';
import ScreenMetrics from './_components/screen-metrics';
import FormAddItem from './_components/form-add-item';
export const metadata: Metadata = {
  title: 'Chama no Rateio Web',
  keywords:
    'Chama no Rateio Web, rateio, divir conta, econômia, controle de gastos',
  description:
    'Chama no Rateio é uma aplicação web para ajudar pessoas a gerenciar gastos no momento de dividar as contas',
  authors: {
    name: 'J. Tiago Silva',
  },
};
const ChamaNoRateioPage = () => {
  return (
    <main className="min-h-screen w-full">
      <div className="z-0 mx-auto h-[80px] w-full overflow-hidden">
        <Image
          src={chamaNoRateio}
          alt="Um boi felíz fazendo churrasco"
          width={0}
          height={0}
          className="-mt-7"
        />
      </div>
      <div className="relative z-10 mx-auto -mt-5 h-fit rounded-lg bg-neutral-900 p-3 sm:w-[450px]">
        <div className="mx-auto w-full sm:w-[400px]">
          <div className="flex flex-col items-center justify-center">
            <h1>
              <span className="ml-8 block text-neutral-300">Chama no </span>
              <span className="text-custom-secondary -mt-7 block text-5xl font-black">
                R<span className="text-3xl">ateio</span>
              </span>
            </h1>
          </div>

          <div>
            <h2>Em construção ainda não está funcionando!</h2>
            <ScreenMetrics />
            <FormAddItem />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChamaNoRateioPage;
