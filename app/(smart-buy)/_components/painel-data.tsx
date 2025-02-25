import React from 'react'
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const PainelData = () => {
  return (
    <div className='w-[95%] space-y-4 min-h-[200px mx-auto my-4 sm:w-[500px]'>
      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Meu valor total:</span>
        <div className='flex items-center justify-center'>
            <GiMoneyStack className='mr-3 text-2xl text-green-400'/>
            <span className='text-green-400 font-bold text-2xl'>$: 800,00</span>
        </div>
      </div>


      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Valor Atual:</span>
        <div className='flex items-center justify-center'>
            <MdOutlineAttachMoney className='mr-3 text-2xl text-yellow-400'/>
            <span className='text-yellow-400 font-bold text-2xl'>$: 700,00</span>
        </div>
      </div>

      <div className='w-full bg-neutral-900 flex justify-between items-center px-4 py-2 rounded-lg border border-neutral-500'>
        <span className='text-neutral-300 text-sm'>Total Gasto:</span>
        <div className='flex items-center justify-center'>
            <FaMoneyBillTransfer className='mr-3 text-2xl text-red-400'/>
            <span className='text-red-400 font-bold text-2xl'>$: 700,00</span>
        </div>
      </div>


    </div>
  )
}

export default PainelData
