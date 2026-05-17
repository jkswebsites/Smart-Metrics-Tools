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
        <SheetTitle className="text-emerald-500">Mundo dos Apps.</SheetTitle>
        <SheetDescription className="text-white">
          facilitando sua vida com aplicaticos.
        </SheetDescription>
      </SheetHeader>
      <ContainerLinks />
    </SheetContent>
  );
};

export default NavbarMobile;
