'use client';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import React, { useContext } from 'react';
import ItemMetric from './item-metric';
import { MdOutlineMoneyOffCsred, MdAttachMoney } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';

const ShowMetrics = () => {
  const { metrics } = useContext(BoraPouparContext);
  return (
    <div className="mx-auto w-[90%] sm:w-[500px]">
      <ItemMetric
        label="Valor restante:"
        amount={metrics.valueCurrent}
        icon={MdAttachMoney}
        card="primary"
      />

      <ItemMetric
        label="Total gasto:"
        amount={metrics.totalSpent}
        icon={MdOutlineMoneyOffCsred}
        card="secundary"
      />

      <ItemMetric
        label="Valor inícial:"
        amount={metrics.totalValue}
        icon={GiMoneyStack}
        card="dark"
      />
    </div>
  );
};

export default ShowMetrics;
