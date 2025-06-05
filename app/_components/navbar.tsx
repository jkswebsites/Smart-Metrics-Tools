'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../constants/path-links';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden min-w-[300px] pr-4 min-[768px]:flex min-[768px]:items-center min-[768px]:justify-start min-[768px]:gap-10">
      {navLinks.map((link, index) => (
        <Link href={link.path} key={index} className={`block py-6 text-center`}>
          <span
            className={`${pathname === link.path && 'font-bold'} flex items-center justify-center text-clip`}
          >
            {pathname === link.path && (
              <link.icon className="mr-1 text-emerald-500" />
            )}
            {link.name}
          </span>

          <div
            className={`${pathname === link.path ? 'w-[30px]' : 'w-0'} mx-auto flex h-2 items-center justify-center rounded-xl bg-emerald-400`}
          ></div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
