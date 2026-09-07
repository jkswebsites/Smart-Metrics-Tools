import React from 'react';

const ContentPage = () => {
  return (
    <div>
      <section className="lg:px-5">
        <article>
          <h2 className="my-3 text-center text-2xl">
            <span className="font-oxygen text-neutral-100">Oficina</span>
            <span className="font-montserrat text-custom-secondary font-bold">
              Web
            </span>
            <span className="font-sans italic text-neutral-100">54</span>
          </h2>
          <p className="lg:text-lg">
            A <em className="text-custom-secondary">Oficina Web 54</em> é um kit
            de ferramentas web desenvolvido para auxiliar pessoas a gerenciar
            atividades do dia a dia, como organizar e monitorar compras de
            supermercado, calcular a precificação de produtos para o iFood e
            gerenciar despesas compartilhadas em eventos e grupos.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ContentPage;
