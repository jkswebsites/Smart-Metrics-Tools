'use client';
import React, { useState } from 'react';
import FormTax from './form-tax';
import ShowMetrics from './show-metrics';

export interface IMetrics {
  taxIfood: number;
  myPrice: number;
  valueOfSell: number;
}
const MainManager = () => {
  const [metrics, setMetrics] = useState<IMetrics | null>(null);
  console.log(metrics);

  return (
    <>
      <FormTax setMetris={setMetrics} />
      {metrics && <ShowMetrics {...metrics} />}
    </>
  );
};

export default MainManager;
