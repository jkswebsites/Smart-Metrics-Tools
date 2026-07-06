import { Paragraph } from '@/app/_components/article';
import {
  ArticleSections,
  SubtitleH3,
} from '@/app/_components/article-sections';
import Image from 'next/image';
import React from 'react';
import imgSaturno from '@/app/assets/images/saturno-app.png';
const AboutSaturnoApp = () => {
  return (
    <main className="min-h-screen">
      <div className="relative z-0 h-[150px] w-full overflow-hidden">
        <Image
          src={imgSaturno}
          alt="Saturno Apps Web"
          className="relative -top-[50px]"
          width={0}
          height={0}
        />
      </div>
      <div className="relative z-10 mx-auto -mt-7 w-[99%] rounded-t-2xl bg-neutral-950 px-10 lg:w-[600px]">
        <ArticleSections>
          <SubtitleH3>Sobre à Saturno Apps.</SubtitleH3>
          <Paragraph>
            À <strong>Saturno Apps</strong> é uma plataforma criada com o
            propósito de desenvolver ferramentas web simples, práticas e
            acessíveis que ajudem as pessoas a resolver problemas do dia a dia.
          </Paragraph>
          <Paragraph>
            Acreditamos que a tecnologia deve facilitar tarefas, economizar
            tempo e oferecer soluções intuitivas para situações comuns, sem
            exigir conhecimento técnico ou instalações complexas.
          </Paragraph>
          <Paragraph>
            Nossa missão é criar aplicações que sejam rápidas, fáceis de usar e
            realmente úteis, permitindo que qualquer pessoa aproveite seus
            recursos diretamente pelo navegador.
          </Paragraph>
          <Paragraph>
            A primeira ferramenta da plataforma foi desenvolvida para auxiliar
            no controle de gastos durante as compras, ajudando o usuário a
            acompanhar seu orçamento em tempo real e tomar decisões mais
            conscientes.
          </Paragraph>
          <Paragraph>
            Este é apenas o começo. À Satruno Apps continuará evoluindo com
            novas ferramentas voltadas para organização, planejamento,
            produtividade e outras necessidades do cotidiano, sempre com foco em
            oferecer soluções gratuitas, eficientes e de fácil utilização.
          </Paragraph>
          <Paragraph>
            Agradecemos por utilizar À Satruno Apps e esperamos que nossas
            ferramentas contribuam para tornar suas atividades mais simples e
            práticas.
          </Paragraph>
        </ArticleSections>
      </div>
    </main>
  );
};

export default AboutSaturnoApp;
