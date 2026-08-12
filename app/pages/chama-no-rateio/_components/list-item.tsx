'use client';
import { ChamaNoRateioContext } from '@/app/context/chamaNoRateioContext';
import { formatBR } from '@/app/helpers/formatCurrency';
import React, { useContext } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const ListItem = () => {
  const { cart } = useContext(ChamaNoRateioContext);

  return (
    <div className="mx-auto my-2 w-4/5 p-2 sm:w-[300px]">
      <div className="flex items-center justify-center gap-1">
        <div className="mt-1 h-1 w-[20%] rounded-lg bg-gradient-to-r from-neutral-600 via-neutral-300 to-transparent"></div>
        <h6 className="font-oxygen w-fit font-bold text-neutral-500">
          Lista de Itens
        </h6>
        <div className="mt-1 h-1 w-[20%] rounded-lg bg-gradient-to-r from-neutral-600 via-neutral-300 to-transparent"></div>
      </div>
      {cart.length > 0 && (
        <ul className="mt-4 max-h-[300px] space-y-2 overflow-auto p-2">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex flex-col rounded-sm border border-neutral-700 bg-neutral-800 p-1"
            >
              <div className="flex items-center justify-between pr-3">
                <p>
                  <span className="text-sm font-bold tracking-wide text-green-400">
                    Item:
                  </span>
                  {'  '}
                  <span className="text-sm text-neutral-300">
                    {item.nameItem}
                  </span>
                </p>
                <button
                  title="remover item da lista"
                  className="text-red-500 hover:scale-125"
                >
                  <RiDeleteBin5Fill />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <p className="space-x-1">
                  <span className="text-sm">{item.quantity}</span>
                  <span className="text-sx">x</span>
                  <span className="font-montserrat text-xs">
                    {formatBR(item.price)}
                  </span>
                  <span className="text-xs">=</span>
                </p>
                <span className="rounded-lg bg-emerald-500 p-1 text-xs font-bold text-neutral-800">
                  {formatBR(item.quantity * item.price)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListItem;
