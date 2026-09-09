import { Metadata } from 'next';
import React from 'react';
import HeroSkew from './_components/hero-skew';
import GridLinks from './_components/grid-links';
import Aside from './_components/aside';
import ContentPage from './_components/content-page';

export const metadata: Metadata = {
  title: 'OficinaWeb54 | Ferramentas Web para o Dia a Dia',
  description:
    'OficinaWeb54 reúne ferramentas e aplicativos web para facilitar tarefas do dia a dia, como vaquinha, rateio, economia e organização.',
  keywords: [
    'ferramentas web',
    'aplicativos web',
    'ferramentas online',
    'vaquinha online',
    'rateio',
    'economizar dinheiro',
    'organização',
    'OficinaWeb54',
    'Bora Poupar App',
    'Chama no Rateio',
    'IFood Fácil',
  ],
};
export default function HomeOficinaWeb54() {
  return (
    <div className="mx-auto min-h-screen p-8 sm:w-4/5 lg:w-[85%]">
      <HeroSkew />

      <main className="mt-5 lg:flex">
        <div>
          <div className="w-full overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 className="font-oxygen text-3xl font-bold text-neutral-200">
              Aplicativos Web
            </h2>
            <p className="-mt-2 font-sans italic text-neutral-400">
              Facilitando sua vida com aplicativos;
            </p>
            <GridLinks />
          </div>
          <div className="my-4 lg:w-[700px]">
            <ContentPage />
          </div>
        </div>

        <div>
          <Aside />
        </div>
      </main>
    </div>
  );
}
