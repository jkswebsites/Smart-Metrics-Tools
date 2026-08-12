import { ContextChamaNoRateio } from '@/app/context/chamaNoRateioContext';
import React from 'react';
import ScreenMetrics from './screen-metrics';
import FormAddItem from './form-add-item';
import ListItem from './list-item';

const FactorRateio = () => {
  return (
    <div>
      <ContextChamaNoRateio>
        <ScreenMetrics />
        <FormAddItem />
        <ListItem />
      </ContextChamaNoRateio>
    </div>
  );
};

export default FactorRateio;
