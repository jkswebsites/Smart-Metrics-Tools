import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';
import { FaUserSecret } from 'react-icons/fa6';
import SheetContentParty from './sheet-content-party';

const FooterOptions = () => {
  return (
    <footer className="fixed bottom-10 right-3 z-20 h-6 p-2">
      <Sheet>
        <SheetTrigger className="flex flex-col items-center justify-center rounded-lg bg-emerald-400 p-1 text-neutral-900">
          <FaUserSecret size={18} />
          <span className="text-[7px] font-bold">+ Pessoas</span>
        </SheetTrigger>
        <SheetContentParty />
      </Sheet>
    </footer>
  );
};

export default FooterOptions;
