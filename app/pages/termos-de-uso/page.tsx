import { Paragraph } from '@/app/_components/article';
import {
  ArticleSections,
  SubtitleH3,
} from '@/app/_components/article-sections';
import React from 'react';

const TermsOfUse = () => {
  return (
    <main className="min-h-screen">
      <div className="px-3">
        <ArticleSections>
          <SubtitleH3>Termos de Uso</SubtitleH3>
          <p>
            <strong>Ùltima :</strong>
            <data value="06/07/2026" className="text-neutral-500">
              {' '}
              06 de julho de 2026
            </data>
          </p>

          <Paragraph>
            Bem-vindo ao <strong>Saturno web app.</strong>
          </Paragraph>

          <Paragraph>
            Ao acessar e utilizar esta aplicação, você concorda com os presentes
            Termos de Uso. Caso não concorde com qualquer uma das condições
            descritas, recomendamos que não utilize os serviços
            disponibilizados.
          </Paragraph>
        </ArticleSections>
        <ArticleSections>
          <SubtitleH3>1. Objetivo da aplicação</SubtitleH3>
          <Paragraph>
            O Bora Poupar disponibiliza ferramentas web gratuitas com o objetivo
            de auxiliar usuários na realização de tarefas do dia a dia,
            oferecendo soluções simples, práticas e acessíveis diretamente pelo
            navegador.
          </Paragraph>

          <SubtitleH3>2. Utilização da aplicação</SubtitleH3>
          <Paragraph>
            O usuário é livre para utilizar as ferramentas disponibilizadas de
            forma gratuita e para fins pessoais ou profissionais, desde que
            respeite a legislação vigente e estes Termos de Uso. É proibida a
            utilização da aplicação para atividades ilícitas, fraudulentas ou
            que possam comprometer o funcionamento do serviço.
          </Paragraph>

          <SubtitleH3>3. Armazenamento das informações</SubtitleH3>
          <Paragraph>
            As informações inseridas nas ferramentas são armazenadas
            exclusivamente no navegador do usuário por meio do LocalStorage. O
            Bora Poupar não realiza o armazenamento dessas informações em
            servidores próprios e não possui acesso aos dados cadastrados pelo
            usuário. O usuário é responsável pela preservação das informações
            armazenadas em seu dispositivo.
          </Paragraph>

          <SubtitleH3>4. Disponibilidade do serviço</SubtitleH3>
          <Paragraph>
            Buscamos manter a aplicação disponível e funcionando corretamente.
            Entretanto, não garantimos disponibilidade ininterrupta e poderemos
            realizar atualizações, manutenções ou alterações sem aviso prévio.
          </Paragraph>

          <SubtitleH3>5. Limitação de responsabilidade</SubtitleH3>
          <Paragraph>
            As ferramentas disponibilizadas têm caráter informativo e de apoio à
            organização e ao planejamento. Embora sejam desenvolvidas com
            cuidado, o Bora Poupar não garante que os resultados estejam livres
            de erros ou sejam adequados para todas as situações. O usuário é
            responsável pelas decisões tomadas com base nas informações
            fornecidas pela aplicação. 6. Propriedade intelect
          </Paragraph>

          <SubtitleH3>6. Propriedade intelectual</SubtitleH3>
          <Paragraph>
            Todo o conteúdo da plataforma, incluindo textos, layout, identidade
            visual, código-fonte (quando não indicado em contrário), logotipos e
            demais elementos, é protegido pela legislação aplicável de
            propriedade intelectual. É proibida a reprodução, distribuição ou
            utilização desses conteúdos sem autorização, exceto quando permitido
            por lei.
          </Paragraph>

          <SubtitleH3>7. Alterações destes Termos</SubtitleH3>
          <Paragraph>
            Estes Termos de Uso poderão ser atualizados a qualquer momento para
            refletir melhorias na plataforma, alterações legais ou mudanças em
            seus serviços. A versão mais recente estará sempre disponível nesta
            página.
          </Paragraph>

          <SubtitleH3>8. Legislação aplicável</SubtitleH3>
          <Paragraph>
            Caso tenha dúvidas sobre estes Termos de Uso, utilize os canais de
            contato disponibilizados na página Contato. página.
          </Paragraph>
        </ArticleSections>

        <div className="border-t border-neutral-600">
          <Paragraph>
            Ao utilizar o Bora Poupar, você declara que leu, compreendeu e
            concorda com estes Termos de Uso.
          </Paragraph>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
