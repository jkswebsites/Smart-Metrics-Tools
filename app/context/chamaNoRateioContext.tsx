'use client';
import React from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { checkIfWindowIsUndefined } from '../helpers/storage-manager/checkWindow';
import { v4 as uuidv4 } from 'uuid';
import { IInputParticipant } from '../pages/chama-no-rateio/_components/sheet-person-form';
import { json } from 'stream/consumers';
interface IChildren {
  children: ReactNode;
}

export interface IInputs {
  nameItem: string;
  price: number;
  quantity: number;
}
interface ICart extends IInputs {
  id: string;
}
interface IMetricsRateio {
  valueTotal: number;
  totalByPerson: number;
  quantityPerson: number;
}
interface IRateioContext {
  cart: ICart[];
  metrics: IMetricsRateio;
  participants: IParticipants[];
  addItem: (data: IInputs) => void;
  deleteItem: (id: string) => void;
  addParticipant: (data: IInputParticipant) => void;
}
interface IParticipants {
  id: string;
  nickname: string;
  payment: boolean;
}
interface IMetricsManage {
  cart: ICart[];
  metrics: IMetricsRateio;
  participants: IParticipants[];
}
const initialState: IMetricsManage = {
  cart: [],
  metrics: {
    valueTotal: 0,
    totalByPerson: 0,
    quantityPerson: 1,
  },
  participants: [],
};
export const ChamaNoRateioContext = createContext<IRateioContext>({
  ...initialState,
  addItem: () => {},
  deleteItem: () => {},
  addParticipant: () => {},
});

export const ContextChamaNoRateioProvider = ({ children }: IChildren) => {
  const keyStorage = 'rateio-datas';
  const [metrics, setMetrics] = useState<IMetricsManage>({
    cart: initialState.cart,
    metrics: initialState.metrics,
    participants: initialState.participants,
  });
  const [callStorage, setCallStorage] = useState<boolean>(false);

  const addItem = (data: IInputs) => {
    const fullData: ICart = {
      ...data,
      id: uuidv4(),
    };
    if (checkIfWindowIsUndefined()) {
      const datasStorage = localStorage.getItem(keyStorage);

      if (datasStorage) {
        const parseStorage: IMetricsManage = JSON.parse(datasStorage);
        const itemsCart = [...parseStorage.cart, fullData];
        const accValueTotal = itemsCart.reduce(
          (acc, curr) => acc + curr.quantity * curr.price,
          0
        );
        const amountPeople = parseStorage.participants
          ? parseStorage.participants.length
          : 1;
        const totalPeople = amountPeople === 0 ? 1 : amountPeople;
        const addNewItem: IMetricsManage = {
          cart: itemsCart,
          metrics: {
            valueTotal: accValueTotal,
            totalByPerson: accValueTotal / totalPeople,
            quantityPerson: totalPeople,
          },
          participants: parseStorage.participants,
        };
        localStorage.setItem(keyStorage, JSON.stringify(addNewItem));
      } else {
        const addNewItem: IMetricsManage = {
          cart: [fullData],
          metrics: {
            quantityPerson: 1,
            totalByPerson: (data.price * data.quantity) / 1,
            valueTotal: data.price * data.quantity,
          },
          participants: initialState.participants,
        };
        localStorage.setItem(keyStorage, JSON.stringify(addNewItem));
      }
      setCallStorage(true);
    }
  };
  const deleteItem = (id: string) => {
    if (typeof window !== 'undefined') {
      const rateioStorage = localStorage.getItem(keyStorage);
      if (rateioStorage) {
        const parseRateioStorage: IMetricsManage = JSON.parse(rateioStorage);
        const deleteItemCart = parseRateioStorage.cart.filter(
          (item) => item.id !== id
        );
        const newTotal = deleteItemCart.reduce((acc, curr) => {
          const total = curr.price * curr.quantity;
          return acc + total;
        }, 0);
        const getPeoples = parseRateioStorage.participants
          ? parseRateioStorage.participants.length
          : 1;
        const totalPeople = getPeoples === 0 ? 1 : getPeoples;

        const newDatas: IMetricsManage = {
          cart: deleteItemCart,
          metrics: {
            quantityPerson: totalPeople,
            valueTotal: newTotal,
            totalByPerson: newTotal / totalPeople,
          },
          participants: parseRateioStorage.participants,
        };
        localStorage.setItem(keyStorage, JSON.stringify(newDatas));
        setCallStorage(true);
      }
    }
  };
  const addParticipant = (data: IInputParticipant) => {
    const inputParticipant: IParticipants = {
      id: uuidv4(),
      nickname: data.nickname,
      payment: false,
    };

    if (checkIfWindowIsUndefined()) {
      const datasStorage = localStorage.getItem(keyStorage);

      if (datasStorage) {
        const storageMetrics: IMetricsManage = JSON.parse(datasStorage);
        const addNewParticipant = [
          ...storageMetrics.participants,
          inputParticipant,
        ];
        const totalParticipants =
          addNewParticipant.length === 0 ? 1 : addNewParticipant.length;
        const totalCart = storageMetrics.cart.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        );

        const updateMetrics: IMetricsManage = {
          ...storageMetrics,
          metrics: {
            quantityPerson: totalParticipants,
            totalByPerson: totalCart / totalParticipants,
            valueTotal: totalCart,
          },
          participants: addNewParticipant,
        };
        localStorage.setItem(keyStorage, JSON.stringify(updateMetrics));
      } else {
        const addParticipant: IMetricsManage = {
          ...initialState,
          participants: [inputParticipant],
        };
        localStorage.setItem(keyStorage, JSON.stringify(addParticipant));
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
    <ChamaNoRateioContext.Provider
      value={{ ...metrics, addItem, deleteItem, addParticipant }}
    >
      {children}
    </ChamaNoRateioContext.Provider>
  );
};
