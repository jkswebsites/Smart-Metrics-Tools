"use client";
import React from 'react'
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useContext } from 'react';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';
import { formatUSA } from '@/app/helpers/formatCurrency';
const PainelData = () => {
  const {smartBuyDatas} = useContext(ContextSmartBuy);
  return (
    <div className='w-[95%] space-y-4 min-h-[200px mx-auto my-4'>
      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Meu valor total:</span>
        <div className='flex items-center justify-center'>
            <GiMoneyStack className='mr-3 text-2xl text-green-400'/>
            <span className='text-green-400 font-bold text-2xl tracking-widest'>{formatUSA(smartBuyDatas.valueTotal)}</span>
        </div>
      </div>


      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Valor Atual:</span>
        <div className='flex items-center justify-center'>
            <MdOutlineAttachMoney className='mr-3 text-2xl text-yellow-400'/>
            <span className='text-yellow-400 font-bold text-2xl tracking-widest'>{formatUSA(smartBuyDatas.valueCurrent)}</span>
        </div>
      </div>

      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Total Gasto:</span>
        <div className='flex items-center justify-center'>
            <FaMoneyBillTransfer className='mr-3 text-2xl text-red-400'/>
            <span className='text-red-400 font-bold text-2xl tracking-widest'>{formatUSA(smartBuyDatas.totalSpent)}</span>
        </div>
      </div>


    </div>
  )
}

export default PainelData
