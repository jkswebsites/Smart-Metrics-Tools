import React from 'react';
import { navLinks } from '../constants/path-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SheetClose } from '@/components/ui/sheet';

const ContainerLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <nav className="mt-[90px] space-y-2">
      {navLinks.length > 0 &&
        navLinks.map((link, index) => {
          return (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`${isActive(link.path) ? 'bg-emerald-500 text-neutral-900' : 'bg-neutral-950 hover:bg-neutral-900 [&>a]:text-emerald-500'} flex items-center gap-x-3 rounded-sm p-2 transition-all`}
              >
                <link.icon className="text-2xl" />
                <span className="font-bold">{link.name}</span>
              </Link>
            </SheetClose>
          );
        })}
    </nav>
  );
};

export default ContainerLinks;
