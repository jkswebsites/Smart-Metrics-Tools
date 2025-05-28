'use client';
import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { useContext } from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';
import { formatBR } from '@/app/helpers/formatCurrency';
const PainelData = () => {
  const { smartBuyDatas } = useContext(ContextSmartBuy);

  return (
    <div className="min-h-[200px mx-auto my-4 w-[95%] space-y-4">
      <div className="flex w-full items-center justify-between rounded-lg border border-neutral-500 bg-neutral-900 px-4 py-2">
        <span className="text-sm text-neutral-300">Meu valor total:</span>
        <div className="flex items-center justify-center">
          <GiMoneyStack className="mr-3 text-2xl text-green-400" />
          <span className="text-2xl font-bold tracking-widest text-green-400">
            {formatBR(smartBuyDatas.valueTotal)}
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between rounded-lg border border-neutral-500 bg-neutral-900 px-4 py-2">
        <span className="text-sm text-neutral-300">Valor Atual:</span>
        <div className="flex items-center justify-center">
          <MdOutlineAttachMoney className="mr-3 text-2xl text-yellow-400" />
          <span className="text-2xl font-bold tracking-widest text-yellow-400">
            {formatBR(smartBuyDatas.valueCurrent)}
          </span>
        </div>
      </div>

      <div className="flex w-full items-center justify-between rounded-lg border border-neutral-500 bg-neutral-900 px-4 py-2">
        <span className="text-sm text-neutral-300">Total Gasto:</span>
        <div className="flex items-center justify-center">
          <FaMoneyBillTransfer className="mr-3 text-2xl text-red-400" />
          <span className="text-2xl font-bold tracking-widest text-red-400">
            {formatBR(smartBuyDatas.totalSpent)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PainelData;
