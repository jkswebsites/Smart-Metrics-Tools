'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import { formatBR } from '@/app/helpers/formatCurrency';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { BsCartXFill } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';

const CartItems = () => {
  const { metrics, deleteItem } = useContext(BoraPouparContext);

  return (
    <div className="mx-auto mt-7 rounded-md p-2">
      {metrics.cart.length > 0 ? (
        <div className="space-y-2">
          {metrics.cart.map((product, index) => (
            <div key={index} className="rounded-xl bg-neutral-900 p-2">
              <p className="font-bold tracking-wide text-emerald-400">
                <MdOutlineShoppingCartCheckout className="mr-2 inline-block rounded-full text-2xl text-neutral-300" />
                {product.item}
              </p>
              <div className="flex items-center justify-between">
                <div className="space-x-2">
                  <span className="font-bold text-neutral-200">
                    {product.price}
                  </span>
                  <span>X</span>
                  <span className="font-bold text-neutral-200">
                    {product.amount}
                  </span>
                  <span>=</span>
                  <span className="font-bold text-neutral-200">
                    {formatBR(product.price * product.amount)}
                  </span>
                </div>
                <Button
                  variant={'destructive'}
                  onClick={() =>
                    deleteItem(product.id, product.price * product.amount)
                  }
                >
                  <BsCartXFill />
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-sm italic">
          <GiShoppingCart className="mx-auto text-[150px] text-emerald-500" />
          Não há items no carrinho!
        </p>
      )}
    </div>
  );
};

export default CartItems;
