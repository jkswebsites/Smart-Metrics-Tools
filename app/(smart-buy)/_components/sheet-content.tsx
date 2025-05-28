import React from 'react';
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useContext } from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';
import { formatBR } from '@/app/helpers/formatCurrency';
import { BsCart4 } from 'react-icons/bs';
import ButtonDeleteCart from './button-delete-cart';
const SheetContentMenu = () => {
  const { cartSmartBuy } = useContext(ContextSmartBuy);

  return (
    <SheetContent className="bg-neutral-900">
      <SheetHeader>
        <SheetTitle className="text-2xl text-yellow-500">
          <h2 className="flex items-center justify-center text-4xl">
            Smart <BsCart4 className="text-white" /> Buy
          </h2>
        </SheetTitle>
        <SheetDescription className="text-center text-neutral-300">
          Lista de Items adicionados ao carrinho
        </SheetDescription>
      </SheetHeader>
      <div className="mx-auto mt-7 h-16 w-[95%]">
        {cartSmartBuy.length > 0 ? (
          <>
            <div className="relative mb-4 flex h-16 w-28 items-center justify-center gap-x-2 rounded-lg p-1">
              <span className="absolute -right-2 bottom-1 text-sm font-black text-yellow-500">
                Total:
              </span>
              <span className="text-2xl font-black">
                {formatBR(
                  cartSmartBuy.reduce((acc, curr) => acc + curr.total, 0)
                )}
              </span>
            </div>
            <ul className="h-[400px] space-y-3 overflow-y-auto">
              {cartSmartBuy.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-yellow-500 bg-neutral-800 px-2"
                >
                  <span className="font-bold text-yellow-500">{item.item}</span>
                  <div className="flex items-center justify-between py-2">
                    <span>{formatBR(item.valueItem)}</span>
                    <span>X</span>
                    <span>{item.amountItem}</span>
                    <span>=</span>
                    <span>{formatBR(item.total)}</span>
                    <ButtonDeleteCart nameItem={item.item} />
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-center text-neutral-500">
            Não há item no carrinho!
          </p>
        )}
      </div>
    </SheetContent>
  );
};

export default SheetContentMenu;
