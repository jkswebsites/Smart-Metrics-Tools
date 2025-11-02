import React from 'react';
import { ContextSmartBuyProvider } from '@/app/context/smart-buy-context';
import { Metadata } from 'next';
import { ImageCard, ImageContent, TitleContent } from '@/components/image-card';
import MainManager from './_components/main-manager';
import { Article, Paragraph, Subtitle } from '../_components/article';

export const metadata: Metadata = {
  title: 'IFood Fácil',
  keywords: 'ifood preço de venda',
  description:
    'IFood fácil é um aplicativo que lhe ajuda à calcular o preço de venda no IFood',
};

export default function Home() {
  return (
    <div className="w-full">
      <main className="mx-auto mt-20 min-h-[800px] w-[95%]">
        <ImageCard>
          <ImageContent path="/vaca-eat-food.png" />
          <TitleContent title="IFood" subtitle="Fácil" />
        </ImageCard>

        <ContextSmartBuyProvider>
          <MainManager />
        </ContextSmartBuyProvider>

        <section className="mx-auto mt-9 w-4/5 sm:w-[600px]">
          <Article>
            <Subtitle firstWord="IFood" secoundtWord="Fácil" />
            <Paragraph>
              <strong className="font-sans text-2xl font-light text-neutral-100">
                IFood
              </strong>
              <strong className="font-oxygen text-2xl font-black text-emerald-500">
                Fácil
              </strong>{' '}
              é uma aplicação web que visa ajudar vendedores do{' '}
              <strong className="text-emerald-400">IFood</strong> a precificar
              seus produtos no ifood. Essa ferramenta é ideal para
              microempreendedores, restaurantes, lanchonetes e dark kitchens que
              buscam otimizar seus preços e aumentar a rentabilidade dentro do
              marketplace.
            </Paragraph>
          </Article>
        </section>
      </main>
    </div>
  );
}
