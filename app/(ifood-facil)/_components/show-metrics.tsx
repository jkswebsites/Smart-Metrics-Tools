import React from 'react';
import ItemMetric from './item-metric';
import { IMetrics } from './main-manager';

const ShowMetrics = ({ valueOfSell, taxIfood, myPrice }: IMetrics) => {
  return (
    <div className="mx-auto mt-3 w-[90%] rounded-lg bg-neutral-900 p-3 sm:w-[350px]">
      <h2 className="text-center font-sans text-lg font-bold tracking-wide">
        Resultado
      </h2>

      <ul className="mt-4 space-y-3">
        <ItemMetric label="Valor de venda no IFood" value={valueOfSell} />
        <ItemMetric label="Seu Lucro + Custo" value={myPrice} />
        <ItemMetric label="Taxa do IFood" value={taxIfood} />
      </ul>
    </div>
  );
};

export default ShowMetrics;
