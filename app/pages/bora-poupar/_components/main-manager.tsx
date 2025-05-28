import React from 'react';
import ShowMetrics from './show-metrics';
import FormAddValueInitial from './form-add-value-initial';
import { BoraPouparContextProvider } from '@/app/context/boraPouparContext';
import FormAddCart from './form-add-cart';

const MainManager = () => {
  return (
    <div className="mx-auto sm:mt-14 sm:w-[500px]">
      <BoraPouparContextProvider>
        <ShowMetrics />
        <FormAddValueInitial />
        <FormAddCart />
      </BoraPouparContextProvider>
    </div>
  );
};

export default MainManager;
