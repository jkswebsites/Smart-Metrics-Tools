"use client"
import { createContext,  ReactNode, useEffect, useState } from "react";


interface ISmartBuy {
    valueTotal: number;
    item: string;
    valueCurrent: number;
    totalSpent: number;
}
interface IContextSmartBuy {
    smartBuyDatas: ISmartBuy
    addValueTotal?: (valueTotal: number)  => void,
    resetAll?:   () => void,
    managerSmartBuyData?: (data: ManagerSmartProps) => void,

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

export const ContextSmartBuy = createContext<IContextSmartBuy>({smartBuyDatas: initialState });

export const ContextSmartBuyProvider = ({children}: {children: ReactNode}) => {
    const [smartBuyDatas, setSmartBuyDatas] = useState<ISmartBuy>(initialState)
    const [callStorage, setCallStorage] = useState<boolean>(false);
    
    const addValueTotal = (valueTotal: number) => {
        if (typeof window !== 'undefined') {
            const newValue:ISmartBuy = {
                ...smartBuyDatas,
                valueTotal: smartBuyDatas.valueTotal + valueTotal
            }
            
            sessionStorage.setItem('smartBuy', JSON.stringify(newValue));
            setCallStorage(true);
        }
    }
    const resetAll = () => {
        sessionStorage.removeItem('smartBuy')
        setCallStorage(true);
    }
    const managerSmartBuyData = (data: ManagerSmartProps) => {
        console.log(data);
        
        if (typeof window !== 'undefined') {
            const smaryBuyData = sessionStorage.getItem('smartBuy');

            if(smaryBuyData) {
                const newValue:ISmartBuy = {
                    ...smartBuyDatas,
                    item: data.item,
                    valueCurrent: smartBuyDatas.valueTotal - (data.valueItem * data.amountItem),
                    totalSpent: smartBuyDatas.totalSpent + (data.valueItem * data.amountItem),
                }
                console.log(newValue);
                
                sessionStorage.setItem('smartBuy', JSON.stringify(newValue));
                setCallStorage(true);
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


    return (
        <ContextSmartBuy.Provider value={{smartBuyDatas, addValueTotal, resetAll, managerSmartBuyData}}>
            {children}
        </ContextSmartBuy.Provider>
    )
}