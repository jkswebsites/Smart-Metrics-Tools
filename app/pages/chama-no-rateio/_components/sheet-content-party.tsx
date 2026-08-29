import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Image from 'next/image';
import React from 'react';
import imgChurras from '@/app/assets/images/chama-no rateio.png';
import FactorPeople from './factor-people';

const SheetContentParty = () => {
  return (
    <SheetContent className="bg-neutral-900 p-0">
      <Image
        src={imgChurras}
        alt="Churrasco do Boi"
        className="z-10 block w-full"
        priority
      />
      <div className="relative z-20 mx-auto -mt-14 h-full w-full rounded-lg bg-neutral-950 p-3 drop-shadow-lg">
        {' '}
        <SheetHeader>
          <SheetTitle className="text-center text-neutral-100">
            Participantes do Rateio
          </SheetTitle>
          <SheetDescription className="text-green-400"></SheetDescription>
        </SheetHeader>
        <FactorPeople />
      </div>
    </SheetContent>
  );
};

export default SheetContentParty;
