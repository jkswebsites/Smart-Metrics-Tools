'use client';
import React, { useContext } from 'react';
import ShowMetrics from './show-metrics';
import FormAddValueInitial from './form-add-value-initial';
import { BoraPouparContext } from '@/app/context/boraPouparContext';
import FormAddCart from './form-add-cart';
import NavFooter from './nav-footer';

const MainManager = () => {
  const { metrics } = useContext(BoraPouparContext);

  return (
    <div className="mx-auto sm:mt-14 sm:w-[500px]">
      <ShowMetrics />
      <FormAddValueInitial />
      {metrics.totalValue > 0 && <FormAddCart />}
      <NavFooter />
    </div>
  );
};

export default MainManager;
