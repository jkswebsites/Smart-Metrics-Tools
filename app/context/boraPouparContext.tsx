'use client';
import React, { createContext, useEffect, useState } from 'react';
import { IReactNode } from '../interfaces/react-node';
import {
  BoraPoupar,
  ContextBoraPoupar,
} from './interfaces/bora-poupar-context';
import { initialState } from './constants/inital-states-bora-poupar';
import { checkIfWindowIsUndefined } from '../helpers/storage-manager/checkWindow';

export const BoraPouparContext = createContext<ContextBoraPoupar>({
  metrics: initialState,
  addValueTotal: () => {},
});

export const BoraPouparContextProvider = ({ children }: IReactNode) => {
  const [metrics, setMetrics] = useState<BoraPoupar>(initialState);
  const [callStorage, setCallStorage] = useState<boolean>(false);

  const addValueTotal = (totalValue: number) => {
    if (checkIfWindowIsUndefined()) {
      const metricsStorage = sessionStorage.getItem('metrics-data');

      if (metricsStorage) {
        const metricsData: BoraPoupar = JSON.parse(metricsStorage);
        const upadateMetrics: BoraPoupar = {
          ...metricsData,
          totalValue: metricsData.totalValue + totalValue,
          valueCurrent: metricsData.valueCurrent + totalValue,
        };

        sessionStorage.setItem('metrics-data', JSON.stringify(upadateMetrics));
      } else {
        const upadateMetrics: BoraPoupar = {
          ...metrics,
          totalValue,
          valueCurrent: totalValue,
        };
        sessionStorage.setItem('metrics-data', JSON.stringify(upadateMetrics));
      }
    }
    setCallStorage(true);
  };
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const metricsStorage = sessionStorage.getItem('metrics-data');
        if (metricsStorage) {
          const parseMetrics: BoraPoupar = JSON.parse(metricsStorage);
          setMetrics(parseMetrics);
        } else {
          setMetrics(initialState);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCallStorage(false);
    }
  }, [callStorage]);
  return (
    <BoraPouparContext.Provider value={{ metrics, addValueTotal }}>
      {children}
    </BoraPouparContext.Provider>
  );
};
