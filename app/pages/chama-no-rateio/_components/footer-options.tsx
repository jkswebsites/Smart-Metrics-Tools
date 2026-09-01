import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { FaUserSecret } from 'react-icons/fa6';
import SheetContentParty from './sheet-content-party';

const FooterOptions = () => {
  return (
    <footer className="fixed bottom-0 z-10 flex w-full items-center justify-center p-3 sm:justify-end">
      <Sheet>
        <SheetTrigger className="flex w-[90%] items-center justify-center rounded-sm border bg-emerald-500 py-2 text-neutral-800 shadow-sm shadow-neutral-600 sm:w-[100px] sm:flex-col">
          <FaUserSecret size={18} />
          <span className="text-sm font-bold"> + Pessoas</span>
        </SheetTrigger>
        <SheetContentParty />
      </Sheet>
    </footer>
  );
};

export default FooterOptions;
