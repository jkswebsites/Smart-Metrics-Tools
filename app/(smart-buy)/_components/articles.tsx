import PrimaryTitles, { PrimaryTitlesProps } from '@/app/_components/primary-titles'
import React from 'react'
import { BsCart4 } from "react-icons/bs";


const titlesData: PrimaryTitlesProps = {
  title: "Seu Orçamento",
  icon: BsCart4,
  subtitle: "Você sempre no controle"
}
const Articles = () => {
  return (
    <article className='w-4/5 mx-auto sm:w-[500px]'>
      <PrimaryTitles {...titlesData}/>
      <section className='mt-5'>
            <p>
              <strong className='text-yellow-600'>
                Seu Orçamento 
              </strong> é um aplicativo para ajudar pessoas há gerenciar
                suas compras, evitando que o valor passe do valor que você tem em mãos,
                como esse aplicativo suas compras sempre estarão sobre controle.
            </p>
      </section>

      <section className='mt-5'>
            <p>
            Em um mundo cada vez mais complexo e dinâmico, a educação financeira se tornou uma habilidade essencial para a vida cotidiana. Com a crescente oferta de produtos financeiros, a facilidade de acesso ao crédito e a necessidade de planejamento para o futuro, entender como gerenciar suas finanças pessoais é fundamental. Neste artigo, vamos explorar a importância da educação financeira, suas principais áreas e dicas práticas para melhorar sua saúde financeira.
            </p>
      </section>

      <section className='mt-5'>
          <h6 className='text-yellow-600'>
            O que é Educação Financeira?
          </h6>
            <p>
                Educação financeira é o processo de adquirir conhecimentos e habilidades que permitem a uma pessoa tomar decisões informadas sobre suas finanças. Isso inclui entender conceitos como orçamento, poupança, investimento, crédito e dívidas. A educação financeira capacita os indivíduos a gerenciar melhor seus recursos, evitando armadilhas financeiras e promovendo um futuro mais seguro.
            </p>
      </section>

      <section className='mt-5'>
            <h6 className='text-yellow-600'>
                Por que a Educação Financeira é Importante?
            </h6>
            <p>
                Tomada de Decisões Conscientes: Compreender os princípios financeiros ajuda as pessoas a tomar decisões mais informadas sobre gastos, investimentos e economias. Isso é crucial em um mundo onde as opções são vastas e muitas vezes confusas.
            </p>
      </section>

      <section className='mt-5'>
            <h3 className='text-yellow-600 my-2'>
                Por que a Educação Financeira é Importante?
            </h3>
            <p>
              <span className='text-yellow-600'>Tomada de Decisões Conscientes:</span> Compreender os princípios financeiros ajuda as pessoas a tomar decisões mais informadas sobre gastos, investimentos e economias. Isso é crucial em um mundo onde as opções são vastas e muitas vezes confusas.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'>Planejamento para o Futuro: </span>
                A educação financeira permite que as pessoas planejem para eventos futuros, como aposentadoria, compra de uma casa ou educação dos filhos. Um bom planejamento financeiro pode garantir uma vida mais tranquila e segura.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Aumento da Riqueza: </span>
              Entender como investir e fazer o dinheiro trabalhar para você é uma habilidade valiosa. A educação financeira ensina sobre diferentes tipos de investimentos e como diversificar sua carteira.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Redução do Estresse Financeiro: </span>
              A insegurança financeira é uma das principais fontes de estresse na vida moderna. Ter um plano financeiro e saber como gerenciá-lo pode reduzir significativamente esse estresse.
            </p>
      </section>

      <section className='mt-5'>
            <h6 className='text-3xl font-black text-neutral-400'>
                Principais Áreas da Educação Financeira
            </h6>
            <p>
              <span className='text-yellow-600'> Redução do Estresse Financeiro: </span>
              A insegurança financeira é uma das principais fontes de estresse na vida moderna. Ter um plano financeiro e saber como gerenciá-lo pode reduzir significativamente esse estresse.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Orçamento: </span>
              Criar e manter um orçamento é a base da saúde financeira. Um orçamento ajuda a rastrear receitas e despesas, permitindo que você veja onde está gastando e onde pode economizar.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Investimentos: </span>
              Investir é uma maneira eficaz de aumentar seu patrimônio ao longo do tempo. Compreender os diferentes tipos de investimentos, como ações, títulos e imóveis, é fundamental para construir riqueza.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Crédito e Dívidas: </span>
              Saber como funciona o crédito e como gerenciar dívidas é essencial. Isso inclui entender como as pontuações de crédito funcionam e como evitar dívidas excessivas.
            </p>
      </section>

      <section className='mt-5'>
            <p>
              <span className='text-yellow-600'> Aposentadoria: </span>
              Planejar a aposentadoria é uma parte importante da educação financeira. Compreender as opções de aposentadoria, como planos de previdência e contas de aposentadoria, pode ajudar a garantir um futuro confortável.
            </p>
      </section>
    </article>
  )
}

export default Articles
