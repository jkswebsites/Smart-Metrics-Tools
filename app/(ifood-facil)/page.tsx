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
            <h2 className="text-center text-3xl font-bold text-emerald-600">
              Calculadora web de Precificação para iFood
            </h2>
            <Paragraph>
              <strong className="font-sans text-2xl font-light text-neutral-100">
                IFood
              </strong>
              <strong className="font-oxygen text-2xl font-black text-emerald-500">
                Fácil
              </strong>{' '}
              é uma calculadora web de precificação para IFood, Calcule
              corretamente o preço de venda do seu produto no iFood embutindo as
              taxas. Não fique no prejuízo.
            </Paragraph>
          </Article>

          <Article>
            <h2 className="text-center text-3xl font-bold text-emerald-600">
              Como Funciona o Calculo das Taxa do iFood
            </h2>
            <Paragraph>
              Entenda como a calculadora funciona e o erro que a maioria das
              pessoas cometem ao calcular as taxas.
            </Paragraph>

            <h6 className="my-3 text-center text-3xl font-bold text-emerald-600">
              ✅ Principais taxas para restaurantes
            </h6>

            <ul>
              <li>
                {' '}
                Há uma comissão sobre cada pedido realizado pela plataforma (ou
                seja, o restaurante “paga” uma parte da venda ao iFood) - Há uma
                taxa de pagamento online (quando o cliente paga pelo app ou pela
                plataforma). - Há uma mensalidade em alguns casos, dependendo do
                volume de vendas.
              </li>
              <li>
                Há uma taxa de pagamento online (quando o cliente paga pelo app
                ou pela plataforma).
              </li>

              <li>
                Há uma mensalidade em alguns casos, dependendo do volume de
                vendas.
              </li>
            </ul>
          </Article>

          <Article>
            <h3 className="mt-4 text-center text-3xl font-bold text-emerald-600">
              🧮 Como isso impacta você que está pensando em vender via iFood
            </h3>
            <Paragraph>
              Você precisa calcular no seu custo: se você vende algo por X
              valor, descontar a comissão + pagamento online + eventual
              mensalidade para ver quanto sobra de “receita líquida”. Precificar
              seus produtos levando em conta essas taxas, para não vender “no
              prejuízo”. Por exemplo: se a comissão é 12% + 3,2% pagamento
              online, então aproximadamente ~15% ou mais do valor do pedido vai
              para taxas, sem contar seus custos de comida, entrega, pessoal
              etc. Verificar qual plano faz sentido para seu negócio: se você
              tem entrega própria ou se vai usar entrega via iFood, o custo será
              diferente.
            </Paragraph>
          </Article>
        </section>
      </main>
    </div>
  );
}
