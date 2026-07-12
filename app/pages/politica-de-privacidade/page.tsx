import { Paragraph } from '@/app/_components/article';
import {
  ArticleSections,
  SubtitleH3,
} from '@/app/_components/article-sections';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="mx-auto min-h-screen w-full p-10 lg:w-[600px]">
      <section>
        <article>
          <h2 className="text-custom-secondary font-montserrat text-center text-3xl">
            Política de Privacidade
            <div className="mx-auto mt-1 h-1 w-4/5 rounded-lg bg-white"></div>
          </h2>

          <p className="my-5">
            <span className="text-custom-secondary font-bold tracking-wide">
              Ùltima atualização:
            </span>{' '}
            <data value="05 de julho de 2026" className="italic">
              05 de julho de 2026
            </data>
          </p>
          <h3 className="my-4">
            Bem vindo ao{' '}
            <span className="text-custom-secondary font-oxygen font-bold">
              Oficina Web.
            </span>
          </h3>

          <Paragraph>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade explica como o Oficina Web utiliza as informações
            durante a navegação em nosso site.
          </Paragraph>
        </article>
      </section>

      <ArticleSections>
        <SubtitleH3>1. Sobre o Bora Poupar</SubtitleH3>
        <Paragraph>
          O <strong className="text-emerald-400"> Bora Poupar App</strong> é uma
          aplicação web desenvolvida para auxiliar usuários no controle do
          orçamento durante suas compras. Todas as informações cadastradas pelo
          usuário permanecem armazenadas localmente em seu próprio navegador.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>2. Coleta de dados pessoais</SubtitleH3>
        <Paragraph>
          O Bora Poupar{' '}
          <span className="font-bold text-emerald-600">
            não solicita cadastro, não coleta dados pessoais e não armazena
            informações dos usuários em servidores próprios.
          </span>
        </Paragraph>
        <Paragraph>Não coletamos informações como:</Paragraph>

        <ul className="mt-2 text-lg">
          <li> - Nome;</li>
          <li> - CPF;</li>
          <li> - Endereço;</li>
          <li> - Telefone;</li>
          <li> - E-mail;</li>
          <li> - Dados bancários;</li>
          <li> - Informações depagamento.</li>
        </ul>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>3. Armazenamento local (LocalStorage)</SubtitleH3>
        <Paragraph>
          Para oferecer uma melhor experiência, o Bora Poupar utiliza o recurso
          <strong className="text-emerald-400"> LocalStorage</strong> do
        </Paragraph>
        <Paragraph>
          navegador. As informações inseridas pelo usuário, como orçamento e
          lista de produtos, são armazenadas exclusivamente no dispositivo
          utilizado. Esses dados não são enviados para nossos servidores nem
          compartilhados com terceiros. O usuário pode apagar essas informações
          a qualquer momento limpando os dados de navegação do navegador ou
          utilizando os recursos da própria aplicação, quando disponíveis.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>4. Google Analytics</SubtitleH3>
        <Paragraph>
          Utilizamos o{' '}
          <span className="font-bold text-emerald-600">Google Analytics</span>
          para compreender, de forma agregada e anônima, como os visitantes
          utilizam o site.
        </Paragraph>
        <Paragraph>Essas informações podem incluir, por exemplo:</Paragraph>

        <ul className="mt-2 text-lg">
          <li> - número de visitantes;</li>
          <li> - páginas acessadas;</li>
          <li> - tempo de permanência;</li>
          <li> - tipo de dispositivo;</li>
          <li> - navegador utilizado;</li>
          <li> - país ou região aproximada.</li>
        </ul>
        <Paragraph>
          Esses dados são utilizados exclusivamente para melhorar a experiência
          dos usuários e o desempenho da aplicação. O Google Analytics pode
          utilizar cookies e tecnologias semelhantes para realizar essas
          medições.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>5. Cookies</SubtitleH3>
        <Paragraph>
          O Bora Poupar pode utilizar cookies próprios e de terceiros para:
        </Paragraph>
        <ul className="mt-2">
          <li>🟢​ Medir o desempenho do site;</li>
          <li>🟢​ Entender como os visitantes utilizam a aplicação;</li>
          <li>🟢​ Melhorar continuamente a experiência de navegação.</li>
        </ul>
        <Paragraph>
          O usuário pode desativar os cookies nas configurações do navegador.
          Entretanto, algumas funcionalidades relacionadas à medição de acesso
          poderão ser afetadas.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>6. Compartilhamento de informações</SubtitleH3>
        <Paragraph>
          Como não coletamos dados pessoais dos usuários, não vendemos,
          compartilhamos ou comercializamos informações pessoais. As informações
          estatísticas obtidas pelo Google Analytics são tratadas conforme as
          políticas de privacidade do Google.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>7. Segurança</SubtitleH3>
        <Paragraph>
          Como os dados inseridos na aplicação permanecem armazenados apenas no
          navegador do usuário, recomendamos manter o dispositivo protegido e
          evitar o acesso por pessoas não autorizadas.
        </Paragraph>
        <Paragraph>
          Embora adotemos boas práticas de desenvolvimento, nenhum sistema pode
          garantir segurança absoluta.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>8. Direitos dos usuários</SubtitleH3>
        <Paragraph>
          Nos termos da Lei Geral de Proteção de Dados (LGPD), os usuários
          possuem direitos relacionados aos seus dados pessoais.
        </Paragraph>
        <Paragraph>
          Como o Bora Poupar não realiza a coleta nem o armazenamento de dados
          pessoais em seus servidores, a maior parte das informações permanece
          sob controle exclusivo do próprio usuário, armazenadas localmente em
          seu navegador.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>9. Alterações nesta Política</SubtitleH3>
        <Paragraph>
          Esta Política de Privacidade poderá ser atualizada a qualquer momento
          para refletir alterações na aplicação, mudanças legais ou melhorias em
          nossos serviços.
        </Paragraph>
        <Paragraph>
          Recomendamos que esta página seja consultada periodicamente.
        </Paragraph>
      </ArticleSections>

      <ArticleSections>
        <SubtitleH3>10. Contato</SubtitleH3>
        <Paragraph>
          Caso tenha dúvidas sobre esta Política de Privacidade, entre em
          contato pelos canais disponibilizados no site.
        </Paragraph>
      </ArticleSections>

      <div className="border-t border-neutral-600 p-3">
        <Paragraph>
          Ao utilizar o Bora Poupar, você declara estar ciente desta Política de
          Privacidade.
        </Paragraph>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
