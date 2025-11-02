import { formatBR } from '@/app/helpers/formatCurrency';
import React from 'react';
interface ItemMetricProps {
  label: string;
  value: number;
}
const ItemMetric = ({ label, value }: ItemMetricProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[200px] border-b border-neutral-600 pb-2">
        <h6 className="font-oxygen text-center text-sm">{label}</h6>
        <p className="text-center text-3xl font-bold text-emerald-400">
          {formatBR(value)}
        </p>
      </div>
    </div>
  );
};

export default ItemMetric;
