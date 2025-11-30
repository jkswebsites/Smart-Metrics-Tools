import { formatBR } from '@/app/helpers/formatCurrency';
import React from 'react';
import { IconType } from 'react-icons';
import { tv } from 'tailwind-variants';

const cardMetric = tv({
  base: 'mx-auto mt-5 flex to-neutral-900 size-24 h-[60px] w-full px-7 items-center justify-between rounded-lg bg-gradient-to-r',
  variants: {
    color: {
      primary: 'from-green-500 ',
      secundary: 'from-red-400',
      dark: 'from-neutral-700',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
const iconCard = tv({
  base: 'rounded-full p-3 text-2xl',
  variants: {
    color: {
      primary: 'bg-emerald-700',
      secundary: 'bg-red-500',
      dark: 'bg-neutral-900',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
interface ItemMetricProps {
  label: string;
  amount: number;
  icon: IconType;
  card: 'primary' | 'secundary' | 'dark';
}
const ItemMetric = ({ label, amount, icon: Icon, card }: ItemMetricProps) => {
  return (
    <div className={cardMetric({ color: card })}>
      <div>
        <p className="font-montserrat">{label}</p>
        <p className="font-oxygen -mt-2 text-2xl font-bold">
          {formatBR(amount)}
        </p>
      </div>
      <div
        className={iconCard({
          color: card,
        })}
      >
        <Icon />
      </div>
    </div>
  );
};

export default ItemMetric;
