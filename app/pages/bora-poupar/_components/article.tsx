import React from 'react';

const Article = () => {
  return (
    <article className="mx-auto mt-[50px] w-4/5 sm:w-[500px]">
      <header className="my-5">
        <h1 className="text-3xl font-black text-neutral-200">Bora Poupar?</h1>
        <p className="text-xs italic text-neutral-500">
          Publicado por: <strong>J. Tiago</strong>
        </p>
      </header>

      <section>
        <h2 className="my-3 text-2xl">O que é o Bora Poupar?</h2>
        <p className="text-xl leading-loose tracking-wide">
          <strong className="text-emerald-400">Bora Poupar</strong> é uma
          aplicação web, que tem como finalidade ajudar pessoas a gerenciar seu
          orçamento no momento de suas compras, onde inicialmente é definido o
          valor que o usuário definiu para gastar por exemplo em um super
          mercado, o aplicativo irá calcular o valor dos produtos e debitará do
          valor total definido, assim mantendo o usuário informado sobre total
          de suas compras ajudando a manter o gasto dentro do orçamento definido
          inicialmente.
        </p>
      </section>
    </article>
  );
};

export default Article;
