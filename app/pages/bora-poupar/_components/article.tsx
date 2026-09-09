import Image from 'next/image';
import React from 'react';
import imgBuy from '@/app/assets/images/women-supermarket.png';
import imgBullCart from '@/app/assets/images/bora-poupar/boi-mercado.png';
import imgBora13 from '@/app/assets/images/bora-poupar/bora-poupar1-3.png';
import imgBora23 from '@/app/assets/images/bora-poupar/bora-poupar2-3.png';
import {
  Paragraph,
  Section,
  Article,
  SubtitleH3,
  ImageContainer,
} from '@/app/_components/article-sections';
const ContentBoraPoupar = () => {
  return (
    <>
      <Section>
        <Article>
          <header className="my-5">
            <ImageContainer path={imgBullCart} title="Boi no Mercado" />
            <div className="rounded-lg bg-neutral-950">
              <h1 className="text-3xl font-black text-neutral-200">
                Bora Poupar App
              </h1>
              <p className="text-xs italic text-neutral-500">
                Publicado por: <strong>J. Tiago</strong>
              </p>
            </div>
          </header>
          <SubtitleH3>Você sempre no controle</SubtitleH3>
          <Paragraph>
            Planeje, acompanhe seus gastos e faça suas compras de forma mais
            organizada com o <strong>Bora Poupar App</strong>.
          </Paragraph>
          <Paragraph>
            <strong className="text-emerald-400">Bora Poupar App</strong> é uma
            aplicação web, que tem como finalidade ajudar pessoas a gerenciar
            seu orçamento no momento de suas compras, onde inicialmente é
            definido o valor que o usuário definiu para gastar por exemplo em um
            supermercado, o aplicativo irá calcular o valor dos produtos e
            debitará do valor total definido, assim mantendo o usuário informado
            sobre total de suas compras ajudando a manter o gasto dentro do
            orçamento definido inicialmente.
          </Paragraph>
        </Article>

        <Article>
          <h6 className="font-montserrat text-neutral-500: mt-6">
            Perguntas frequentes:
          </h6>
          <h2 className="text-custom-secondary mb-2 text-2xl">
            O que é o Bora Poupar App?
          </h2>
          <Paragraph>
            É uma ferramenta online que ajuda consumidores a acompanhar os
            gastos durante as compras e manter as despesas dentro de um
            orçamento previamente definido.
          </Paragraph>
          <div className="relative mx-auto h-[250px] w-full overflow-hidden rounded-lg">
            <div className="absolute h-full w-full bg-gradient-to-t from-neutral-950 to-transparent"></div>
            <h2 className="absolute bottom-3 left-3 text-2xl font-extralight italic">
              Você sempre no Controle.
            </h2>
            <div className="lg:h-[400px]">
              <Image
                src={imgBuy}
                width={0}
                height={0}
                alt="Mulher no Supermercado"
                className="block lg:-mt-7 lg:h-[500px]"
              />
            </div>
          </div>
          <h3 className="my-3 text-2xl">
            💰 Controle suas compras sem sair do orçamento!
          </h3>

          <Paragraph>
            <strong className="text-emerald-400">
              Com nossa aplicação web
            </strong>
            , você define quanto deseja gastar e acompanha em tempo real o valor
            total das suas compras. O sistema calcula automaticamente os
            produtos adicionados e mostra quanto ainda resta do seu orçamento.
          </Paragraph>
          <ul className="text-xl leading-loose tracking-wide [&>li]:my-3">
            <li>✔️ Mais controle financeiro</li>
            <li>✔️ Compras organizadas</li>
            <li>✔️ Evite gastos inesperados</li>
            <li>✔️ Simples, rápido e prático</li>
          </ul>
          <Paragraph>
            Planeje melhor suas compras e mantenha suas finanças sob controle!
          </Paragraph>
        </Article>
        <Article>
          <Image
            src={imgBora13}
            alt="Grid de uma mulher no supermercado"
            className="rounded-lg"
          />
          <h3 className="my-3 text-2xl font-bold text-emerald-400">
            O Fim das Surpresas no Caixa do Supermercado
          </h3>
          <Image
            src={imgBora23}
            alt="Grid de uma mulher no supermercado"
            className="rounded-lg"
          />
          <Paragraph>
            Fazer compras no supermercado se tornou um verdadeiro desafio
            financeiro. Quem nunca passou pela experiência de encher o carrinho
            imaginando um valor, mas acabou levando um susto enorme na hora de
            passar as compras no caixa? A falta de controle em tempo real é a
            sua saúde financeira agradece. Quando não acompanhamos os gastos no
            momento exato em que colocamos o produto no carrinho, as chances de
            estourar o orçamento planejado são gigantescas. Foi pensando em
            solucionar essa dor que desenvolvemos nossa aplicação web. Nossa
            plataforma nasceu com uma missão clara: dar o controle de volta a
            você. O funcionamento da ferramenta é extremamente simples, rápido e
            intuitivo. Logo ao iniciar, você define o valor total que estipulou
            gastar naquele dia. Esse valor inicial serve como o seu teto
            financeiro e o seu guia de compras. À medida que você caminha pelos
            corredores e escolhe os seus produtos, basta ir inserindo os preços
            de cada item diretamente na nossa aplicação. O sistema calcula o
            valor dos produtos instantaneamente e sem complicações. A mágica
            acontece aqui: o app descontará automaticamente cada item do saldo
            total. Isso significa que você se mantém informado sobre o seu saldo
            a cada segundo. Você saberá exatamente quanto ainda pode gastar
            antes mesmo de chegar ao caixa. Essa clareza evita o constrangimento
            de ter que devolver produtos no final. Além disso, ajuda você a
            fazer escolhas mais conscientes e inteligentes. Se o saldo estiver
            terminando, você pode priorizar o que realmente importa. Nossa
            aplicação web dispensa instalações pesadas e roda direto no celular.
            É a tecnologia trabalhando a favor da sua economia e da sua paz de
            espírito. Chega de fazer contas de cabeça ou usar a calculadora
            padrão do telefone. Com nossa ferramenta, você gerencia seu
            orçamento de forma prática e visual. Transforme sua rotina de
            compras em uma experiência organizada e controlada. Leve para o
            caixa apenas o que cabe perfeitamente no seu bolso e no seu plano.
            Experimente hoje mesmo e veja como é fácil comprar sem estourar o
            orçamento. Sua saúde financeira agradece, e o seu bolso sentirá a
            diferença imediatamente. Planeje, some, economize e tenha o controle
            total dos seus gastos na mão. Afinal, economizar de verdade começa
            com a informação certa no momento certo.
          </Paragraph>
        </Article>

        <Article>
          <h2 className="my-3 text-2xl">Controle seu orçamento</h2>
          <Paragraph>
            <strong className="text-emerald-400">
              Chega de Susto no Caixa{' '}
            </strong>
            mantenha seu orçamento sempre no controle, some os produtos em tempo
            real e não estoure o orçamento.
          </Paragraph>
        </Article>

        <Article>
          <SubtitleH3>Para quem é?</SubtitleH3>
          <Paragraph>
            À <em> Bora Poupar App</em> foi desenvolvido para auxiliar pessoas a
            <strong className="text-neutral-500">
              {' '}
              gerenciar suas compras, controlar seus gastos e acompanhar seu
              orçamento{' '}
            </strong>
            , tornando mais fácil tomar decisões conscientes na hora de comprar.
          </Paragraph>
        </Article>

        <Article>
          <SubtitleH3>Exemplos de uso:</SubtitleH3>
          <Paragraph>
            O Bora Poupar App pode ser utilizado em diversas situações, como:
          </Paragraph>
          <ul className="list-disc space-y-1">
            <li>Supermercados;</li>
            <li>Feiras;</li>
            <li>Feiras gastronômicas;</li>
            <li>Viagens;</li>
            <li>Passeios;</li>
            <li>Compras no Brás;</li>
            <li>Compras na 25 de Março;</li>
            <li>
              Outras situações em que seja necessário acompanhar um orçament.
            </li>
          </ul>
        </Article>

        <Article>
          <h6 className="text-custom-secondary text-lg">
            Como usar o Bora Poupar App?
          </h6>
          <ol className="font-oxygen list-decimal space-y-2">
            <li>
              <p>Informe o orçamento disponível para a compra;</p>
            </li>
            <li>
              <p>Adicione o primeiro produto;</p>
            </li>
            <li>
              <p>Informe o preço do produto;</p>
            </li>
            <li>
              <p>Adicionando a quantidade de itens;</p>
            </li>
            <li>
              <p>Acompanhe o total gasto;</p>
            </li>
            <li>
              <p>Verifique quanto ainda resta do orçamento;</p>
            </li>
            <li>
              <p>Ajuste suas compras antes de chegar ao caixa;</p>
            </li>
            <li>
              <p>Confira a quantidade de itens no Carrinho;</p>
            </li>
            <li>
              <p>Exclua qualquer item da lista;</p>
            </li>
            <li>
              <p>Resete: recomeçar tudo de novo.</p>
            </li>
          </ol>
        </Article>

        <Article>
          <SubtitleH3>
            Quais são os benefícios de utilizar o Bora Poupar?
          </SubtitleH3>
          <Paragraph>
            Com o <em>Bora Poupar</em>, você consegue acompanhar seu orçamento
            disponível e seus gastos durante as compras, ajudando a manter o
            controle das suas despesas e evitando gastos acima do planejado.
          </Paragraph>
        </Article>
      </Section>
    </>
  );
};

export default ContentBoraPoupar;
