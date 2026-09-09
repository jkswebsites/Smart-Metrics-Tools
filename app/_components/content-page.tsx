import React from 'react';

const ContentPage = () => {
  return (
    <div className="space-y-5">
      <section className="lg:px-5">
        <article>
          <h2 className="my-3 text-center text-2xl">
            <span className="font-oxygen text-neutral-100">Oficina</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Web
            </span>
            <span className="font-sans italic text-neutral-100">54</span>
          </h2>
          <p className="text-center lg:text-lg">
            A <em className="text-custom-secondary">Oficina Web 54</em> é um kit
            de ferramentas web desenvolvido para auxiliar pessoas a gerenciar
            atividades do dia a dia, como organizar e monitorar compras de
            supermercado, calcular a precificação de produtos para o iFood e
            gerenciar despesas compartilhadas em eventos e grupos.
          </p>
        </article>

        <article>
          <h2 className="my-3 text-center text-2xl">
            <span className="font-oxygen text-neutral-100">Bora</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Poupar
            </span>
            <span className="font-sans italic text-neutral-100">App.</span>
          </h2>
          <p className="text-center lg:text-lg">
            O <em className="text-custom-secondary">Bora Poupar App</em> é uma
            calculadora de compras para monitorar e controlar o orçamento no
            momento das compras, ajudando consumidores a não ser pego de
            surpresa no caixa;
          </p>
        </article>

        <article>
          <h2 className="my-3 text-center text-2xl">
            <span className="font-oxygen text-neutral-100">Chama</span>
            <span className="font-sans italic text-neutral-500">No</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Rateio
            </span>
          </h2>
          <p className="text-center lg:text-lg">
            O <strong className="text-custom-secondary">Chama no Rateio</strong>{' '}
            é uma calculadora de rateio de despesas que ajuda grupos de pessoas
            a dividir e gerenciar gastos compartilhados de forma simples e
            rápida. É ideal para churrascos, festas, confraternizações de
            empresas, viagens e encontros com família e amigos.
          </p>
        </article>

        <article>
          <h2 className="my-3 text-center text-2xl">
            <span className="font-oxygen text-neutral-100">iFood</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Fácil
            </span>
          </h2>

          <p className="text-center lg:text-lg">
            O <strong className="text-custom-secondary">iFood Fácil</strong> é
            uma calculadora de preços para vendedores do iFood. A ferramenta
            ajuda a calcular o preço de venda dos produtos de forma simples e
            rápida, considerando os custos e as taxas da plataforma para
            facilitar a precificação e aumentar o controle sobre os seus ganhos.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ContentPage;
