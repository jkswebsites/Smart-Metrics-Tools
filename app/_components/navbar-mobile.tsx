import React from 'react';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import ContainerLinks from './container-link';
const NavbarMobile = () => {
  return (
    <SheetContent className="border-dotted border-neutral-500 bg-neutral-800">
      <SheetHeader>
        <SheetTitle className="text-emerald-500">
          Smart Metrics Tools
        </SheetTitle>
        <SheetDescription className="text-white">
          Criamos diversas ferramentas web para facilitar sua vida, confira nos
          link abaixo.
        </SheetDescription>
      </SheetHeader>
      <ContainerLinks />
    </SheetContent>
  );
};

export default NavbarMobile;
