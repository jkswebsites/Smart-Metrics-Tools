'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import { formatBR } from '@/app/helpers/formatCurrency';
import React, { useContext } from 'react';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';

const ShowMetrics = () => {
  const { metrics } = useContext(BoraPouparContext);
  return (
    <div className="mx-auto my-4 h-[170px] w-[95%] space-y-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 shadow-sm shadow-neutral-700">
      <div className="mx-auto">
        <p className="mx-auto w-52 text-sm italic tracking-tighter text-neutral-300">
          Valor que resta para gastar:
        </p>
        <p className="-mt-2 flex items-center justify-center gap-1 text-center text-3xl font-bold text-green-600">
          {formatBR(metrics.valueCurrent)}
          <FaMoneyBillTransfer className="text-green-300" />
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="space-x-2">
            <GiTakeMyMoney className="inline-block text-3xl text-red-400" />

            <span className="text-sm">Total gasto:</span>
          </p>

          <span className="rounded-lg bg-red-500 px-1">
            {formatBR(metrics.totalSpent)}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-dotted py-2">
          <p className="space-x-3">
            <GiMoneyStack className="inline-block w-6 text-green-500" />

            <span className="text-xs">Valor inícial:</span>
          </p>

          <span className="rounded-lg bg-green-600 px-1">
            {formatBR(metrics.totalValue)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowMetrics;
