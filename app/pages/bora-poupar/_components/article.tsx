import React from 'react';

const Article = () => {
  return (
    <article className="mx-auto mt-[50px] w-4/5 sm:w-[500px]">
      <header className="my-5">
        <h1 className="text-3xl font-black text-neutral-200">Bora Poupar.</h1>
        <p className="text-xs italic text-neutral-500">
          Publicado por: <strong>J. Tiago</strong>
        </p>
      </header>

      <section>
        <h2 className="my-3 text-2xl">O que é o Bora Poupar?</h2>
        <p className="text-xl leading-loose tracking-wide">
          <strong className="text-emerald-400">Bora Poupar</strong> é uma
          aplicação web, que tem como finalidade e ajudar pessoas a gerenciar
          seu orçamento no momento de suas compras, onde inicialmente é definido
          o valor que o usuário definiu para gastar por exemplo em um super
          mercado, o aplicativo irá calcular o valor dos produtos e debitará do
          valor total definido, assim mantendo o usuário informado sobre total
          de suas compras ajudando a manter o gasto dentro do orçamento definido
          inicialmente.
        </p>
      </section>

      <section>
        <h2 className="my-3 text-2xl">
          💰 Controle suas compras sem sair do orçamento!
        </h2>
        <p className="text-xl leading-loose tracking-wide">
          <strong className="text-emerald-400">Com nossa aplicação web</strong>,
          você define quanto deseja gastar e acompanha em tempo real o valor
          total das suas compras. O sistema calcula automaticamente os produtos
          adicionados e mostra quanto ainda resta do seu orçamento.
        </p>

        <ul className="text-xl leading-loose tracking-wide [&>li]:my-3">
          <li>✔️ Mais controle financeiro</li>
          <li>✔️ Compras organizadas</li>
          <li>✔️ Evite gastos inesperados</li>
          <li>✔️ Simples, rápido e prático</li>
        </ul>

        <p className="text-xl leading-loose tracking-wide">
          Planeje melhor suas compras e mantenha suas finanças sob controle!
        </p>
      </section>

      <section>
        <h3 className="my-3 text-2xl font-bold text-emerald-400">
          O Fim das Surpresas no Caixa do Supermercado
        </h3>

        <p className="text-xl leading-loose tracking-wide">
          Fazer compras no supermercado se tornou um verdadeiro desafio
          financeiro. Quem nunca passou pela experiência de encher o carrinho
          imaginando um valor, mas acabou levando um susto enorme na hora de
          passar as compras no caixa? A falta de controle em tempo real é a
          principal causa desse problema comum. Quando não acompanhamos os
          gastos no momento exato em que colocamos o produto no carrinho, as
          chances de estourar o orçamento planejado são gigantescas. Foi
          pensando em solucionar essa dor que desenvolvemos nossa aplicação web.
          Nossa plataforma nasceu com uma missão clara: dar o controle de volta
          a você. O funcionamento da ferramenta é extremamente simples, rápido e
          intuitivo. Logo ao iniciar, você define o valor total que estipulou
          gastar naquele dia. Esse valor inicial serve como o seu teto
          financeiro e o seu guia de compras. À medida que você caminha pelos
          corredores e escolhe os seus produtos, basta ir inserindo os preços de
          cada item diretamente na nossa aplicação. O sistema calcula o valor
          dos produtos instantaneamente e sem complicações. A mágica acontece
          aqui: o app debita automaticamente cada item do saldo total. Isso
          significa que você se mantém informado sobre o seu saldo a cada
          segundo. Você saberá exatamente quanto ainda pode gastar antes mesmo
          de chegar ao caixa. Essa clareza evita o constrangimento de ter que
          devolver produtos no final. Além disso, ajuda você a fazer escolhas
          mais conscientes e inteligentes. Se o saldo estiver terminando, você
          pode priorizar o que realmente importa. Nossa aplicação web dispensa
          instalações pesadas e roda direto no celular. É a tecnologia
          trabalhando a favor da sua economia e da sua paz de espírito. Chega de
          fazer contas de cabeça ou usar a calculadora padrão do telefone. Com
          nossa ferramenta, você gerencia seu orçamento de forma prática e
          visual. Transforme sua rotina de compras em uma experiência organizada
          e controlada. Leve para o caixa apenas o que cabe perfeitamente no seu
          bolso e no seu plano. Experimente hoje mesmo e veja como é fácil
          comprar sem estourar o orçamento. Sua saúde financeira agradece, e o
          seu bolso sentirá a diferença de imediasta. Planeje, some, economize e
          tenha o controle total dos seus gastos na mão. Afinal, economizar de
          verdade começa com a informação certa no momento certo.
        </p>
      </section>

      <section>
        <h2 className="my-3 text-2xl">Controle seu orçamento</h2>
        <p className="text-xl leading-loose tracking-wide">
          <strong className="text-emerald-400">Chega de Susto no Caixa</strong>
          mantenha seu orçamento sempre no controle, some os produtos em tempo
          real e não estoure o orçamento.
        </p>
      </section>
    </article>
  );
};

export default Article;
