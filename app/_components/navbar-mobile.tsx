import React from 'react';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import ContainerLinks from './container-link';
import { SiSaturn } from 'react-icons/si';
const NavbarMobile = () => {
  return (
    <SheetContent className="border-dotted border-neutral-500 bg-neutral-800">
      <SheetHeader>
        <SheetTitle>
          <div className="flex flex-col items-center justify-center">
            <SiSaturn className="text-5xl text-neutral-50 drop-shadow-lg" />
            <p className="text-2xl">
              <span className="font-oxygen text-custom-secondary font-bold">
                Oficina
              </span>
              <span className="font-thin text-neutral-50">Web</span>
            </p>
          </div>
        </SheetTitle>
        <SheetDescription>
          <p className="-mt-2 text-center italic text-white">
            Facilitando sua vida com aplicativos.
          </p>
        </SheetDescription>
      </SheetHeader>
      <ContainerLinks />
    </SheetContent>
  );
};

export default NavbarMobile;
