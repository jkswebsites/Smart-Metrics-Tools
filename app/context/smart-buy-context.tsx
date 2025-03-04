"use client"
import { createContext,  ReactNode, useEffect, useRef, useState } from "react";


interface ISmartBuy {
    valueTotal: number;
    item: string;
    valueCurrent: number;
    totalSpent: number;
}
interface CartSmartBuy {
    item: string
    amountItem: number,
    total: number;
    valueItem: number;
}
interface IContextSmartBuy {
    smartBuyDatas: ISmartBuy
    addValueTotal?: (valueTotal: number)  => void,
    resetAll?:   () => void,
    managerSmartBuyData?: (data: ManagerSmartProps) => void,
    addCartList?: (data: ManagerSmartProps) => void,
    cartSmartBuy: CartSmartBuy[]

}
interface ManagerSmartProps {
    item: string;
    valueItem: number;
    amountItem: number;
}
const initialState: ISmartBuy = {
    valueTotal: 0,
    item: '',
    valueCurrent: 0,
    totalSpent: 0,
}

export const ContextSmartBuy = createContext<IContextSmartBuy>({smartBuyDatas: initialState, cartSmartBuy: [] });

export const ContextSmartBuyProvider = ({children}: {children: ReactNode}) => {
    const [smartBuyDatas, setSmartBuyDatas] = useState<ISmartBuy>(initialState)
    const [callStorage, setCallStorage] = useState<boolean>(false);
    const [cartSmartBuy, setCartSmartBuy] = useState<CartSmartBuy[]>([])
    let refValueTotal = useRef<number>(0);


    const addValueTotal = (valueTotal: number) => {
        if (typeof window !== 'undefined') {
            const newValue:ISmartBuy = {
                ...smartBuyDatas,
                valueTotal: smartBuyDatas.valueTotal + valueTotal,
                valueCurrent: smartBuyDatas.valueCurrent + valueTotal,
            }
            
            sessionStorage.setItem('smartBuy', JSON.stringify(newValue));
            refValueTotal.current = newValue.valueTotal
            setCallStorage(true);
        }
        
        
    }
    const resetAll = () => {
        sessionStorage.removeItem('smartBuy');
        sessionStorage.removeItem('cartSmartBuy');
        setCartSmartBuy([]);
        refValueTotal.current = 0;
        setCallStorage(true);
    }
    const managerSmartBuyData = (data: ManagerSmartProps) => {
        
        if (typeof window !== 'undefined') {
            const dataStorage = sessionStorage.getItem('smartBuy');

            if(dataStorage) {
                const valueInStorage: ISmartBuy = JSON.parse(dataStorage);
                const newValue:ISmartBuy = {
                    ...smartBuyDatas,
                    item: data.item,
                    valueCurrent: valueInStorage.valueCurrent - (data.valueItem * data.amountItem),
                    totalSpent: smartBuyDatas.totalSpent + (data.valueItem * data.amountItem),
                }
                console.log(newValue);
                
                sessionStorage.setItem('smartBuy', JSON.stringify(newValue));
                setCallStorage(true);
            }
        }
    }
    const addCartList = (data: ManagerSmartProps) => {
        const addValue = {
            ...data,
            total: data.valueItem * data.amountItem
        }
        
        if(typeof window !== 'undefined') {
            const cartSmartBuy = sessionStorage.getItem('cartSmartBuy');
            
            if(cartSmartBuy) {
                const _items = JSON.parse(cartSmartBuy);
                const mergeItems = [..._items, addValue ]
                sessionStorage.setItem('cartSmartBuy', JSON.stringify(mergeItems));
                
            } else {
                sessionStorage.setItem('cartSmartBuy', JSON.stringify([addValue]));
               
            }
            
        }
    }
    useEffect(() => {
    try {
        if (typeof window !== 'undefined') {
            const storageSmartBuy = sessionStorage.getItem('smartBuy');
            
            if(storageSmartBuy) {
                const smartBuyData: ISmartBuy  =  JSON.parse(storageSmartBuy)
                setSmartBuyDatas(smartBuyData);
                
            } else {
                setSmartBuyDatas(initialState);
            }
        }
    } catch (error) {
        console.log(`Ocorreu um error no storage`);
        
    } finally {
        setCallStorage(false)
        
    }
    }, [callStorage]);


    useEffect(() => {
        if(typeof window !== 'undefined') {
            const smartCartStorage = sessionStorage.getItem('cartSmartBuy');

            if(smartCartStorage) {
                const storageDatas: CartSmartBuy[] = JSON.parse(smartCartStorage);
                setCartSmartBuy(storageDatas);
            }
        }
    },[callStorage]);

    return (
        <ContextSmartBuy.Provider value={{smartBuyDatas, addValueTotal, resetAll, managerSmartBuyData, addCartList, cartSmartBuy}}>
            {children}
        </ContextSmartBuy.Provider>
    )
}