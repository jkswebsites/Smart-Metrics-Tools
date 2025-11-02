import React from 'react';
import { ContextSmartBuyProvider } from '@/app/context/smart-buy-context';
import { Metadata } from 'next';
import { ImageCard, ImageContent, TitleContent } from '@/components/image-card';
import MainManager from './_components/main-manager';

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

        <section>
          <article>
            <h2>IFood Fácil</h2>
          </article>
        </section>
      </main>
    </div>
  );
}
