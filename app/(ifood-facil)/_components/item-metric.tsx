import { formatBR } from '@/app/helpers/formatCurrency';
import React from 'react';
interface ItemMetricProps {
  label: string;
  value: number;
}
const ItemMetric = ({ label, value }: ItemMetricProps) => {
  return (
    <li className="flex items-center justify-between rounded-md border border-emerald-300 bg-neutral-950 p-2">
      <span className="font-oxygen text-sm font-light tracking-widest">
        {label}:
      </span>

      <span className="font-oxygen text-2xl font-black tracking-widest text-green-400">
        {formatBR(value)}
      </span>
    </li>
  );
};

export default ItemMetric;
