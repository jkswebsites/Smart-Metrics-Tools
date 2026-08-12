'use client';
import React from 'react';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { checkIfWindowIsUndefined } from '../helpers/storage-manager/checkWindow';
interface IChildren {
  children: ReactNode;
}
export interface IInputs {
  nameItem: string;
  price: number;
  quantity: number;
}
interface IMetricsRateio {
  valueTotal: number;
  totalByPerson: number;
  quantityPerson: number;
}
interface IRateioContext {
  cart: IInputs[];
  metrics: IMetricsRateio;
  addItem: (data: IInputs) => void;
}
interface IMetricsManage {
  cart: IInputs[];
  metrics: IMetricsRateio;
}
const initialState: IMetricsManage = {
  cart: [],
  metrics: {
    valueTotal: 0,
    quantityItem: 0,
    totalByPerson: 0,
    quantityPerson: 1,
  },
};
export const ChamaNoRateioContext = createContext<IRateioContext>({
  ...initialState,
  addItem: () => {},
});

export const ContextChamaNoRateio = ({ children }: IChildren) => {
  const keyStorage = 'rateio-datas';
  const [metrics, setMetrics] = useState<IMetricsManage>({
    cart: initialState.cart,
    metrics: initialState.metrics,
  });
  const [callStorage, setCallStorage] = useState<boolean>(false);

  const addItem = (data: IInputs) => {
    if (checkIfWindowIsUndefined()) {
      const datasStorage = localStorage.getItem(keyStorage);

      if (datasStorage) {
        const parseStorage: IMetricsManage = JSON.parse(datasStorage);
        const itemsCart = [...parseStorage.cart, data];
        const accValueTotal = itemsCart.reduce(
          (acc, curr) => acc + curr.quantity * curr.price,
          0
        );
        const addNewItem: IMetricsManage = {
          cart: itemsCart,
          metrics: {
            valueTotal: accValueTotal,
            totalByPerson: accValueTotal / itemsCart.length,
            quantityPerson: 1,
          },
        };
        localStorage.setItem(keyStorage, JSON.stringify(addNewItem));
      } else {
        const addNewItem: IMetricsManage = {
          cart: [data],
          metrics: {
            quantityItem: 1,
            quantityPerson: 1,
            totalByPerson: (data.price * data.quantity) / 1,
            valueTotal: data.price * data.quantity,
          },
        };
        localStorage.setItem(keyStorage, JSON.stringify(addNewItem));
      }
      setCallStorage(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rateioStorage = localStorage.getItem(keyStorage);
      if (rateioStorage) {
        const parseRateioStorage: IMetricsManage = JSON.parse(rateioStorage);
        setMetrics(parseRateioStorage);
        setCallStorage(false);
      } else {
        setMetrics(initialState);
      }
    }
  }, [callStorage]);

  return (
    <ChamaNoRateioContext.Provider value={{ ...metrics, addItem }}>
      {children}
    </ChamaNoRateioContext.Provider>
  );
};
