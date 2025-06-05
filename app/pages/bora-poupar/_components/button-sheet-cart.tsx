import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BsCart4 } from 'react-icons/bs';
import CartItems from './cart-items';

const ButtonSheetCart = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:scale-110">
        <div className="rounded-md bg-emerald-500 p-3">
          <BsCart4 className="mx-auto text-2xl text-neutral-800" />
        </div>
        <span className="text-xs">Compras</span>
      </SheetTrigger>
      <SheetContent className="border-neutral- border-dotted bg-neutral-800 p-0 md:px-2">
        <SheetHeader>
          <SheetTitle className="text-center text-emerald-400">
            Bora Poupar ?
          </SheetTitle>
          <SheetDescription className="text-center text-neutral-400">
            Gerencie suas compras, nunca mais passe perengue no caixa.
          </SheetDescription>
        </SheetHeader>
        <CartItems />
      </SheetContent>
    </Sheet>
  );
};

export default ButtonSheetCart;
