'use client';
import React, { createContext, useEffect, useState } from 'react';
import { IReactNode } from '../interfaces/react-node';
import {
  BoraPoupar,
  ContextBoraPoupar,
} from './interfaces/bora-poupar-context';
import { initialState } from './constants/inital-states-bora-poupar';
import { checkIfWindowIsUndefined } from '../helpers/storage-manager/checkWindow';
import { IFormAddCart } from '../pages/bora-poupar/_components/form-add-cart';

export const BoraPouparContext = createContext<ContextBoraPoupar>({
  metrics: initialState,
  addValueTotal: () => {},
  addItemCart: () => {},
  resetAll: () => {},
  deleteItem: () => {},
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
  const updateMetrics = () => {
    if (checkIfWindowIsUndefined()) {
      const metricsStorage = sessionStorage.getItem('metrics-data');
      if (metricsStorage) {
        const parseMetrics: BoraPoupar = JSON.parse(metricsStorage);
        const calculateTotalCart = parseMetrics.cart.reduce(
          (acc, curr) => curr.price * curr.amount + acc,
          0
        );

        const managerCart: BoraPoupar = {
          ...parseMetrics,
          valueCurrent: parseMetrics.totalValue - calculateTotalCart,
          totalSpent: calculateTotalCart,
        };

        sessionStorage.setItem('metrics-data', JSON.stringify(managerCart));
        setCallStorage(true);
      }
    }
  };
  const addItemCart = (dataCart: IFormAddCart) => {
    if (checkIfWindowIsUndefined()) {
      const metricsStorage = sessionStorage.getItem('metrics-data');
      if (metricsStorage) {
        const parseMetrics: BoraPoupar = JSON.parse(metricsStorage);
        const managerCart: BoraPoupar = {
          ...parseMetrics,
          cart: [...parseMetrics.cart, dataCart],
        };

        sessionStorage.setItem('metrics-data', JSON.stringify(managerCart));
        updateMetrics();
      }
    }
  };
  const resetAll = () => {
    if (checkIfWindowIsUndefined()) {
      sessionStorage.removeItem('metrics-data');
      setCallStorage(true);
    }
  };
  const deleteItem = (id: string, currencyValue: number) => {
    if (checkIfWindowIsUndefined()) {
      const metricsStorage = sessionStorage.getItem('metrics-data');
      if (metricsStorage) {
        const parseMetrics: BoraPoupar = JSON.parse(metricsStorage);

        const filterItems = parseMetrics.cart.filter(
          (product) => product.id !== id
        );

        const updateCart: BoraPoupar = {
          ...parseMetrics,
          valueCurrent: parseMetrics.valueCurrent + currencyValue,
          totalSpent: filterItems.reduce(
            (acc, curr) => curr.amount * curr.price + acc,
            0
          ),
          cart: filterItems,
        };
        sessionStorage.setItem('metrics-data', JSON.stringify(updateCart));
        setCallStorage(true);
      }
    }
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
    <BoraPouparContext.Provider
      value={{ metrics, addValueTotal, addItemCart, resetAll, deleteItem }}
    >
      {children}
    </BoraPouparContext.Provider>
  );
};
