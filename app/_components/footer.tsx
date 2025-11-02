import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative bottom-0 flex flex-col items-center justify-start py-4">
      <Link
        className="flex items-center gap-2"
        href={'https://www.linkedin.com/in/jacksoncajui/'}
      >
        <FaLinkedin className="text-2xl text-emerald-400" />
        <span className="italic">Dicas & Sugestões</span>
      </Link>
    </footer>
  );
};

export default Footer;
