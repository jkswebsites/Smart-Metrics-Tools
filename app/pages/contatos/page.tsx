import Image from 'next/image';
import React from 'react';
import { SubtitleH3 } from '@/app/_components/article-sections';
import imgSaturno from '@/app/assets/images/saturno-app.png';
import { Paragraph } from '@/app/_components/article';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const ContactPage = () => {
  return (
    <main className="min-h-screen px-3">
      <div className="relative z-0 h-[150px] w-full overflow-hidden">
        <Image
          src={imgSaturno}
          alt="Oficina Web"
          className="relative -top-[50px]"
          width={0}
          height={0}
        />
      </div>
      <div className="relative z-10 mx-auto -mt-7 w-[99%] rounded-t-2xl bg-neutral-950 px-10 pt-3 lg:w-[600px]">
        <SubtitleH3>📬 Contatos:</SubtitleH3>
        <Paragraph>
          Tem alguma dúvida, sugestão ou encontrou um erro?{' '}
        </Paragraph>
        <Paragraph>Entre em contato por um dos canais abaixo.</Paragraph>

        <ul className="mt-4 [&>li]:mt-3 [&>li]:rounded-lg [&>li]:bg-neutral-800 [&>li]:p-2">
          <li>📧 aliensystemcode@gmail.com</li>
          <li>
            <Link
              className="flex items-center gap-2"
              target="_blank"
              title="Visite nosso Linkedin"
              href={'https://www.linkedin.com/in/jacksoncajui/'}
            >
              <FaLinkedin className="text-custom-secondary text-2xl" />
              Linkedin
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2"
              target="_blank"
              href={'https://www.instagram.com/aliensystemcode/'}
            >
              <ImInstagram
                title="Visite nosso Instagram"
                className="text-custom-secondary text-2xl"
              />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2"
              target="_blank"
              href={'https://www.facebook.com/aliensystemcode/'}
            >
              <FaFacebookSquare
                title="Visite nosso Facebook"
                className="text-custom-secondary text-2xl"
              />
              Facebook
            </Link>
          </li>
        </ul>
        <div className="py-8">
          <h3 className="mb-3">💡 Como podemos ajudar?</h3>
          <ul>
            <li>• Relatar bugs</li>
            <li>• Sugerir ferramentas</li>
            <li>• Tirar dúvidas</li>
            <li>• Enviar feedback</li>
          </ul>
          <Paragraph>Obrigado por utilizar o OficinaWeb! ❤️</Paragraph>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
