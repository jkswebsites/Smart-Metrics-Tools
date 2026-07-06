import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="relative bottom-0 z-0 flex flex-col items-center justify-start border-t border-t-neutral-800 bg-neutral-950 py-4">
      <p className="italic">Dicas & Sugestões</p>
      <div className="flex gap-2">
        <Link
          className="flex items-center gap-2"
          target="_blank"
          title="Visite nosso Linkedin"
          href={'https://www.linkedin.com/in/jacksoncajui/'}
        >
          <FaLinkedin className="text-2xl text-emerald-400" />
        </Link>

        <Link
          className="flex items-center gap-2"
          target="_blank"
          href={'https://www.instagram.com/aliensystemcode/'}
        >
          <ImInstagram
            title="Visite nosso Instagram"
            className="text-2xl text-emerald-400"
          />
        </Link>

        <Link
          className="flex items-center gap-2"
          target="_blank"
          href={'https://www.facebook.com/aliensystemcode/'}
        >
          <FaFacebookSquare
            title="Visite nosso Facebook"
            className="text-2xl text-emerald-400"
          />
        </Link>
      </div>
      <nav className="mx-auto mt-2 flex w-4/5 items-center justify-center gap-3 lg:w-96">
        <Link href={'/pages/politica-de-privacidade'}>
          Políticas de Privacidade |
        </Link>

        <Link href={'/pages/about-us'}>Sobre Saturno apps.</Link>
      </nav>
    </footer>
  );
};

export default Footer;
