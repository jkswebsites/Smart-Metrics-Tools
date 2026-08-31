import {
  ArticleSections,
  Paragraph,
  SubtitleH3,
} from '@/app/_components/article-sections';
import Image from 'next/image';
import React from 'react';
import chamaNoRateio from '@/app/assets/images/chama-no-rateio/chama-no-rateio-party.png';

const ContentSite = () => {
  return (
    <div className="mx-auto px-1 py-2 sm:w-[600px]">
      <ArticleSections>
        <div className="h-64 w-full overflow-hidden rounded-lg shadow-lg shadow-neutral-700">
          <Image
            src={chamaNoRateio}
            alt="Chama no Rateio"
            width={0}
            height={0}
            className="h-full"
          />
        </div>
        <SubtitleH3>Sobre o Chama no Rateio</SubtitleH3>
        <Paragraph>
          O <strong className="italic text-emerald-400">Chama no Rateio</strong>{' '}
          é uma aplicação web desenvolvida para ajudar grupos de pessoas a
          organizar despesas compartilhadas de forma simples e prática. A
          plataforma permite criar grupos para diferentes tipos de eventos e
          atividades, como churrascos, reuniões, encontros, confraternizações,
          pizzas, saídas para restaurantes, bares e outras ocasiões em que
          várias pessoas compartilham despesas. O objetivo do Chama no Rateio é
          facilitar a organização dos participantes e o acompanhamento dos
          gastos, ajudando o grupo a ter uma visão mais clara das despesas
          durante a organização do evento.
        </Paragraph>

        <Paragraph>
          A aplicação foi criada para tornar o processo de organização mais
          simples, evitando a necessidade de controlar manualmente todas as
          despesas e participantes.
        </Paragraph>
      </ArticleSections>
      <ArticleSections>
        <SubtitleH3>
          Não fique no prejuízo: organize suas despesas com o Chama no Rateio
        </SubtitleH3>
        <Paragraph>
          Organizar um evento em grupo pode ser muito divertido, mas dividir as
          despesas nem sempre é uma tarefa fácil. Com várias pessoas
          participando, é comum surgir dúvida sobre quem pagou, quanto foi gasto
          e quanto cada participante deve contribuir. Para evitar confusão, o
          <strong>Chama no Rateio</strong> ajuda você a manter tudo organizado.
          A ferramenta foi desenvolvida para facilitar o gerenciamento de
          despesas e participantes em eventos. Você pode criar um grupo para
          organizar diferentes tipos de ocasiões. Churrascos, reuniões,
          confraternizações, pizzas, restaurantes e encontros são alguns
          exemplos. Registre as despesas realizadas durante o evento de forma
          simples e organizada. Adicione os participantes que fazem parte do
          grupo. Assim, você consegue acompanhar melhor os gastos realizados ao
          longo do evento. Manter as informações organizadas ajuda a evitar
          esquecimentos e divergências na hora de dividir a conta. Com todos os
          dados reunidos, fica mais fácil entender como as despesas foram
          distribuídas. Isso proporciona mais clareza para todos os
          participantes do grupo. O objetivo do Chama no Rateio é tornar a
          divisão das despesas mais simples e transparente. Dessa forma, você
          pode aproveitar o evento sem precisar se preocupar em guardar todas as
          informações de cabeça. Evite surpresas desagradáveis na hora de fechar
          a conta. Organize previamente os participantes e acompanhe as despesas
          durante o evento. A ferramenta também pode ser útil para grupos que
          costumam compartilhar diferentes tipos de gastos. Em vez de depender
          de anotações espalhadas ou cálculos manuais, mantenha tudo
          centralizado. O Chama no Rateio oferece uma maneira prática de
          acompanhar essas informações. Quanto mais organizada estiver a
          informação, mais fácil será conferir os valores no final. A proposta é
          ajudar o grupo a ter uma visão clara das despesas compartilhadas.
          Assim, todos podem consultar e entender melhor os gastos registrados.
          A ferramenta não substitui comprovantes ou documentos de pagamento.
          Ela funciona como um recurso de organização e acompanhamento das
          despesas do grupo. O Chama no Rateio foi criado pensando nas situações
          comuns do dia a dia. Principalmente naquelas em que várias pessoas
          precisam dividir custos de maneira organizada. Não deixe para
          descobrir os valores somente no final do evento. Organize os
          participantes e registre as despesas conforme elas acontecem. Use o
          <strong className="text-emerald-800"> Chama no Rateio</strong> para
          deixar a divisão da conta mais simples, clara e organizada.
        </Paragraph>
        <Paragraph>
          Chama no Rateio: organize as despesas, acompanhe os participantes e
          evite confusão na hora de dividir a conta.
        </Paragraph>
      </ArticleSections>
      <ArticleSections>
        <SubtitleH3>Como funciona</SubtitleH3>
        <Paragraph>
          O usuário pode criar um grupo para um evento, adicionar os
          participantes e registrar as despesas relacionadas à ocasião. Dessa
          forma, as informações ficam organizadas em um único lugar e podem ser
          consultadas pelos integrantes do grupo.
        </Paragraph>

        <Paragraph>
          O Chama no Rateio é uma ferramenta de organização e controle de
          despesas compartilhadas. A plataforma não oferece serviços
          financeiros, empréstimos, investimentos ou qualquer tipo de operação
          bancária.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>Nosso objetivo</SubtitleH3>
        <Paragraph>
          Nosso objetivo é oferecer uma ferramenta simples e acessível para
          auxiliar pessoas na organização de eventos e no controle de despesas
          compartilhadas, proporcionando uma experiência prática para grupos de
          diferentes tamanhos.
        </Paragraph>
        <Paragraph>
          O Chama no Rateio está em constante evolução e pode receber novas
          funcionalidades para melhorar a experiência dos usuários.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>Adicionando Participantes</SubtitleH3>
        <Paragraph>
          Gerencie participantes, adicione por nome ou apilidos, monitore a
          quantidade de pessoas participando da vaquinha, ê também é possível
          gerenciar os participantes que já pagaram e os que não pagaram o valor
          total da vaquinha dividido pela quantidade de participantes
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>Adicionando Produtos</SubtitleH3>
        <Paragraph>
          Gerencie produtos, adicione itens á lista ou removo, à aplicação{' '}
          <strong className="text-emerald-700">Chama no Rateio</strong> calcula
          em tempo real, somam os item e divide pela quantidades de
          participantes e mostra o valor total para cada participantes.
        </Paragraph>
      </ArticleSections>
    </div>
  );
};

export default ContentSite;
