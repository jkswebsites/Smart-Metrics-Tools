'use client';
import { ChamaNoRateioContext } from '@/app/context/chamaNoRateioContext';
import { formatBR } from '@/app/helpers/formatCurrency';
import React, { useContext } from 'react';
interface IListItem {
  label: string;
  value: number;
  isDecimal: boolean;
}
const ItemList = ({ label, value, isDecimal }: IListItem) => {
  return (
    <li className="flex h-9 items-center justify-between gap-2 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800 pr-2">
      <div className="item-center flex h-full w-[50%] items-center rounded-lg bg-gradient-to-r from-emerald-400 pl-2 text-sm text-neutral-800">
        <span className="font-oxygen font-bold tracking-wide text-white">
          {label}
        </span>
      </div>
      <span className="font-montserrat">
        {isDecimal ? formatBR(value) : value}
      </span>
    </li>
  );
};
const ScreenMetrics = () => {
  const { metrics } = useContext(ChamaNoRateioContext);
  const { valueTotal, totalByPerson, quantityPerson } = metrics;

  return (
    <div className="mx-auto w-full sm:w-4/5">
      <ul className="mt-2 flex flex-col gap-1">
        <ItemList label="Valor Total:" value={valueTotal} isDecimal={true} />
        <ItemList
          label="Total para Cada:"
          value={totalByPerson}
          isDecimal={true}
        />
        <ItemList
          label="Participantes:"
          value={quantityPerson}
          isDecimal={false}
        />
      </ul>
    </div>
  );
};

export default ScreenMetrics;
