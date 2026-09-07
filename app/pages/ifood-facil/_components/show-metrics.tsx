import React from 'react';
import ItemMetric from './item-metric';
import { IMetrics } from './main-manager';

const ShowMetrics = ({ valueOfSell, taxIfood, myPrice }: IMetrics) => {
  return (
    <div className="mx-auto mt-3 w-[90%] rounded-lg bg-neutral-900 p-3 sm:w-[350px]">
      <ItemMetric label="Valor de venda no IFood" value={valueOfSell} />
      <ItemMetric label="Seu Lucro + Custo" value={myPrice} />
      <ItemMetric label="Taxa do IFood" value={taxIfood} />
    </div>
  );
};

export default ShowMetrics;
